var locat = (window.location+'').split('/'); 
$(function(){if('main'== locat[3]){locat =  locat[0]+'//'+locat[2];}else{locat =  locat[0]+'//'+locat[2]+'/'+locat[3];};});

layui.define(['jquery','contextMenu'], function (exports) {
    var contextMenu = layui.contextMenu;
    var $ = layui.jquery;
    var ext = {
        init : function(){//定义右键操作
            $(".layim-list-friend >li > ul > li").contextMenu({
                width: 140, // width
                itemHeight: 30, // 菜单项height
                bgColor: "#fff", // 背景颜色
                color: "#333", // 字体颜色
                fontSize: 15, // 字体大小
                hoverBgColor: "#009bdd", // hover背景颜色
                hoverColor: "#fff", // hover背景颜色
                target: function(ele) { // 当前元素
                    $(".ul-context-menu").attr("data-id",ele.find("b").html());
                    $(".ul-context-menu").attr("data-name",ele.find("span").html());
                    $(".ul-context-menu").attr("data-img",ele.find("img").attr('src'));
                },
                menu: [
                    { // 菜单项
                        text: "删除好友",
                        icon: "&#xe640;",
                        callback: function(ele) {
                        	var othis = ele.parent();
                        	del("null",othis[0].dataset.id,othis[0].dataset.name);
                        	
                        }
                    },                
                    {
                        text: "拉黑名单",
                        icon: "&#xe612;",
                        callback: function(ele) {
                        	var othis = ele.parent();
                        	pullblack("null",othis[0].dataset.id,othis[0].dataset.name);
                        }
                    },
                    {
                        text: "转移分组",
                        icon: "&#xe66b;",
                        callback: function(ele) {
                        	var othis = ele.parent();
                        	moveGroup(othis[0].dataset.id);
                        }
                    },
                    {
                        text: "查看资料",
                        icon: "&#xe66e;",
                        callback: function(ele) {
                        	var othis = ele.parent();
                        	viewUser(othis[0].dataset.id);
                        }
                    }                                                    
                ]
            });
        }
    }
  exports('readyMenu', ext);
}); 

//删除
function del(Id,FUSERNAME,NAME){
	layer.confirm("确认要删除"+NAME+"吗?", { title: "删除好友" }, function (index) {
        layer.close(index);
        removeFriendByI(FUSERNAME); //从自己好友栏移除  此方法在im.jsp页面中
        $.post(locat+"/friends/delete.do", { FRIENDS_ID:Id,FUSERNAME:FUSERNAME}, function (data) {
            layer.alert(data, {
                title: "删除操作",
                btn: ['确定']
            },
                function (index, item) {});
        });
    }); 
}

//拉黑
function pullblack(Id,FUSERNAME,NAME){
	layer.confirm("确认要把"+NAME+"拉入黑名单吗?拉黑后也会在对方好友栏删除您", { title: "拉黑好友" }, function (index) {
        layer.close(index);
        removeFriendByI(FUSERNAME); 	//从自己好友栏移除  此方法在im.jsp页面中
		removeIFromFriend(FUSERNAME);	//从对方好友栏里面删除自己
        $.post(locat+"/friends/pullblack.do", { FRIENDS_ID:Id,FUSERNAME:FUSERNAME}, function (data) {
            layer.alert(data, {
                title: "删除操作",
                btn: ['确定']
            },
                function (index, item) {});
        });
    }); 
}

//转移分组
function moveGroup(FUSERNAME){
	 top.jzts();
	 var diag = new top.Dialog();
	 diag.Drag=true;
	 diag.Title ="转移分组";
	 diag.URL = locat+'/friends/goEdit.do?FRIENDS_ID=null&FUSERNAME='+FUSERNAME
	 diag.Width = 450;
	 diag.Height = 155;
	 diag.Modal = true;				//有无遮罩窗口
	 diag.CancelEvent = function(){ //关闭事件
		 if(diag.innerFrame.contentWindow.document.getElementById('zhongxin').style.display == 'none'){
			 window.location.reload();
		}
		diag.close();
	 };
	 diag.show();
}

//查看用户资料
function viewUser(USERNAME){
	if("admin" == USERNAME){
		layer.alert('不能查看admin用户');
		return;
	}
	layer.open({
	    type: 2,
	    title: '好友资料',
	    shadeClose: true,
	    shade: false,
	    maxmin: false, //开启最大化最小化按钮
	    area: ['469px', '420px'],
	    content: locat+'/user/view.do?USERNAME='+USERNAME
	  });
}



//作者 f had min QQ 3 135 9 6790