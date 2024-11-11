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
	<!-- 下拉框 -->
	<link rel="stylesheet" href="static/ace/css/chosen.css" />
	<!-- jsp文件头和头部 -->
	<%@ include file="../../system/index/top.jsp"%>
	<!-- 日期框 -->
	<link rel="stylesheet" href="static/ace/css/datepicker.css" />
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
					
					<form action="car/${msg }.do" name="Form" id="Form" method="post">
						<input type="hidden" name="CAR_ID" id="CAR_ID" value="${pd.CAR_ID}"/>
						<div id="zhongxin" style="padding-top: 13px;">
						<table id="table_report" class="table table-striped table-bordered table-hover">
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">货车名称:</td>
								<td><input type="text" name="CAR_NAME" id="CAR_NAME" value="${pd.CAR_NAME}" maxlength="255" placeholder="这里输入货车名称" title="货车名称" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">货车类型:</td>
								<td><input type="text" name="CAR_TYPE" id="CAR_TYPE" value="${pd.CAR_TYPE}" maxlength="255" placeholder="这里输入货车类型" title="货车类型" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">货车驾驶员姓名:</td>
<%-- 								<td><input type="text" name="CAR_DRIVER_NAME" id="CAR_DRIVER_NAME" value="${pd.CAR_DRIVER_NAME}" maxlength="255" placeholder="这里输入货车驾驶员姓名" title="货车驾驶员姓名" style="width:98%;"/></td> --%>
								<td id="yh">
									<select class="chosen-select form-control" name="CAR_DRIVER_NAME" id="CAR_DRIVER_NAME" data-placeholder="请选择货车驾驶员" style="vertical-align:top;"  title="请选择货车驾驶员" style="width:98%;" >
									<option value=""></option>
									<c:forEach items="${userList}" var="user">
										<option value="${user.USER_ID }" <c:if test="${user.USER_ID == pd.CAR_DRIVER_NAME }">selected</c:if>>${user.NAME }</option>
									</c:forEach>
									</select>
								</td>
							
							</tr>
							
							
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">订单名称:</td>
<%-- 								<td><input type="text" name="ORDER_NAME" id="ORDER_NAME" value="${pd.ORDER_NAME}" maxlength="255" placeholder="这里输入订单名称" title="订单名称" style="width:98%;"/></td> --%>
								<td id="dd">
									<select class="chosen-select form-control" name="CAR_DRIVER_ID" id="CAR_DRIVER_ID" data-placeholder="请选择货运订单" style="vertical-align:top;"  title="请选择货运订单" style="width:98%;" >
									<option value=""></option>
									<c:forEach items="${orderList}" var="order">
										<option value="${order.ORDER_ID }" <c:if test="${order.ORDER_ID == pd.CAR_DRIVER_ID }">selected</c:if>>${order.ORDER_NAME }</option>
									</c:forEach>
									</select>
								</td>
							
							</tr>                                   
							
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">货运金额:</td>
								<td><input type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" value="${pd.CAR_AMOUNT}" maxlength="32" placeholder="这里输入订单金额" title="订单金额" style="width:98%;"/></td>
							</tr>
							
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">货车状态:</td>
<%-- 								<td><input type="text" name="CAR_STATUS" id="CAR_STATUS" value="${pd.CAR_STATUS}" maxlength="64" placeholder="这里输入货车状态" title="货车状态" style="width:98%;"/></td> --%>
								
								<td>
									<select name="CAR_STATUS" id="CAR_STATUS" style="width:98%;">
										<option <c:if test="${pd.CAR_STATUS == '空闲'}">selected</c:if>>空闲</option>
										<option <c:if test="${pd.CAR_STATUS == '运输'}">selected</c:if>>运输</option>
										<option <c:if test="${pd.CAR_STATUS == '维修'}">selected</c:if>>维修</option>
									</select>
								</td>
								
								
							</tr>
							<tr>
								<td style="text-align: center;" colspan="10">
									<a class="btn btn-mini btn-primary" onclick="save();">保存</a>
									<a class="btn btn-mini btn-danger" onclick="top.Dialog.close();">取消</a>
								</td>
							</tr>
						</table>
						</div>
						<div id="zhongxin2" class="center" style="display:none"><br/><br/><br/><br/><br/><img src="static/images/jiazai.gif" /><br/><h4 class="lighter block green">提交中...</h4></div>
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
	<!-- 下拉框 -->
	<script src="static/ace/js/chosen.jquery.js"></script>
	<!-- 日期框 -->
	<script src="static/ace/js/date-time/bootstrap-datepicker.js"></script>
	<!--提示框-->
	<script type="text/javascript" src="static/js/jquery.tips.js"></script>
		<script type="text/javascript">
		$(top.hangge());
		//保存
		function save(){
			if($("#CAR_NAME").val()==""){
				$("#CAR_NAME").tips({
					side:3,
		            msg:'请输入货车名称',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#CAR_NAME").focus();
			return false;
			}
			if($("#CAR_TYPE").val()==""){
				$("#CAR_TYPE").tips({
					side:3,
		            msg:'请输入货车类型',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#CAR_TYPE").focus();
			return false;
			}
			if($("#CAR_DRIVER_NAME").val()==""){
				$("#CAR_DRIVER_NAME").tips({
					side:3,
		            msg:'请输入货车驾驶员姓名',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#CAR_DRIVER_NAME").focus();
			return false;
			}
			if($("#CAR_STATUS").val()==""){
				$("#CAR_STATUS").tips({
					side:3,
		            msg:'请输入货车状态',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#CAR_STATUS").focus();
			return false;
			}
			$("#Form").submit();
			$("#zhongxin").hide();
			$("#zhongxin2").show();
		}
		
		$(function() {
			//日期框
			$('.date-picker').datepicker({autoclose: true,todayHighlight: true});
		});
		</script>
</body>
</html>