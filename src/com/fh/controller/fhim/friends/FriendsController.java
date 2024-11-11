package com.fh.controller.fhim.friends;

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
import com.fh.util.ObjectExcelView;
import com.fh.util.PageData;
import com.fh.util.Jurisdiction;
import com.fh.util.Tools;
import com.fh.service.fhim.friends.FriendsManager;

/** 
 * 说明：好友管理
 * 创建人：admin Q1347845688
 * 修改时间：2018-08-03
 */
@Controller
@RequestMapping(value="/friends")
public class FriendsController extends BaseController {
	
	String menuUrl = "friends/list.do"; //菜单地址(权限用)
	@Resource(name="friendsService")
	private FriendsManager friendsService;
	
	/**添加好友(废弃,从IM接口类处添加)
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/save")
	public ModelAndView save() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"新增Friends");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "add")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("FRIENDS_ID", this.get32UUID());			//主键
		pd.put("USERNAME", Jurisdiction.getUsername());	//用户名
		pd.put("CTIME", Tools.date2Str(new Date()));	//申请时间
		pd.put("ALLOW", "will");						//是否允许
		pd.put("FGROUP_ID", "");						//默认无分组
		pd.put("DTIME", "");							//处理时间，刚添加等待对方处理，现在为空，处理的时候录入时间
		friendsService.save(pd);
		mv.addObject("msg","success");
		mv.setViewName("save_result");
		return mv;
	}
	
	/**删除
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/deletefromlist")
	public void deletefromlist(PrintWriter out) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"删除Friends");
		PageData pd = new PageData();
		pd = this.getPageData();
		friendsService.delete(pd);
		out.write("success");
		out.close();
	}
	
	/**拉黑
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/pullblackfromlist")
	public void pullblackfromlist(PrintWriter out) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"拉黑Friends");
		PageData pd = new PageData();
		pd = this.getPageData();
		friendsService.delete(pd);						//删除自己好友栏
		pd.put("USERNAME", Jurisdiction.getUsername());	//用户名
		friendsService.pullblack(pd);					//删除对方好友栏
		out.write("success");
		out.close();
	}
	
	
	/**删除 从右下角好友列表里面右键拉黑好友
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/delete")
	public void delete() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"删除Friends");
		PageData pd = new PageData();
		pd = this.getPageData();
		String FRIENDS_ID = pd.getString("FRIENDS_ID");
		if("null".equals(FRIENDS_ID)){						
			pd.put("USERNAME", Jurisdiction.getUsername());	//用户名
			pd = friendsService.findMyFriend(pd);
		}						
		friendsService.delete(pd);
	}
	
	/**拉黑 从右下角好友列表里面右键拉黑好友
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/pullblack")
	public void pullblack() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"拉黑Friends");
		PageData pd = new PageData();
		pd = this.getPageData();
		String FRIENDS_ID = pd.getString("FRIENDS_ID");
		if("null".equals(FRIENDS_ID)){						
			pd.put("USERNAME", Jurisdiction.getUsername());	//用户名
			pd = friendsService.findMyFriend(pd);
		}
		friendsService.delete(pd);						//删除自己好友栏
		pd.put("USERNAME", Jurisdiction.getUsername());	//用户名
		friendsService.pullblack(pd);					//删除对方好友栏
	}
	
	/**修改
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/edit")
	public ModelAndView edit() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"修改Friends");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "edit")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		friendsService.edit(pd);
		mv.addObject("msg","success");
		mv.setViewName("save_result");
		return mv;
	}
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value="/list")
	public ModelAndView list(Page page) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"列表Friends");
		//if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;} //校验权限(无权查看时页面会有提示,如果不注释掉这句代码就无法进入列表页面,所以根据情况是否加入本句代码)
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String keywords = pd.getString("keywords");				//关键词检索条件
		if(null != keywords && !"".equals(keywords)){
			pd.put("keywords", keywords.trim());
		}
		pd.put("USERNAME", Jurisdiction.getUsername());
		page.setPd(pd);
		List<PageData>	varList = friendsService.list(page);	//列出Friends列表
		mv.setViewName("fhim/friends/friends_list");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		mv.addObject("QX",Jurisdiction.getHC());	//按钮权限
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
		String FRIENDS_ID = pd.getString("FRIENDS_ID");
		if("null".equals(FRIENDS_ID)){						//从右下角好友列表里面右键删除好友
			pd.put("USERNAME", Jurisdiction.getUsername());	//用户名
			pd = friendsService.findMyFriend(pd);
		}else{	
			pd = friendsService.findById(pd);	//根据ID读取
		}
		mv.setViewName("fhim/friends/friends_edit");
		mv.addObject("msg", "edit");
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**去添加好友页面
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/goAdd")
	public ModelAndView goAdd()throws Exception{
		ModelAndView mv = this.getModelAndView();
		mv.setViewName("fhim/friends/friends_add");
		return mv;
	}
	
	/**添加好友检索
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/search")
	public ModelAndView search()throws Exception{
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String keywords = pd.getString("keywords");				//关键词检索条件
		if(null != keywords && !"".equals(keywords)){
			pd.put("keywords", keywords.trim());
		}
		pd.put("USERNAME", Jurisdiction.getUsername());			//不检索自己
		List<PageData>	varList = friendsService.listAllToSearch(pd);
		mv.setViewName("fhim/friends/friends_add");
		mv.addObject("varList", varList);
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
		logBefore(logger, Jurisdiction.getUsername()+"批量删除Friends");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "del")){return null;} //校验权限
		PageData pd = new PageData();		
		Map<String,Object> map = new HashMap<String,Object>();
		pd = this.getPageData();
		List<PageData> pdList = new ArrayList<PageData>();
		String DATA_IDS = pd.getString("DATA_IDS");
		if(null != DATA_IDS && !"".equals(DATA_IDS)){
			String ArrayDATA_IDS[] = DATA_IDS.split(",");
			friendsService.deleteAll(ArrayDATA_IDS);
			pd.put("msg", "ok");
		}else{
			pd.put("msg", "no");
		}
		pdList.add(pd);
		map.put("list", pdList);
		return AppUtil.returnObject(pd, map);
	}
	
	 /**导出到excel
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/excel")
	public ModelAndView exportExcel() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"导出Friends到excel");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;}
		ModelAndView mv = new ModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		Map<String,Object> dataMap = new HashMap<String,Object>();
		List<String> titles = new ArrayList<String>();
		titles.add("用户名");	//1
		titles.add("好友用户名");	//2
		titles.add("添加时间");	//3
		titles.add("是否允许");	//4
		dataMap.put("titles", titles);
		List<PageData> varOList = friendsService.listAll(pd);
		List<PageData> varList = new ArrayList<PageData>();
		for(int i=0;i<varOList.size();i++){
			PageData vpd = new PageData();
			vpd.put("var1", varOList.get(i).getString("USERNAME"));	    //1
			vpd.put("var2", varOList.get(i).getString("FUSERNAME"));	    //2
			vpd.put("var3", varOList.get(i).getString("CTIME"));	    //3
			vpd.put("var4", varOList.get(i).getString("ALLOW"));	    //4
			varList.add(vpd);
		}
		dataMap.put("varList", varList);
		ObjectExcelView erv = new ObjectExcelView();
		mv = new ModelAndView(erv,dataMap);
		return mv;
	}
	
	@InitBinder
	public void initBinder(WebDataBinder binder){
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(format,true));
	}
}
