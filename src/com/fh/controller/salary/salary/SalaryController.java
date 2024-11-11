package com.fh.controller.salary.salary;

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
import com.fh.service.salary.salary.SalaryManager;
import com.fh.service.system.user.UserManager;

/**
 * 说明：工资自动结算模块 创建人：admin Q1347845688 创建时间：2021-07-09
 */
@Controller
@RequestMapping(value = "/salary")
public class SalaryController extends BaseController {

	String menuUrl = "salary/list.do"; // 菜单地址(权限用)
	@Resource(name = "salaryService")
	private SalaryManager salaryService;

	@Resource(name = "userService")
	private UserManager userService;

	/**
	 * 保存
	 * 
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value = "/save")
	public ModelAndView save() throws Exception {
		logBefore(logger, Jurisdiction.getUsername() + "新增Salary");
		if (!Jurisdiction.buttonJurisdiction(menuUrl, "add")) {
			return null;
		} // 校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("SALARY_ID", this.get32UUID()); // 主键
		salaryService.save(pd);
		mv.addObject("msg", "success");
		mv.setViewName("save_result");
		return mv;
	}

	/**
	 * 删除
	 * 
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete")
	public void delete(PrintWriter out) throws Exception {
		logBefore(logger, Jurisdiction.getUsername() + "删除Salary");
		if (!Jurisdiction.buttonJurisdiction(menuUrl, "del")) {
			return;
		} // 校验权限
		PageData pd = new PageData();
		pd = this.getPageData();
		salaryService.delete(pd);
		out.write("success");
		out.close();
	}

	/**
	 * 修改
	 * 
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value = "/edit")
	public ModelAndView edit() throws Exception {
		logBefore(logger, Jurisdiction.getUsername() + "修改Salary");
		if (!Jurisdiction.buttonJurisdiction(menuUrl, "edit")) {
			return null;
		} // 校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		salaryService.edit(pd);
		mv.addObject("msg", "success");
		mv.setViewName("save_result");
		return mv;
	}

	/**
	 * 列表
	 * 
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value = "/list")
	public ModelAndView list(Page page) throws Exception {
		logBefore(logger, Jurisdiction.getUsername() + "列表Salary");
		// if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;}
		// //校验权限(无权查看时页面会有提示,如果不注释掉这句代码就无法进入列表页面,所以根据情况是否加入本句代码)
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String keywords = pd.getString("keywords"); // 关键词检索条件
		if (null != keywords && !"".equals(keywords)) {
			pd.put("keywords", keywords.trim());
		}
		page.setPd(pd);
		List<PageData> varList = salaryService.list(page); // 列出Salary列表
		mv.setViewName("salary/salary/salary_list");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		mv.addObject("QX", Jurisdiction.getHC()); // 按钮权限
		return mv;
	}

	/**
	 * 去新增页面
	 * 
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value = "/goAdd")
	public ModelAndView goAdd() throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		mv.setViewName("salary/salary/salary_edit");
		List<PageData> userList = userService.listAllUser(pd); // 列出用户列表
		mv.addObject("msg", "save");
		mv.addObject("pd", pd);
		mv.addObject("userList", userList);
		return mv;
	}

	/**
	 * 去修改页面
	 * 
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value = "/goEdit")
	public ModelAndView goEdit() throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd = salaryService.findById(pd); // 根据ID读取
		mv.setViewName("salary/salary/salary_edit");
		List<PageData> userList = userService.listAllUser(pd); // 列出用户列表
		mv.addObject("msg", "edit");
		mv.addObject("pd", pd);
		mv.addObject("userList", userList);
		return mv;
	}

	/**
	 * 批量删除
	 * 
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteAll")
	@ResponseBody
	public Object deleteAll() throws Exception {
		logBefore(logger, Jurisdiction.getUsername() + "批量删除Salary");
		if (!Jurisdiction.buttonJurisdiction(menuUrl, "del")) {
			return null;
		} // 校验权限
		PageData pd = new PageData();
		Map<String, Object> map = new HashMap<String, Object>();
		pd = this.getPageData();
		List<PageData> pdList = new ArrayList<PageData>();
		String DATA_IDS = pd.getString("DATA_IDS");
		if (null != DATA_IDS && !"".equals(DATA_IDS)) {
			String ArrayDATA_IDS[] = DATA_IDS.split(",");
			salaryService.deleteAll(ArrayDATA_IDS);
			pd.put("msg", "ok");
		} else {
			pd.put("msg", "no");
		}
		pdList.add(pd);
		map.put("list", pdList);
		return AppUtil.returnObject(pd, map);
	}

	/**
	 * 导出到excel
	 * 
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value = "/excel")
	public ModelAndView exportExcel() throws Exception {
		logBefore(logger, Jurisdiction.getUsername() + "导出Salary到excel");
		if (!Jurisdiction.buttonJurisdiction(menuUrl, "cha")) {
			return null;
		}
		ModelAndView mv = new ModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		Map<String, Object> dataMap = new HashMap<String, Object>();
		List<String> titles = new ArrayList<String>();
		titles.add("用户名"); // 1
		titles.add("基本工资"); // 2
		titles.add("运单工资"); // 3
		titles.add("合计金额"); // 4
		titles.add("工资月份"); // 5
		titles.add("扣减工资"); // 6
		dataMap.put("titles", titles);
		List<PageData> varOList = salaryService.listAll(pd);
		List<PageData> varList = new ArrayList<PageData>();
		for (int i = 0; i < varOList.size(); i++) {
			PageData vpd = new PageData();
			vpd.put("var1", varOList.get(i).getString("USER_ID")); // 1
			vpd.put("var2", varOList.get(i).get("SALARY_BASE").toString()); // 2
			vpd.put("var3", varOList.get(i).get("SALARY_ADD").toString()); // 3
			vpd.put("var4", varOList.get(i).get("SALARY_SUM").toString()); // 4
			vpd.put("var5", varOList.get(i).get("SALARY_MONTH").toString()); // 5
			vpd.put("var6", varOList.get(i).get("SALARY_SBU").toString()); // 6
			varList.add(vpd);
		}
		dataMap.put("varList", varList);
		ObjectExcelView erv = new ObjectExcelView();
		mv = new ModelAndView(erv, dataMap);
		return mv;
	}

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(format, true));
	}

	/**
	 * 工资报表demo页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/salaryChart")
	public ModelAndView fusionchartsdemo() throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData queryUserPd = new PageData();
		List<PageData> userList = salaryService.listUserId(queryUserPd);
		List<String> xmlStrList = new ArrayList<String>();
		if (userList != null && userList.size() > 0) {

			for (PageData userPd : userList) {
				String userId = userPd.getString("USER_ID");
				String beginStr = "<graph caption='" + userId
						+ "的12个月工资柱状图' xAxisName='月份' yAxisName='工资总额' decimalPrecision='0' formatNumberScale='0'>";
				String middleStr = "";
				String endStr = "</graph>";
				for (int i = 0; i < 12; i++) {
					PageData pd = new PageData();
					pd.put("USER_ID", userId);
					pd.put("SALARY_MONTH", i + 1);
					int k=i+1;
					List<PageData> amountList = salaryService.getAmountByIdMonth(pd);
					if (amountList != null && amountList.size() > 0) {
						PageData amountPd = amountList.get(0);
						if (amountPd != null) {
							Double amount = (Double) amountPd.get("SALARY_SUM"); // 工资总和
							if (amount == null) {
								amount = 0.0;
							}
							
							middleStr = middleStr + "<set name='" + k + "' value='" + amount.toString()
									+ "' color='AFD8F8'/>";
						}
						else {
							middleStr = middleStr + "<set name='" + k + "' value='0' color='8E468E'/>";	
						}
					}

				}

				String xmlStr = beginStr + middleStr + endStr;

				xmlStrList.add(xmlStr);

			}

		}

		else {
			String xmlStr = "<graph caption='12个月工资柱状图(无数据情况下展示)' xAxisName='月份' yAxisName='工资总额' decimalPrecision='0' formatNumberScale='0'>"
					+ "<set name='01' value='1' color='AFD8F8'/>" + "<set name='02' value='2' color='F6BD0F'/>"
					+ "<set name='03' value='3' color='8BBA00'/>" + "<set name='04' value='4' color='FF8E46'/>"
					+ "<set name='05' value='5' color='008E8E'/>" + "<set name='06' value='6' color='D64646'/>"
					+ "<set name='07' value='7' color='8E468E'/>" + "<set name='08' value='8' color='588526'/>"
					+ "<set name='09' value='9' color='B3AA00'/>" + "<set name='10' value='10' color='008ED6'/>"
					+ "<set name='11' value='11' color='9D080D'/>" + "<set name='12' value='12' color='A186BE'/>"
					+ "</graph>";

			xmlStrList.add(xmlStr);

		}

		// String strXML = "<graph caption='前12个月订单销量柱状图' xAxisName='月份'
		// yAxisName='工资总额' decimalPrecision='0' formatNumberScale='0'>"
		// +"<set name='01' value='1' color='AFD8F8'/>"
		// +"<set name='02' value='2' color='F6BD0F'/>"
		// +"<set name='03' value='3' color='8BBA00'/>"
		// +"<set name='04' value='4' color='FF8E46'/>"
		// +"<set name='05' value='5' color='008E8E'/>"
		// +"<set name='06' value='6' color='D64646'/>"
		// +"<set name='07' value='7' color='8E468E'/>"
		// +"<set name='08' value='8' color='588526'/>"
		// +"<set name='09' value='9' color='B3AA00'/>"
		// +"<set name='10' value='10' color='008ED6'/>"
		// +"<set name='11' value='11' color='9D080D'/>"
		// +"<set name='12' value='12' color='A186BE'/>"
		// +"</graph>" ;
		// mv.addObject("strXML", strXML);
		mv.addObject("xmlStrList", xmlStrList);
		mv.setViewName("salary/salary/salary_chart");
		return mv;
	}

}
