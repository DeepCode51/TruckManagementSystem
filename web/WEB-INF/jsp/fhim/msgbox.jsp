<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
 
<!DOCTYPE html>
<html>
<base href="<%=basePath%>">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>消息盒子</title>

<link rel="stylesheet" href="plugins/fhim/dist/css/layui.css?v=1">
<style>
.layim-msgbox{margin: 15px;}
.layim-msgbox li{position: relative; margin-bottom: 10px; padding: 0 130px 10px 60px; padding-bottom: 10px; line-height: 22px; border-bottom: 1px dotted #e2e2e2;}
.layim-msgbox .layim-msgbox-tips{margin: 0; padding: 10px 0; border: none; text-align: center; color: #999;}
.layim-msgbox .layim-msgbox-system{padding: 0 10px 10px 10px;}
.layim-msgbox li p span{padding-left: 5px; color: #999;}
.layim-msgbox li p em{font-style: normal; color: #FF5722;}

.layim-msgbox-avatar{position: absolute; left: 0; top: 0; width: 50px; height: 50px;}
.layim-msgbox-user{padding-top: 5px;}
.layim-msgbox-content{margin-top: 3px;}
.layim-msgbox .layui-btn-small{padding: 0 15px; margin-left: 5px;}
.layim-msgbox-btn{position: absolute; right: 0; top: 12px; color: #999;}
</style>
</head>
<body>

<ul class="layim-msgbox" id="LAY_view"></ul>

<textarea title="消息模版" id="LAY_tpl" style="display:none;">
{{# layui.each(d.data, function(index, item){
  if(item.from){ }}
    <li data-uid="{{ item.from }}" data-fromGroup="{{ item.from_group }}" data-type="{{ item.type }}" data-msgid="{{ item.id }}" data-qgroupid="{{ item.qgroupid }}">
      <a href="/u/{{ item.from }}/" target="_blank">
        <img src="{{ item.user.avatar }}" class="layui-circle layim-msgbox-avatar">
      </a>
      <p class="layim-msgbox-user">
        <a href="/u/{{ item.from }}/" target="_blank">{{ item.user.username||'' }}</a>
        <span>{{ item.time }}</span>
      </p>
      <p class="layim-msgbox-content">
        {{ item.content }} 
        <span>{{ item.remark ? '附言: '+item.remark : '' }}</span>
      </p>
      <p class="layim-msgbox-btn">
        <button class="layui-btn layui-btn-small" data-type="agree">同意</button>
        <button class="layui-btn layui-btn-small layui-btn-primary" data-type="refuse">拒绝</button>
      </p>
    </li>
  {{# } else { }}
    <li class="layim-msgbox-system">
      <p><em>系统：</em>{{ item.content }}<span>{{ item.time }}</span></p>
    </li>
  {{# }
}); }}
</textarea>

<script src="plugins/fhim/dist/layui.js?v=1"></script>
<script>
layui.use(['layim', 'flow'], function(){
  var layim = layui.layim
  ,layer = layui.layer
  ,laytpl = layui.laytpl
  ,$ = layui.jquery
  ,flow = layui.flow;

  var cache = {}; //用于临时记录请求到的数据

  //请求消息
  var renderMsg = function(page, callback){
    $.get('iminterface/msgboxdata', {	//消息盒子数据接口
      page: page || 1
    }, function(res){
      if(res.code != 0){
        return layer.msg(res.msg);
      }
      //记录来源用户信息
      layui.each(res.data, function(index, item){
        cache[item.from] = item.user;
      });
      callback && callback(res.data, res.pages);
    });
  };

  flow.load({
    elem: '#LAY_view' 
    ,isAuto: false
    ,end: '<li class="layim-msgbox-tips" onclick="allmsg();" style="cursor:pointer;"><button class="layui-btn layui-btn-xs">消息管理</button></li>'
    ,done: function(page, next){ 
      renderMsg(page, function(data, pages){
        var html = laytpl(LAY_tpl.value).render({
          data: data
          ,page: page
        });
        next(html, page < pages);
      });
    }
  });

  
  //打开页面即把消息标记为已读
  $.post('iminterface/read', {
    type: 1
  });
 
  /*操作*/
  var active = {
		  
    agree: function(othis){				//同意
      var li = othis.parents('li')
      ,uid = li.data('uid')
      ,from_group = li.data('fromGroup')
      ,type = li.data('type')
      ,msgid = li.data('msgid')
      ,qgroupid = li.data('qgroupid')
      ,user = cache[uid];
    
      parent.layui.layim.setFriendGroup({
        type: type 								  //group or friend
        ,username: user.username
        ,avatar: user.avatar
        ,group: parent.layui.layim.cache().friend //获取好友分组数据
        ,submit: function(group, index){
        	
		 	$.ajax({
				type: "POST",
				url: 'iminterface/agree.do',	 //同意申请(好友或者群)接口
			   	data: {SYSMSG_ID:msgid,FGROUP_ID:group,FUSERNAME:uid,TYPE:type,FNAME:user.username,QGROUP_ID:qgroupid,tm:new Date().getTime()},
				dataType:'json',
				cache: false,
				success: function(data){}
			});
			if("friend" == type){
				top.agreeFriend(uid);			//同意对方申请好友，发送同意信息给对方(此函数在 im.jsp 页面)
				parent.layui.layim.addList({	//将好友追加到主面板
					  type: 'friend'
					  ,avatar: user.avatar 		//好友头像
					  ,username: user.username 	//好友昵称
					  ,groupid: group 			//所在的分组id
					  ,id: uid 					//好友ID
					  ,sign: user.sign 			//好友签名
					});
				parent.layui.readyMenu.init(); 	//更新右键点击事件
			}else{
				top.agreeQgroup(uid,qgroupid);	//同意对方申请加群，发送同意信息给对方(此函数在 im.jsp 页面)
			}
			
			parent.layer.close(index);
			othis.parent().html('已同意');
			
        }
      });
    }

    ,refuse: function(othis){		//拒绝
    	 var li = othis.parents('li')
         ,uid = li.data('uid')
         ,from_group = li.data('fromGroup')
         ,type = li.data('type')
         ,msgid = li.data('msgid')
         ,qgroupid = li.data('qgroupid')
         ,user = cache[uid];
	      layer.confirm('确定拒绝吗？', function(index){
	    	  $.ajax({
					type: "POST",
					url: 'iminterface/refuse.do',	 //拒绝申请(好友或者群)接口
				   	data: {SYSMSG_ID:msgid,FUSERNAME:uid,TYPE:type,FNAME:user.username,QGROUP_ID:qgroupid,tm:new Date().getTime()},
					dataType:'json',
					cache: false,
					success: function(data){
						if("01" == data.result){
							layer.close(index);
					        othis.parent().html('<em>已经在群了</em>');
						}else{
							layer.close(index);
					        othis.parent().html('<em>已拒绝</em>');
					        top.applyFriend(uid);		//拒绝对方申请好友，发送信息给对方(此函数在 im.jsp 页面)注意：通知方式和申请好友通知函数一样，所以用同样的函数即可
						}
						
					}
				});
	      });
    }
  };

  $('body').on('click', '.layui-btn', function(){
    var othis = $(this), type = othis.data('type');
    active[type] ? active[type].call(this, othis) : '';
  });
});

//打开消息管理窗口
function allmsg(){
	parent.layer.open({
	    type: 2,
	    title: '系统消息',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['1000px', '600px'],
	    content: '<%=basePath%>sysmsg/list.do'
	  });
}
</script>
</body>
</html>
