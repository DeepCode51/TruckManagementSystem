package com.fh.controller.fhim.hismsg;

import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fh.controller.base.BaseController;
import com.fh.entity.Page;
import com.fh.util.AppUtil;
import com.fh.util.PageData;
import com.fh.util.Jurisdiction;
import com.fh.service.fhim.hismsg.HismsgManager;

/** 
 * 说明：聊天记录
 * 创建人：admin Q1347845688
 * 修改时间：2018-08-2
 */
@Controller
@RequestMapping(value="/hismsg")
public class HismsgController extends BaseController {
	
	@Resource(name="hismsgService")
	private HismsgManager hismsgService;
	
	/**删除
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/delete")
	public void delete(PrintWriter out) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"删除Hismsg");
		PageData pd = new PageData();
		pd = this.getPageData();
		hismsgService.delete(pd);
		out.write("success");
		out.close();
	}
	
	/**打开聊天记录窗口
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value="/himsglist")
	public ModelAndView himsgList(Page page) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"打开聊天记录窗口");
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("TOID", pd.getString("id"));						//目标(好友或者群)
		pd.put("TYPE", pd.getString("type"));					//类型
		pd.put("USERNAME", Jurisdiction.getUsername());			//当前用户(发送者)
		page.setPd(pd);
		List<PageData>	varList = hismsgService.list(page);		//列出Hismsg列表
		mv.setViewName("fhim/hismsg/hismsg_list");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value="/list")
	public ModelAndView list2(Page page) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"列表Hismsg");
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("TOID", pd.getString("id"));						//目标(好友或者群)
		pd.put("TYPE", pd.getString("type"));					//类型
		pd.put("USERNAME", Jurisdiction.getUsername());			//当前用户(发送者)
		page.setPd(pd);
		List<PageData>	varList = hismsgService.list(page);		//列出Hismsg列表
		mv.setViewName("fhim/hismsg/hismsg_list_del");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		return mv;
	}	
	
	 /**去修改页面
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/goEdit")
	public ModelAndView goEdit()throws Exception{
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd = hismsgService.findById(pd);	//根据ID读取
		mv.setViewName("fhim/hismsg/hismsg_edit");
		mv.addObject("msg", "edit");
		mv.addObject("pd", pd);
		return mv;
	}	
	
	 /**批量删除
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/deleteAll")
	@ResponseBody
	public Object deleteAll() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"批量删除Hismsg");
		PageData pd = new PageData();		
		Map<String,Object> map = new HashMap<String,Object>();
		pd = this.getPageData();
		List<PageData> pdList = new ArrayList<PageData>();
		String DATA_IDS = pd.getString("DATA_IDS");
		if(null != DATA_IDS && !"".equals(DATA_IDS)){
			String ArrayDATA_IDS[] = DATA_IDS.split(",");
			hismsgService.deleteAll(ArrayDATA_IDS);
			pd.put("msg", "ok");
		}else{
			pd.put("msg", "no");
		}
		pdList.add(pd);
		map.put("list", pdList);
		return AppUtil.returnObject(pd, map);
	}
	
	@InitBinder
	public void initBinder(WebDataBinder binder){
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(format,true));
	}
}
