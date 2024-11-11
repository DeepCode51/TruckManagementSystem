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
					
					<form action="expense/${msg }.do" name="Form" id="Form" method="post">
						<input type="hidden" name="EXPENSE_ID" id="EXPENSE_ID" value="${pd.EXPENSE_ID}"/>
						<div id="zhongxin" style="padding-top: 13px;">
						<table id="table_report" class="table table-striped table-bordered table-hover">
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">报销说明:</td>
								<td><input type="text" name="EXPENSE_REMARK" id="EXPENSE_REMARK" value="${pd.EXPENSE_REMARK}" maxlength="255" placeholder="这里输入报销说明" title="报销说明" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">报销类型:</td>
<%-- 								<td><input type="text" name="EXPENSE_TYPE" id="EXPENSE_TYPE" value="${pd.EXPENSE_TYPE}" maxlength="255" placeholder="这里输入报销类型" title="报销类型" style="width:98%;"/></td> --%>
								<td>
									<select name="EXPENSE_TYPE" id="EXPENSE_TYPE" style="width:98%;">
										<option <c:if test="${pd.EXPENSE_TYPE == '货车油费'}">selected</c:if>>货车油费</option>
										<option <c:if test="${pd.EXPENSE_TYPE == '维修费用'}">selected</c:if>>维修费用</option>
										<option <c:if test="${pd.EXPENSE_TYPE == '其它费用'}">selected</c:if>>其它费用</option>
									</select>
								</td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">报销开始时间:</td>
								<td><input class="span10 date-picker" name="EXPENSE_BEGIN_DATE" id="EXPENSE_BEGIN_DATE" value="${pd.EXPENSE_BEGIN_DATE}" type="text" data-date-format="yyyy-mm-dd" readonly="readonly" placeholder="报销开始时间" title="报销开始时间" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">报销人姓名:</td>
<%-- 								<td><input type="text" name="EXPENSE_PERSON_NAME" id="EXPENSE_PERSON_NAME" value="${pd.EXPENSE_PERSON_NAME}" maxlength="255" placeholder="这里输入报销人姓名" title="报销人姓名" style="width:98%;"/></td> --%>
								<td id="yh">
									<select class="chosen-select form-control" name="EXPENSE_PERSON_NAME" id="EXPENSE_PERSON_NAME" data-placeholder="请选择货车驾驶员" style="vertical-align:top;"  title="请选择货车驾驶员" style="width:98%;" >
									<option value=""></option>
									<c:forEach items="${userList}" var="user">
										<option value="${user.NAME }" <c:if test="${user.NAME == pd.EXPENSE_PERSON_NAME }">selected</c:if>>${user.NAME }</option>
									</c:forEach>
									</select>
								</td>
							
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">报销金额:</td>
								<td><input type="number" name="EXPENSE_AMOUNT" id="EXPENSE_AMOUNT" value="${pd.EXPENSE_AMOUNT}" maxlength="32" placeholder="这里输入报销金额" title="报销金额" style="width:98%;"/></td>
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
			if($("#EXPENSE_REMARK").val()==""){
				$("#EXPENSE_REMARK").tips({
					side:3,
		            msg:'请输入报销说明',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#EXPENSE_REMARK").focus();
			return false;
			}
			if($("#EXPENSE_TYPE").val()==""){
				$("#EXPENSE_TYPE").tips({
					side:3,
		            msg:'请输入报销类型',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#EXPENSE_TYPE").focus();
			return false;
			}
			if($("#EXPENSE_BEGIN_DATE").val()==""){
				$("#EXPENSE_BEGIN_DATE").tips({
					side:3,
		            msg:'请输入报销开始时间',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#EXPENSE_BEGIN_DATE").focus();
			return false;
			}
			if($("#EXPENSE_PERSON_NAME").val()==""){
				$("#EXPENSE_PERSON_NAME").tips({
					side:3,
		            msg:'请输入报销人姓名',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#EXPENSE_PERSON_NAME").focus();
			return false;
			}
			if($("#EXPENSE_AMOUNT").val()==""){
				$("#EXPENSE_AMOUNT").tips({
					side:3,
		            msg:'请输入报销金额',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#EXPENSE_AMOUNT").focus();
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