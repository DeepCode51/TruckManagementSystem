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
					
					<form action="salary/${msg }.do" name="Form" id="Form" method="post">
						<input type="hidden" name="SALARY_ID" id="SALARY_ID" value="${pd.SALARY_ID}"/>
						<div id="zhongxin" style="padding-top: 13px;">
						<table id="table_report" class="table table-striped table-bordered table-hover">
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">用户名:</td>
<%-- 								<td><input type="text" name="USER_ID" id="USER_ID" value="${pd.USER_ID}" maxlength="255" placeholder="这里输入用户名" title="用户名" style="width:98%;"/></td> --%>
								<td id="yh">
									<select class="chosen-select form-control" name="USER_ID" id="USER_ID" data-placeholder="请选择用户名" style="vertical-align:top;"  title="请选择用户名" style="width:98%;" >
									<option value=""></option>
									<c:forEach items="${userList}" var="user">
										<option value="${user.NAME }" <c:if test="${user.NAME == pd.USER_ID }">selected</c:if>>${user.NAME }</option>
									</c:forEach>
									</select>
								</td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">工资月份:</td>
								<td><input type="number" name="SALARY_MONTH" id="SALARY_MONTH" value="${pd.SALARY_MONTH}" maxlength="32" placeholder="这里输入工资月份" title="工资月份" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">基本工资:</td>
								<td><input type="number" name="SALARY_BASE" id="SALARY_BASE" value="${pd.SALARY_BASE}" maxlength="32" placeholder="这里输入基本工资" title="基本工资" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">运单工资:</td>
								<td><input type="number" name="SALARY_ADD" id="SALARY_ADD" value="${pd.SALARY_ADD}" maxlength="32" placeholder="这里输入运单工资" title="运单工资" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">扣减工资:</td>
								<td><input type="number" name="SALARY_SBU" id="SALARY_SBU" value="${pd.SALARY_SBU}" maxlength="32" placeholder="这里输入扣减工资" title="扣减工资" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">合计金额:</td>
								<td><input type="number" name="SALARY_SUM" id="SALARY_SUM" value="${pd.SALARY_SUM}" maxlength="32" placeholder="这里输入合计金额" title="合计金额" style="width:98%;"/></td>
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
			if($("#USER_ID").val()==""){
				$("#USER_ID").tips({
					side:3,
		            msg:'请输入用户名',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#USER_ID").focus();
			return false;
			}
			if($("#SALARY_BASE").val()==""){
				$("#SALARY_BASE").tips({
					side:3,
		            msg:'请输入基本工资',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#SALARY_BASE").focus();
			return false;
			}
			if($("#SALARY_ADD").val()==""){
				$("#SALARY_ADD").tips({
					side:3,
		            msg:'请输入运单工资',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#SALARY_ADD").focus();
			return false;
			}
			if($("#SALARY_SUM").val()==""){
				$("#SALARY_SUM").tips({
					side:3,
		            msg:'请输入合计金额',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#SALARY_SUM").focus();
			return false;
			}
			if($("#SALARY_MONTH").val()==""){
				$("#SALARY_MONTH").tips({
					side:3,
		            msg:'请输入工资月份',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#SALARY_MONTH").focus();
			return false;
			}
			if($("#SALARY_SBU").val()==""){
				$("#SALARY_SBU").tips({
					side:3,
		            msg:'请输入扣减工资',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#SALARY_SBU").focus();
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