package com.fh.controller.fhoa.staff;

import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

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
import com.fh.service.fhoa.datajur.DatajurManager;
import com.fh.service.fhoa.department.DepartmentManager;
import com.fh.service.fhoa.staff.StaffManager;

/** 
 * 说明：员工管理
 * 创建人：admin Q1347845688
 * 修改时间：2018-04-23
 */
@Controller
@RequestMapping(value="/staff")
public class StaffController extends BaseController {
	
	String menuUrl = "staff/list.do"; //菜单地址(权限用)
	@Resource(name="staffService")
	private StaffManager staffService;
	@Resource(name="departmentService")
	private DepartmentManager departmentService;
	@Resource(name="datajurService")
	private DatajurManager datajurService;
	
	/**保存
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/save")
	public ModelAndView save() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"新增Staff");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "add")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("STAFF_ID", this.get32UUID());	//主键
		pd.put("USER_ID", "");					//绑定账号ID
		staffService.save(pd);					//保存员工信息到员工表
		String DEPARTMENT_IDS = departmentService.getDEPARTMENT_IDS(pd.getString("DEPARTMENT_ID"));//获取某个部门所有下级部门ID
		pd.put("DATAJUR_ID", pd.getString("STAFF_ID")); //主键
		pd.put("DEPARTMENT_IDS", DEPARTMENT_IDS);		//部门ID集
		datajurService.save(pd);						//把此员工默认部门及以下部门ID保存到组织数据权限表
		mv.addObject("msg","success");
		mv.setViewName("save_result");
		return mv;
	}
	
	/**删除
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/delete")
	public void delete(PrintWriter out) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"删除Staff");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "del")){return;} //校验权限
		PageData pd = new PageData();
		pd = this.getPageData();
		staffService.delete(pd);
		out.write("success");
		out.close();
	}
	
	/**修改
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/edit")
	public ModelAndView edit() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"修改Staff");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "edit")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		staffService.edit(pd);
		String DEPARTMENT_IDS = departmentService.getDEPARTMENT_IDS(pd.getString("DEPARTMENT_ID"));//获取某个部门所有下级部门ID
		pd.put("DATAJUR_ID", pd.getString("STAFF_ID")); //主键
		pd.put("DEPARTMENT_IDS", DEPARTMENT_IDS);		//部门ID集
		datajurService.edit(pd);						//把此员工默认部门及以下部门ID保存到组织数据权限表
		mv.addObject("msg","success");
		mv.setViewName("save_result");
		return mv;
	}
	
	/**列表(检索条件中的部门，只列出此操作用户最高部门权限以下所有部门的员工)
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value="/list")
	public ModelAndView list(Page page) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"列表Staff");
		//if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;} //校验权限(无权查看时页面会有提示,如果不注释掉这句代码就无法进入列表页面,所以根据情况是否加入本句代码)
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String keywords = pd.getString("keywords");							//关键词检索条件
		if(null != keywords && !"".equals(keywords)){
			pd.put("keywords", keywords.trim());
		}
		String DEPARTMENT_ID = pd.getString("DEPARTMENT_ID");
		pd.put("DEPARTMENT_ID", null == DEPARTMENT_ID?Jurisdiction.getDEPARTMENT_ID():DEPARTMENT_ID);	//只有检索条件穿过值时，才不为null,否则读取缓存
		pd.put("item", (null == pd.getString("DEPARTMENT_ID")?Jurisdiction.getDEPARTMENT_IDS():departmentService.getDEPARTMENT_IDS(pd.getString("DEPARTMENT_ID"))));	//部门检索条件,列出此部门下级所属部门的员工
	
		/* 比如员工 张三 所有部门权限的部门为 A ， A 的下级有  C , D ,F ，那么当部门检索条件值为A时，只列出A以下部门的员工(自己不能修改自己的信息，只能上级部门修改)，不列出部门为A的员工，当部门检索条件值为C时，可以列出C及C以下员工 */
		if(!(null == DEPARTMENT_ID || DEPARTMENT_ID.equals(Jurisdiction.getDEPARTMENT_ID()))){
			pd.put("item", pd.getString("item").replaceFirst("\\(", "\\('"+DEPARTMENT_ID+"',"));
		}
		
