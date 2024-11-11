<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
	<head>
	<base href="<%=basePath%>">
	<!-- jsp文件头和头部 -->
	<%@ include file="../../system/index/top.jsp"%>
	<link rel="stylesheet" href="plugins/fhim/dist/css/layui.css?v=1">
</head>
<body class="no-skin">
<!-- /section:basics/navbar.layout -->
<div class="main-container" id="main-container">
	<!-- /section:basics/sidebar -->
	<div class="main-content">
		<div class="main-content-inner">
			<div class="page-content">
				<div class="row">
					<div class="col-xs-12">
					
					<form action="friends/search.do" name="Form" id="Form" method="post">
						<div id="zhongxin" style="padding-top: 13px;">
						<table id="table_report" class="table table-striped table-bordered table-hover">
							<tr>
								<td>
									<div class="nav-search">
										<span class="input-icon">
											<input type="text" placeholder="请输入用户名或者姓名"  style="width: 500px;" class="nav-search-input" id="nav-search-input" autocomplete="off" name="keywords" value="${pd.keywords}" placeholder="请输入用户名或者姓名"/>
											<i class="ace-icon fa fa-search nav-search-icon"></i>
										</span>
										<a class="btn btn-light btn-xs" onclick="tosearch();" title="检索" style="height: 30px;" ><i style="margin-top: -15px;" id="nav-search-icon" class="ace-icon fa fa-search bigger-110 nav-search-icon blue"></i></a>&nbsp;&nbsp;
										<a class="btn btn-light btn-xs" href="qgroup/goAdd" title="找群" style="height: 30px;" >找群</a>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<table>
										<tr>
											<!-- 开始循环 -->	
											<c:choose>
												<c:when test="${not empty varList}">
													<c:forEach items="${varList}" var="var" varStatus="vs">
														<td>
															<div style="padding-left:30px;padding-top:15px;padding-bottom:15px" class="center">
															    <li data-uid="${var.USERNAME}" data-fromGroup="0" data-username="${var.NAME}" data-avatar="${(null == var.PHOTO1 or '' == var.PHOTO1)?'static/ace/avatars/userb.jpg':var.PHOTO1}" >
															      <a data-type="agree" class="layui-fh" style="cursor:pointer;">
															        <img src="${(null == var.PHOTO2 or '' == var.PHOTO2)?'static/ace/avatars/user.jpg':var.PHOTO2}" class="layui-circle layim-msgbox-avatar">
															      </a>
															      <p class="layim-msgbox-user">
															        <a data-type="agree" class="layui-fh1" onclick="viewUser('${var.USERNAME}');" style="cursor:pointer;">${var.NAME}</a>
															      </p>
															    </li>
															</div>
														</td>
													</c:forEach>
												</c:when>
												<c:otherwise>
													<tr class="main_info">
														<td colspan="100">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${null == pd.keywords?"请先搜索":'没有相关好友'}</td>
													</tr>
												</c:otherwise>
											</c:choose>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						</div>
						<div id="zhongxin2" class="center" style="display:none"><br/><br/><br/><br/><br/><img src="static/images/jiazai.gif" /><br/><h4 class="lighter block green">搜索中...</h4></div>
					</form>
					
					</div>
					<!-- /.col -->
				</div>
				<!-- /.row -->
			</div>
			<!-- /.page-content -->
		</div>
	</div>
	<!-- /.main-content -->
</div>
<!-- /.main-container -->


	<!-- 页面底部js¨ -->
	<%@ include file="../../system/index/foot.jsp"%>
	<script src="plugins/fhim/dist/layui.js?v=1"></script>
	<!--提示框-->
	<script type="text/javascript" src="static/js/jquery.tips.js"></script>
	<script type="text/javascript">
	
		$(function(){
			$("#nav-search-input").tips({
				side:3,
	            msg:'用户名或姓名',
	            bg:'#AE81FF',
	            time:1
	        });
		});
	
		//检索
		function tosearch(){
			$("#Form").submit();
			$("#zhongxin2").show();
		}
		
		//查看用户资料
		function viewUser(USERNAME){
			if("admin" == USERNAME){
				layer.alert('不能查看admin用户');
				return;
			}
			layer.open({
			    type: 2,
			    title: '他(她)的资料',
			    shadeClose: true,
			    shade: false,
			    maxmin: false, //开启最大化最小化按钮
			    area: ['469px', '420px'],
			    content: '<%=basePath%>user/view.do?USERNAME='+USERNAME
			  });
		}
		
		//点击好友的头像
		var cache = {}; //用于临时记录请求到的数据
		layui.use(['layim', 'flow'], function(){
			  var layim = layui.layim
			  ,layer = layui.layer
			  ,laytpl = layui.laytpl
			  ,$ = layui.jquery
			  ,flow = layui.flow;
			  //操作
			  var active = { 
				agree: function(othis){
					var li = othis.parents('li')
				      ,uid = li.data('uid')
				      ,from_group = li.data('fromGroup')
				      ,username = li.data('username')
				      ,avatar = li.data('avatar')
					
					layim.add({
						  type: 'friend' 			//friend：申请加好友、group：申请加群
						  ,username: username 		//好友昵称，若申请加群，参数为：groupname
						  ,avatar: avatar		 	//头像
						  ,submit: function(group, remark, index){
						    console.log(group); 	//获取选择的好友分组ID，若为添加群，则不返回值
						    console.log(remark); 	//获取附加信息
						    layer.close(index); 	//关闭改面板
							$.ajax({
								type: "POST",
								url: 'iminterface/addFriends.do',	//添加好友接口
						    	data: {FUSERNAME:uid,FGROUP_ID:group,BZ:remark,tm:new Date().getTime()},
								dataType:'json',
								cache: false,
								success: function(data){
									if('01' == data.result){
										$("#nav-search-input").tips({
											side:3,
								            msg:'添加成功,等待对方同意',
								            bg:'#AE81FF',
								            time:5
								 		});
										top.applyFriend(uid);	//申请好友消息发送给对方，此函数在 im.jsp页面
									}else{
										$("#nav-search-input").tips({
											side:3,
								            msg:'您已经添加过他(她)了,无需再添加了',
								            bg:'#AE81FF',
								            time:5
								 		});
									}
								}
							});
						  }
						});
				}
			  };
			  $('body').on('click', '.layui-fh', function(){
				    var othis = $(this), type = othis.data('type');
				    active[type] ? active[type].call(this, othis) : '';
				  });
		});
	</script>
</body>
</html>