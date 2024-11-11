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
					
					<form action="order/${msg }.do" name="Form" id="Form" method="post">
						<input type="hidden" name="ORDER_ID" id="ORDER_ID" value="${pd.ORDER_ID}"/>
						<div id="zhongxin" style="padding-top: 13px;">
						<table id="table_report" class="table table-striped table-bordered table-hover">
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">订单名称:</td>
								<td><input type="text" name="ORDER_NAME" id="ORDER_NAME" value="${pd.ORDER_NAME}" maxlength="255" placeholder="这里输入订单名称" title="订单名称" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">订单类型:</td>
								<td><input type="text" name="ORDER_TYPE" id="ORDER_TYPE" value="${pd.ORDER_TYPE}" maxlength="255" placeholder="这里输入订单类型" title="订单类型" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">开始地址:</td>
								<td><input type="text" name="ORDER_START_ADD" id="ORDER_START_ADD" value="${pd.ORDER_START_ADD}" maxlength="255" placeholder="这里输入开始地址" title="开始地址" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">结束地址:</td>
								<td><input type="text" name="ORDER_END_ADD" id="ORDER_END_ADD" value="${pd.ORDER_END_ADD}" maxlength="255" placeholder="这里输入结束地址" title="结束地址" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">订单金额:</td>
								<td><input type="number" name="ORDER_AMOUNT" id="ORDER_AMOUNT" value="${pd.ORDER_AMOUNT}" maxlength="32" placeholder="这里输入订单金额" title="订单金额" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">订单状态:</td>
<%-- 								<td><input type="text" name="ORDER_STATUS" id="ORDER_STATUS" value="${pd.ORDER_STATUS}" maxlength="255" placeholder="这里输入订单状态" title="订单状态" style="width:98%;"/></td> --%>
								<td>
									<select name="ORDER_STATUS" id="ORDER_STATUS" style="width:98%;">
										<option <c:if test="${pd.ORDER_STATUS == '未结单'}">selected</c:if>>未结单</option>
										<option <c:if test="${pd.ORDER_STATUS == '运输中'}">selected</c:if>>运输中</option>
										<option <c:if test="${pd.ORDER_STATUS == '已完成'}">selected</c:if>>已完成</option>
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
			if($("#ORDER_NAME").val()==""){
				$("#ORDER_NAME").tips({
					side:3,
		            msg:'请输入订单名称',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#ORDER_NAME").focus();
			return false;
			}
			if($("#ORDER_TYPE").val()==""){
				$("#ORDER_TYPE").tips({
					side:3,
		            msg:'请输入订单类型',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#ORDER_TYPE").focus();
			return false;
			}
			if($("#ORDER_START_ADD").val()==""){
				$("#ORDER_START_ADD").tips({
					side:3,
		            msg:'请输入开始地址',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#ORDER_START_ADD").focus();
			return false;
			}
			if($("#ORDER_END_ADD").val()==""){
				$("#ORDER_END_ADD").tips({
					side:3,
		            msg:'请输入结束地址',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#ORDER_END_ADD").focus();
			return false;
			}
			if($("#ORDER_AMOUNT").val()==""){
				$("#ORDER_AMOUNT").tips({
					side:3,
		            msg:'请输入订单金额',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#ORDER_AMOUNT").focus();
			return false;
			}
			if($("#ORDER_STATUS").val()==""){
				$("#ORDER_STATUS").tips({
					side:3,
		            msg:'请输入订单状态',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#ORDER_STATUS").focus();
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