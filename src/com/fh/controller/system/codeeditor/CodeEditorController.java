package com.fh.controller.system.codeeditor;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fh.controller.base.BaseController;
import com.fh.entity.Page;
import com.fh.service.system.codeeditor.CodeEditorManager;
import com.fh.util.AppUtil;
import com.fh.util.Jurisdiction;
import com.fh.util.PageData;
import com.fh.util.Tools;

/** 
 * 说明：代码编辑器
 * 创建人：admin Q1347845688
 * 修改时间：2018-06-10
 */
@Controller
@RequestMapping(value="/codeeditor")
public class CodeEditorController extends BaseController {
	
	@Resource(name="codeeditorService")
	private CodeEditorManager codeeditorService;
	
	 /**去编辑页面
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/goEdit")
	public ModelAndView goEdit()throws Exception{
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		mv.setViewName("system/codeeditor/codeeditor_edit_1");
		mv.addObject("pd", pd);
		return mv;
	}
	
	 /**去编辑页面
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/goEdit2")
	public ModelAndView goEdit2()throws Exception{
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		mv.setViewName("system/codeeditor/codeeditor_edit_2");
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**获取code
	 * @return 
	 */
	@RequestMapping(value="/getCode")
	@ResponseBody
	public Object getCode(){
		logBefore(logger, "获取模版中的代码");
		Map<String,Object> map = new HashMap<String,Object>();
		PageData pd = new PageData();
		pd = this.getPageData();
		String result = "00";
		try{
			String type = pd.getString("type");
			String ftlNmame = pd.getString("ftlNmame");
			String code = Tools.readFileAllContent("/ftl/"+type+"/"+ftlNmame+".ftl");	//从原始模版获取
			System.out.println(code);
			map.put("code", code);
		}catch (Exception e){
			logger.error(e.toString(), e);
		}finally{
			map.put("result", result);
			logAfter(logger);
		}
		return AppUtil.returnObject(new PageData(), map);
	}
	
	/**保存
	 * @return 
	 */
	@RequestMapping(value="/save")
	@ResponseBody
	public Object save(){
		logBefore(logger, "保存代码编辑器保存的代码");
		Map<String,Object> map = new HashMap<String,Object>();
		PageData pd = new PageData();
		pd = this.getPageData();
		String result = "00";
		try{
			String codeTxt =  pd.getString("codeTxt");
			String type = pd.getString("type");
			String ftlNmame = pd.getString("ftlNmame");
			Tools.writeFileCR("/ftl/"+type+"/"+ftlNmame+".ftl",codeTxt);	//写入到文件
			pd.put("TYPE", type);
			pd.put("FTLNMAME", ftlNmame);
			pd.put("CODECONTENT", codeTxt);
			pd.put("CODEEDITOR_ID", this.get32UUID());		//主键
			pd.put("CTIME", Tools.date2Str(new Date()));	//创建时间
			codeeditorService.save(pd);						//记录存储到数据库
		}catch (Exception e){
			logger.error(e.toString(), e);
		}finally{
			map.put("result", result);
			logAfter(logger);
		}
		return AppUtil.returnObject(new PageData(), map);
	}
	
	/**还原
	 * @return 
	 */
	@RequestMapping(value="/reduction")
	@ResponseBody
	public Object reduction(){
		logBefore(logger, "还原代码编辑器的代码");
		Map<String,Object> map = new HashMap<String,Object>();
		PageData pd = new PageData();
		pd = this.getPageData();
		String result = "00";
		try{
			String type = pd.getString("type");
			String ftlNmame = pd.getString("ftlNmame");
			String msg = pd.getString("msg");
			String code = "";
			if("fromHistory".equals(msg)){
				code = codeeditorService.findById(pd).getString("CODECONTENT");				//从历史编辑获取
			}else{
				code = Tools.readFileAllContent("/ftl_backups/"+type+"/"+ftlNmame+".ftl");	//从原始模版获取
			}
			Tools.writeFileCR("/ftl/"+type+"/"+ftlNmame+".ftl",code);						//写入到现在模版
			map.put("code", code);
		}catch (Exception e){
			logger.error(e.toString(), e);
		}finally{
			map.put("result", result);
			logAfter(logger);
		}
		return AppUtil.returnObject(new PageData(), map);
	}
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value="/list")
	public ModelAndView list(Page page) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"列表CodeEditor");
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		page.setPd(pd);
		List<PageData>	varList = codeeditorService.list(page);	//列出CodeEditor列表
		mv.setViewName("system/codeeditor/codeeditor_list");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		mv.addObject("QX",Jurisdiction.getHC());	//按钮权限
		return mv;
	}
	
	 /**查看代码
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/view")
	public ModelAndView view()throws Exception{
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String msg = pd.getString("msg");
		if("2".equals(msg)){
			mv.setViewName("system/codeeditor/codeeditor_view2");
		}else{
			mv.setViewName("system/codeeditor/codeeditor_view1");
		}
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**获取code
	 * @return 
	 */
	@RequestMapping(value="/getCodeFromView")
	@ResponseBody
	public Object getCodeFromView(){
		logBefore(logger, "获取历史记录中的代码");
		Map<String,Object> map = new HashMap<String,Object>();
		PageData pd = new PageData();
		pd = this.getPageData();
		String result = "00";
		try{
			pd = codeeditorService.findById(pd);	//根据ID读取
			map.put("code", pd.getString("CODECONTENT"));
		}catch (Exception e){
			logger.error(e.toString(), e);
		}finally{
			map.put("result", result);
			logAfter(logger);
		}
		return AppUtil.returnObject(new PageData(), map);
	}
	
	/**删除
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/delete")
	public void delete(PrintWriter out) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"删除CodeEditor");
		PageData pd = new PageData();
		pd = this.getPageData();
		codeeditorService.delete(pd);
		out.write("success");
		out.close();
	}
	
	 /**批量删除
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/deleteAll")
	@ResponseBody
	public Object deleteAll() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"批量删除CodeEditor");
		PageData pd = new PageData();		
		Map<String,Object> map = new HashMap<String,Object>();
		pd = this.getPageData();
		List<PageData> pdList = new ArrayList<PageData>();
		String DATA_IDS = pd.getString("DATA_IDS");
		if(null != DATA_IDS && !"".equals(DATA_IDS)){
			String ArrayDATA_IDS[] = DATA_IDS.split(",");
			codeeditorService.deleteAll(ArrayDATA_IDS);
			pd.put("msg", "ok");
		}else{
			pd.put("msg", "no");
		}
		pdList.add(pd);
		map.put("list", pdList);
		return AppUtil.returnObject(pd, map);
	}
	
}
