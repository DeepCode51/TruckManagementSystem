package com.fh.controller.car.car;

import java.io.PrintWriter;
import java.math.BigDecimal;
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
import com.fh.service.car.car.CarManager;
import com.fh.service.order.order.OrderManager;
import com.fh.service.system.user.UserManager;

/** 
 * 说明：货车管理模块
 * 创建人：admin Q1347845688
 * 创建时间：2021-07-08
 */
@Controller
@RequestMapping(value="/car")
public class CarController extends BaseController {
	
	String menuUrl = "car/list.do"; //菜单地址(权限用)
	@Resource(name="carService")
	private CarManager carService;
	
	@Resource(name="userService")
	private UserManager userService;
	
	@Resource(name="orderService")
	private OrderManager orderService;
	
	/**保存
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/save")
	public ModelAndView save() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"新增Car");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "add")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("CAR_ID", this.get32UUID());	//主键
//		pd.put("CAR_DRIVER_ID", "");	//货车驾驶员ID
		carService.save(pd);
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
		logBefore(logger, Jurisdiction.getUsername()+"删除Car");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "del")){return;} //校验权限
		PageData pd = new PageData();
		pd = this.getPageData();
		carService.delete(pd);
		out.write("success");
		out.close();
	}
	
	/**修改
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/edit")
	public ModelAndView edit() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"修改Car");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "edit")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		
		List<PageData>	userList = userService.listAllUser(pd);	//列出用户列表
		
		List<PageData>	orderList = orderService.listAll(pd);	//订单列表
		
		pd = this.getPageData();
		carService.edit(pd);
		mv.addObject("msg","success");
		mv.addObject("userList",userList);
		mv.addObject("orderList",orderList);
		mv.setViewName("save_result");

		return mv;
	}
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value="/list")
	public ModelAndView list(Page page) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"列表Car");
		//if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;} //校验权限(无权查看时页面会有提示,如果不注释掉这句代码就无法进入列表页面,所以根据情况是否加入本句代码)
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String keywords = pd.getString("keywords");				//关键词检索条件
		if(null != keywords && !"".equals(keywords)){
			pd.put("keywords", keywords.trim());
		}
		page.setPd(pd);
		List<PageData>	varList = carService.list(page);	//列出Car列表
		mv.setViewName("car/car/car_list");
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
		List<PageData>	userList = userService.listAllUser(pd);	//列出用户列表
		List<PageData>	orderList = orderService.listAll(pd);	//订单列表
		mv.setViewName("car/car/car_edit");
		mv.addObject("userList",userList);
		mv.addObject("orderList",orderList);
		mv.addObject("msg", "save");
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
		pd = carService.findById(pd);	//根据ID读取
		mv.setViewName("car/car/car_edit");
		List<PageData>	userList = userService.listAllUser(pd);	//列出用户列表
		List<PageData>	orderList = orderService.listAll(pd);	//订单列表
		mv.addObject("msg", "edit");
		mv.addObject("pd", pd);
		mv.addObject("userList",userList);
		mv.addObject("orderList",orderList);
		return mv;
	}	
	
	 /**批量删除
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/deleteAll")
	@ResponseBody
	public Object deleteAll() throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"批量删除Car");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "del")){return null;} //校验权限
		PageData pd = new PageData();		
		Map<String,Object> map = new HashMap<String,Object>();
		pd = this.getPageData();
		List<PageData> pdList = new ArrayList<PageData>();
		String DATA_IDS = pd.getString("DATA_IDS");
		if(null != DATA_IDS && !"".equals(DATA_IDS)){
			String ArrayDATA_IDS[] = DATA_IDS.split(",");
			carService.deleteAll(ArrayDATA_IDS);
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
		logBefore(logger, Jurisdiction.getUsername()+"导出Car到excel");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;}
		ModelAndView mv = new ModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		Map<String,Object> dataMap = new HashMap<String,Object>();
		List<String> titles = new ArrayList<String>();
		titles.add("货车名称");	//1
		titles.add("货车类型");	//2
//		titles.add("货车驾驶员ID");	//3
//		titles.add("货车驾驶员姓名");	//4
		titles.add("货运金额");	//4
		titles.add("货车状态");	//5
		dataMap.put("titles", titles);
		List<PageData> varOList = carService.listAll(pd);
		List<PageData> varList = new ArrayList<PageData>();
		for(int i=0;i<varOList.size();i++){
			PageData vpd = new PageData();
			vpd.put("var1", varOList.get(i).getString("CAR_NAME"));	    //1
			vpd.put("var2", varOList.get(i).getString("CAR_TYPE"));	    //2
//			vpd.put("var3", varOList.get(i).getString("CAR_DRIVER_ID"));	    //3
//			vpd.put("var4", varOList.get(i).getString("CAR_DRIVER_NAME"));	    //4
			vpd.put("var3", varOList.get(i).getString("CAR_AMOUNT"));	    //4
			vpd.put("var4", varOList.get(i).getString("CAR_STATUS"));	    //5
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
	
	/**图表报表demo页面
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/carChart")
	public ModelAndView fusionchartsdemo() throws Exception{
		ModelAndView mv = this.getModelAndView();
		
		List<PageData> dataList=carService.listAll(getPageData());
		
		String strBegin="<graph caption='货车货运金额折线图' xAxisName='货车名' yAxisName='值' decimalPrecision='0' formatNumberScale='0'>";
		String strMiddle="";
		String strEnd="</graph>";
		
		
		if(dataList!=null && dataList.size()>0) {
			for (PageData pageData : dataList) {
				String carName=(String) pageData.get("CAR_NAME");
				Double amount=0.0;
				Object object= pageData.get("CAR_AMOUNT");
				if(object instanceof BigDecimal) {
					
					BigDecimal big=(BigDecimal) object;
					amount=big.doubleValue();
				}

				strMiddle=strMiddle+"<set name='"+carName+"' value='"+amount.toString()+"' color='AFD8F8'/>";
				
			}
		}
		
		String strXML=strBegin+strMiddle+strEnd;
//		//FusionCharts 报表demo  用的时候，循环拼字符串即可
//	 	String strXML = "<graph caption='前12个月订单销量柱状图' xAxisName='月份' yAxisName='值' decimalPrecision='0' formatNumberScale='0'>"
//	 					+"<set name='2013-05' value='4' color='AFD8F8'/>"
//	 					+"<set name='2013-04' value='0' color='AFD8F8'/>"
//	 					+"<set name='2013-03' value='0' color='AFD8F8'/>"
//	 					+"<set name='2013-02' value='0' color='AFD8F8'/>"
//	 					+"<set name='2013-01' value='0' color='AFD8F8'/>"
//	 					+"<set name='2012-01' value='0' color='AFD8F8'/>"
//	 					+"<set name='2012-11' value='0' color='AFD8F8'/>"
//	 					+"<set name='2012-10' value='0' color='AFD8F8'/>"
//	 					+"<set name='2012-09' value='0' color='AFD8F8'/>"
//	 					+"<set name='2012-08' value='0' color='AFD8F8'/>"
//	 					+"<set name='2012-07' value='0' color='AFD8F8'/>"
//	 					+"<set name='2012-06' value='0' color='AFD8F8'/>"
//	 					+"</graph>" ;
	 	mv.addObject("strXML", strXML);
		mv.setViewName("car/car/car_chart");
		return mv;
	}
	
}