		page.setPd(pd);
		List<PageData>	varList = staffService.list(page);					//列出Staff列表
		//列表页面树形下拉框用(保持下拉树里面的数据不变)
		String ZDEPARTMENT_ID = pd.getString("ZDEPARTMENT_ID");
		ZDEPARTMENT_ID = Tools.notEmpty(ZDEPARTMENT_ID)?ZDEPARTMENT_ID:Jurisdiction.getDEPARTMENT_ID();
		pd.put("ZDEPARTMENT_ID", ZDEPARTMENT_ID);
		List<PageData> zdepartmentPdList = new ArrayList<PageData>();
		JSONArray arr = JSONArray.fromObject(departmentService.listAllDepartmentToSelect(ZDEPARTMENT_ID,zdepartmentPdList));
		mv.addObject("zTreeNodes", arr.toString());
		PageData dpd = departmentService.findById(pd);
		if(null != dpd){
			ZDEPARTMENT_ID = dpd.getString("NAME");
		}
		mv.addObject("depname", ZDEPARTMENT_ID);
		mv.setViewName("fhoa/staff/staff_list");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		mv.addObject("QX",Jurisdiction.getHC());	//按钮权限
		return mv;
	}
	
	/**去新增页面
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/goAdd")
	public ModelAndView goAdd()throws Exception{
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		List<PageData> zdepartmentPdList = new ArrayList<PageData>();
		JSONArray arr = JSONArray.fromObject(departmentService.listAllDepartmentToSelect(Jurisdiction.getDEPARTMENT_ID(),zdepartmentPdList));
		mv.addObject("zTreeNodes", (null == arr ?"":arr.toString()));
		mv.addObject("msg", "save");
		mv.addObject("pd", pd);
		mv.setViewName("fhoa/staff/staff_edit");
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
		List<PageData> zdepartmentPdList = new ArrayList<PageData>();
		JSONArray arr = JSONArray.fromObject(departmentService.listAllDepartmentToSelect(Jurisdiction.getDEPARTMENT_ID(),zdepartmentPdList));
		mv.addObject("zTreeNodes", (null == arr ?"":arr.toString()));
		pd = staffService.findById(pd);	//根据ID读取
		mv.setViewName("fhoa/staff/staff_edit");
		mv.addObject("depname", departmentService.findById(pd).getString("NAME"));
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
		logBefore(logger, Jurisdiction.getUsername()+"批量删除Staff");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "del")){return null;} //校验权限
		PageData pd = new PageData();		
		Map<String,Object> map = new HashMap<String,Object>();
		pd = this.getPageData();
		List<PageData> pdList = new ArrayList<PageData>();
		String DATA_IDS = pd.getString("DATA_IDS");
		if(null != DATA_IDS && !"".equals(DATA_IDS)){
			String ArrayDATA_IDS[] = DATA_IDS.split(",");
			staffService.deleteAll(ArrayDATA_IDS);
			pd.put("msg", "ok");
		}else{
			pd.put("msg", "no");
		}
		pdList.add(pd);
		map.put("list", pdList);
		return AppUtil.returnObject(pd, map);
	}
	
	 /**绑定用户
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/userBinding")
	@ResponseBody
	public Object userBinding() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"绑定用户");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "edit")){return null;} //校验权限
		PageData pd = new PageData();		
		Map<String,Object> map = new HashMap<String,Object>();
		pd = this.getPageData();
		staffService.userBinding(pd);
		return AppUtil.returnObject(pd, map);
	}
	
	 /**导出到excel
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/excel")
	public ModelAndView exportExcel() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"导出Staff到excel");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;}
		ModelAndView mv = new ModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		Map<String,Object> dataMap = new HashMap<String,Object>();
		List<String> titles = new ArrayList<String>();
		titles.add("姓名");	//1
		titles.add("英文");	//2
		titles.add("编码");	//3
		titles.add("部门");	//4
		titles.add("职责");	//5
		titles.add("电话");	//6
		titles.add("邮箱");	//7
		titles.add("性别");	//8
		titles.add("出生日期");	//9
		titles.add("民族");	//10
		titles.add("岗位类别");	//11
		titles.add("参加工作时间");	//12
		titles.add("籍贯");	//13
		titles.add("政治面貌");	//14
		titles.add("入团时间");	//15
		titles.add("身份证号");	//16
		titles.add("婚姻状况");	//17
		titles.add("进本单位时间");	//18
		titles.add("现岗位");	//19
		titles.add("上岗时间");	//20
		titles.add("学历");	//21
		titles.add("毕业学校");	//22
		titles.add("专业");	//23
		titles.add("职称");	//24
		titles.add("职业资格证");	//25
		titles.add("劳动合同时长");	//26
		titles.add("签订日期");	//27
		titles.add("终止日期");	//28
		titles.add("现住址");	//29
		titles.add("绑定账号ID");	//30
		titles.add("备注");	//31
		dataMap.put("titles", titles);
		List<PageData> varOList = staffService.listAll(pd);
		List<PageData> varList = new ArrayList<PageData>();
		for(int i=0;i<varOList.size();i++){
			PageData vpd = new PageData();
			vpd.put("var1", varOList.get(i).getString("NAME"));	    //1
			vpd.put("var2", varOList.get(i).getString("NAME_EN"));	    //2
			vpd.put("var3", varOList.get(i).getString("BIANMA"));	    //3
			vpd.put("var4", varOList.get(i).getString("DEPARTMENT_ID"));	    //4
			vpd.put("var5", varOList.get(i).getString("FUNCTIONS"));	    //5
			vpd.put("var6", varOList.get(i).getString("TEL"));	    //6
			vpd.put("var7", varOList.get(i).getString("EMAIL"));	    //7
			vpd.put("var8", varOList.get(i).getString("SEX"));	    //8
			vpd.put("var9", varOList.get(i).getString("BIRTHDAY"));	    //9
			vpd.put("var10", varOList.get(i).getString("NATION"));	    //10
			vpd.put("var11", varOList.get(i).getString("JOBTYPE"));	    //11
			vpd.put("var12", varOList.get(i).getString("JOBJOINTIME"));	    //12
			vpd.put("var13", varOList.get(i).getString("FADDRESS"));	    //13
			vpd.put("var14", varOList.get(i).getString("POLITICAL"));	    //14
			vpd.put("var15", varOList.get(i).getString("PJOINTIME"));	    //15
			vpd.put("var16", varOList.get(i).getString("SFID"));	    //16
			vpd.put("var17", varOList.get(i).getString("MARITAL"));	    //17
			vpd.put("var18", varOList.get(i).getString("DJOINTIME"));	    //18
			vpd.put("var19", varOList.get(i).getString("POST"));	    //19
			vpd.put("var20", varOList.get(i).getString("POJOINTIME"));	    //20
			vpd.put("var21", varOList.get(i).getString("EDUCATION"));	    //21
			vpd.put("var22", varOList.get(i).getString("SCHOOL"));	    //22
			vpd.put("var23", varOList.get(i).getString("MAJOR"));	    //23
			vpd.put("var24", varOList.get(i).getString("FTITLE"));	    //24
			vpd.put("var25", varOList.get(i).getString("CERTIFICATE"));	    //25
			vpd.put("var26", varOList.get(i).get("CONTRACTLENGTH").toString());	//26
			vpd.put("var27", varOList.get(i).getString("CSTARTTIME"));	    //27
			vpd.put("var28", varOList.get(i).getString("CENDTIME"));	    //28
			vpd.put("var29", varOList.get(i).getString("ADDRESS"));	    //29
			vpd.put("var30", varOList.get(i).getString("USER_ID"));	    //30
			vpd.put("var31", varOList.get(i).getString("BZ"));	    //31
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
