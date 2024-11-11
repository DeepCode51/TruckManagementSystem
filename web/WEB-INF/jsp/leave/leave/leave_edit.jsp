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
					
					<form action="leave/${msg }.do" name="Form" id="Form" method="post">
						<input type="hidden" name="LEAVE_ID" id="LEAVE_ID" value="${pd.LEAVE_ID}"/>
						<div id="zhongxin" style="padding-top: 13px;">
						<table id="table_report" class="table table-striped table-bordered table-hover">
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">请假事由:</td>
								<td><input type="text" name="LEAVE_REASON" id="LEAVE_REASON" value="${pd.LEAVE_REASON}" maxlength="255" placeholder="这里输入请假事由" title="请假事由" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">请假类型:</td>
								<td><input type="text" name="LEAVE_TYPE" id="LEAVE_TYPE" value="${pd.LEAVE_TYPE}" maxlength="255" placeholder="这里输入请假类型" title="请假类型" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">请假开始时间:</td>
								<td><input class="span10 date-picker" name="LEAVE_BEGIN_DATE" id="LEAVE_BEGIN_DATE" value="${pd.LEAVE_BEGIN_DATE}" type="text" data-date-format="yyyy-mm-dd" readonly="readonly" placeholder="请假开始时间" title="请假开始时间" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">请假结束时间:</td>
								<td><input class="span10 date-picker" name="LEAVE_END_DATE" id="LEAVE_END_DATE" value="${pd.LEAVE_END_DATE}" type="text" data-date-format="yyyy-mm-dd" readonly="readonly" placeholder="请假结束时间" title="请假结束时间" style="width:98%;"/></td>
							</tr>
							<tr>
								<td style="width:75px;text-align: right;padding-top: 13px;">请假人姓名:</td>
<%-- 								<td><input type="text" name="LEAVE_PERSON_NAME" id="LEAVE_PERSON_NAME" value="${pd.LEAVE_PERSON_NAME}" maxlength="255" placeholder="这里输入请假人姓名" title="请假人姓名" style="width:98%;"/></td> --%>
								<td id="yh">
									<select class="chosen-select form-control" name="LEAVE_PERSON_NAME" id="LEAVE_PERSON_NAME" data-placeholder="请选择请假人姓名" style="vertical-align:top;"  title="请选择请假人姓名" style="width:98%;" >
									<option value=""></option>
									<c:forEach items="${userList}" var="user">
										<option value="${user.NAME }" <c:if test="${user.NAME == pd.LEAVE_PERSON_NAME }">selected</c:if>>${user.NAME }</option>
									</c:forEach>
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
			if($("#LEAVE_REASON").val()==""){
				$("#LEAVE_REASON").tips({
					side:3,
		            msg:'请输入请假事由',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#LEAVE_REASON").focus();
			return false;
			}
			if($("#LEAVE_TYPE").val()==""){
				$("#LEAVE_TYPE").tips({
					side:3,
		            msg:'请输入请假类型',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#LEAVE_TYPE").focus();
			return false;
			}
			if($("#LEAVE_BEGIN_DATE").val()==""){
				$("#LEAVE_BEGIN_DATE").tips({
					side:3,
		            msg:'请输入请假开始时间',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#LEAVE_BEGIN_DATE").focus();
			return false;
			}
			if($("#LEAVE_END_DATE").val()==""){
				$("#LEAVE_END_DATE").tips({
					side:3,
		            msg:'请输入请假结束时间',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#LEAVE_END_DATE").focus();
			return false;
			}
			if($("#LEAVE_PERSON_NAME").val()==""){
				$("#LEAVE_PERSON_NAME").tips({
					side:3,
		            msg:'请输入请假人姓名',
		            bg:'#AE81FF',
		            time:2
		        });
				$("#LEAVE_PERSON_NAME").focus();
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