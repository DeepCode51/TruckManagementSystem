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
	<!-- 代码编辑器 -->
    <script src="plugins/codeEditor/jquery.min.js"></script>
    <script>
   	 	var codetype="php7";
    	var unid="59398d6898fb6";
    </script>
    <script src="plugins/codeEditor/runcode.js"></script>
	<style type="text/css" media="screen">
   		#editor { 
      			 //position: absolute;
      			 width: 100%;
      			 height: 600px;
      			 float: left;
       		font-size: 14px;
  				 }
	</style>
	<!-- 代码编辑器 -->
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
					
						<table id="table_report" class="table table-striped table-bordered table-hover">
							<tr>
								<td colspan="10">
      							   <div class="starter-template">
									 	 <div id="editor" class="ace_editor ace-monokai ace_dark"><textarea id="codeContent" class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 17px; width: 8px; left: 45px; top: 0px;"></textarea></div>
								  </div>
								</td>
							</tr>
						</table>
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
	<script src="plugins/codeEditor/ace.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		$(top.hangge());
		$(getCodeFromView());
		$(cmainFrame());
		
		if(ie_error()){
	        $('#editor').hide();
	    }else{
	        $('#editorBox').hide();
	        ace.require("ace/ext/language_tools");
	        var editor = ace.edit("editor");
	        editor.setOptions({
	            enableBasicAutocompletion: true,
	            enableSnippets: true,
	            enableLiveAutocompletion: true
	        });
	        editor.setTheme("ace/theme/monokai");
	        editor.getSession().setMode("ace/mode/php");
	    }
		
		//获取code
		function getCodeFromView(){
			var CODEEDITOR_ID = "${pd.CODEEDITOR_ID}";
			$.ajax({
				type: "POST",
				url: '<%=basePath%>codeeditor/getCodeFromView.do',
		    	data: {CODEEDITOR_ID:CODEEDITOR_ID,tm:new Date().getTime()},
				dataType:'json',
				cache: false,
				success: function(data){
					if("00" == data.result){
					  setCodeTxt(data.code);
					 }
				}
			});
		}
		
		//设置代码内容
		function setCodeTxt(value){
		    if(typeof(editor) == "undefined"){
		        $('#editorBox').val(value);
		    }else{
		        editor.setValue(value,-1);
		    } 
		}
		
		function cmainFrame(){
			var hmain = document.getElementById("editor");
			var bheight = document.documentElement.clientHeight;
			hmain .style.width = '100%';
			hmain .style.height = (bheight - 40) + 'px';
		}
	</script>
</body>
</html>