package com.fh.controller.fhim.qgroup;

import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fh.controller.base.BaseController;
import com.fh.entity.Page;
import com.fh.util.AppUtil;
import com.fh.util.Const;
import com.fh.util.DateUtil;
import com.fh.util.DelAllFile;
import com.fh.util.FileUpload;
import com.fh.util.PageData;
import com.fh.util.Jurisdiction;
import com.fh.util.PathUtil;
import com.fh.util.Tools;
import com.fh.service.fhim.iqgroup.IQgroupManager;
import com.fh.service.fhim.qgroup.QgroupManager;
import com.fh.service.fhim.sysmsg.SysmsgManager;

/** 
 * 说明：群组
 * 创建人：admin Q1347845688
 * 修改时间：2018-07-23
 */
@Controller
@RequestMapping(value="/qgroup")
public class QgroupController extends BaseController {
	
	String menuUrl = "qgroup/list.do"; //菜单地址(权限用)
	@Resource(name="qgroupService")
	private QgroupManager qgroupService;
	@Resource(name="iqgroupService")
	private IQgroupManager iqgroupService;
	@Resource(name="sysmsgService")
	private SysmsgManager sysmsgService;
	
	/**保存
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/save")
	public ModelAndView save(
			@RequestParam(value="tp",required=false) MultipartFile file,
			@RequestParam(value="NAME",required=false) String NAME,
			@RequestParam(value="QID",required=false) String QGROUP_ID
			) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"新增Qgroup");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "add")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		String  ffile = DateUtil.getDays(), fileName = "";
		if (null != file && !file.isEmpty()) {
			String filePath = PathUtil.getClasspath() + Const.FILEPATHIMG + ffile;		//文件上传路径
			fileName = FileUpload.fileUp(file, filePath, this.get32UUID());				//执行上传
			pd.put("PHOTO", Const.FILEPATHIMG + ffile + "/" + fileName);				//群名
			pd.put("NAME", NAME);							//群名
			pd.put("CTIME", Tools.date2Str(new Date()));	//创建时间
			pd.put("USERNAME", Jurisdiction.getUsername());	//群主
			pd.put("QGROUP_ID", QGROUP_ID);					//主键
			qgroupService.save(pd);							//存入群组数据库表
			PageData ipd = new PageData();
			ipd = iqgroupService.findById(pd);
			if(null == ipd){								//当我没有任何群时添加数据，否则修改
				pd.put("QGROUPS", "('"+pd.getString("QGROUP_ID")+"',");
				pd.put("IQGROUP_ID", this.get32UUID());		//主键
				iqgroupService.save(pd);
			}else{
				pd.put("QGROUPS", ipd.getString("QGROUPS")+"'"+pd.getString("QGROUP_ID")+"',");
				iqgroupService.edit(pd);
			}
		}else{
			System.out.println("上传失败");
		}
		mv.addObject("msg","success");
		mv.setViewName("save_result");
		return mv;
	}
	
	/**退群或者解散群
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/delete")
	public void delete(PrintWriter out) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"退群或者解散群");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "del")){return;} //校验权限
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("USERNAME", Jurisdiction.getUsername());								 //当前用户
		String TYPE = pd.getString("TYPE");
		if("del".equals(TYPE)){														 //解散群（删除群的操作在ChatServer中处理）
			if(Tools.notEmpty(pd.getString("PATH").trim())){
				DelAllFile.delFolder(PathUtil.getClasspath()+ pd.getString("PATH")); //删除群头像
			}
		}else{												//退出群
			
			PageData qggpd = new PageData();
			qggpd = qgroupService.findById(pd);
			
			PageData msgpd = new PageData();
			/*存入IM系统消息表中IM_SYSMSG*/
			msgpd.put("SYSMSG_ID", this.get32UUID());						//主键
			msgpd.put("USERNAME", qggpd.getString("USERNAME"));				//接收者用户名(即群主)
			msgpd.put("FROMUSERNAME", "系统");								//发送者
			msgpd.put("CTIME", Tools.date2Str(new Date()));					//操作时间
			msgpd.put("REMARK", "");										//留言
			msgpd.put("TYPE", "group");										//类型
			msgpd.put("CONTENT", Jurisdiction.getU_name()+" 从群："+qggpd.getString("NAME")+" 退出了");	//事件内容
			msgpd.put("ISDONE", "yes");										//是否完成
			msgpd.put("DTIME", Tools.date2Str(new Date()));					//完成时间
			msgpd.put("QGROUP_ID", pd.getString("QGROUP_ID"));				//群ID
			msgpd.put("DREAD", "0");										//阅读状态 0 未读
			sysmsgService.save(msgpd);
			
			PageData ipd = new PageData();
			ipd = iqgroupService.findById(pd);
			pd.put("QGROUPS", ipd.getString("QGROUPS").replaceAll("'"+pd.getString("QGROUP_ID")+"',", ""));
			iqgroupService.edit(pd);
		}
		out.write("success");
		out.close();
	}
	
	/**踢出群
	 * @param out
	 * @throws Exception
	 */
	@RequestMapping(value="/kickout")
	public void kickout(PrintWriter out) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"踢出群");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "del")){return;} //校验权限
		PageData pd = new PageData();
		pd = this.getPageData();
		PageData qggpd = new PageData();
		qggpd = qgroupService.findById(pd);
		if(!Jurisdiction.getUsername().equals(qggpd.getString("USERNAME"))){return;}//如果当前用户不是群主，禁止后续操作
		PageData msgpd = new PageData();
		/*存入IM系统消息表中IM_SYSMSG*/
		msgpd.put("SYSMSG_ID", this.get32UUID());						//主键
		msgpd.put("USERNAME", pd.getString("USERNAME"));				//被踢出的成员用户名
		msgpd.put("FROMUSERNAME", "系统");								//发送者
		msgpd.put("CTIME", Tools.date2Str(new Date()));					//操作时间
		msgpd.put("REMARK", "");										//留言
		msgpd.put("TYPE", "group");										//类型
		msgpd.put("CONTENT", Jurisdiction.getU_name()+" 从群："+qggpd.getString("NAME")+" 踢出了您");	//事件内容
		msgpd.put("ISDONE", "yes");										//是否完成
		msgpd.put("DTIME", Tools.date2Str(new Date()));					//完成时间
		msgpd.put("QGROUP_ID", pd.getString("QGROUP_ID"));				//群ID
		msgpd.put("DREAD", "0");										//阅读状态 0 未读
		sysmsgService.save(msgpd);
		PageData ipd = new PageData();
		ipd = iqgroupService.findById(pd);
		pd.put("QGROUPS", ipd.getString("QGROUPS").replaceAll("'"+pd.getString("QGROUP_ID")+"',", ""));
		iqgroupService.edit(pd);
		out.write("success");
		out.close();
	}
	
	/**删除图片
	 * @param out
	 * @throws Exception 
	 */
	@RequestMapping(value="/deltp")
	public void deltp(PrintWriter out) throws Exception {
		PageData pd = new PageData();
		pd = this.getPageData();
		String PATH = pd.getString("PATH");	
		if(Tools.notEmpty(pd.getString("PATH").trim())){							//图片路径
			DelAllFile.delFolder(PathUtil.getClasspath() + pd.getString("PATH")); 	//删除硬盘中的图片
		}
		if(PATH != null){
			qgroupService.delTp(pd);												//删除数据库中图片数据
		}	
		out.write("success");
		out.close();
	}
	
	/**修改
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/edit")
	public ModelAndView edit(
			@RequestParam(value="tp",required=false) MultipartFile file,
			@RequestParam(value="tpz",required=false) String tpz,
			@RequestParam(value="QGROUP_ID",required=false) String QGROUP_ID,
			@RequestParam(value="NAME",required=false) String NAME
		)throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"修改Qgroup");
		if(!Jurisdiction.buttonJurisdiction(menuUrl, "edit")){return null;} //校验权限
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd.put("NAME", NAME);							//群名
		pd.put("QGROUP_ID", QGROUP_ID);					//主键
		if (null != file && !file.isEmpty()) {
			String  ffile = DateUtil.getDays(), fileName = "";
			String filePath = PathUtil.getClasspath() + Const.FILEPATHIMG + ffile;	//文件上传路径
			fileName = FileUpload.fileUp(file, filePath, this.get32UUID());			//执行上传
			pd.put("PHOTO", Const.FILEPATHIMG + ffile + "/" + fileName);			//路径
		}else{
			pd.put("PHOTO", tpz);
		}
		qgroupService.edit(pd);
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
		logBefore(logger, Jurisdiction.getUsername()+"列表Qgroup");
		//if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;} //校验权限(无权查看时页面会有提示,如果不注释掉这句代码就无法进入列表页面,所以根据情况是否加入本句代码)
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String keywords = pd.getString("keywords");				//关键词检索条件
		if(null != keywords && !"".equals(keywords)){
			pd.put("keywords", keywords.trim());
		}
		pd.put("USERNAME", Jurisdiction.getUsername());		//当前用户
		PageData ipd = new PageData();
		ipd = iqgroupService.findById(pd);
		if(null == ipd){									
			pd.put("item", "('null')");
		}else{
			pd.put("item", ipd.getString("QGROUPS")+"'fh')");
		}
		page.setPd(pd);
		List<PageData>	varList = qgroupService.list(page);	//列出Qgroup列表
		mv.setViewName("fhim/qgroup/qgroup_list");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		mv.addObject("QID", this.get32UUID());
		mv.addObject("QX",Jurisdiction.getHC());			//按钮权限
		return mv;
	}
	
	/**去添加群页面(好友面板中检索页)
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/goAdd")
	public ModelAndView goAdd()throws Exception{
		ModelAndView mv = this.getModelAndView();
		mv.setViewName("fhim/qgroup/qgroup_add");
		return mv;
	}
	
	/**去新增页面(我的群组列表页面)
	 * @param
	 * @throws Exception
	 */
	@RequestMapping(value="/goAddFromlist")
	public ModelAndView goAddFromlist()throws Exception{
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		mv.setViewName("fhim/qgroup/qgroup_edit");
		mv.addObject("msg", "save");
		mv.addObject("pd", pd);
		return mv;
	}	
	
	/**群检索
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
		List<PageData>	varList = qgroupService.searchListAll(pd);
		mv.setViewName("fhim/qgroup/qgroup_add");
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
		pd = qgroupService.findById(pd);	//根据ID读取
		mv.setViewName("fhim/qgroup/qgroup_edit");
		mv.addObject("msg", "edit");
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**获取此群的信息
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/getThisQgroup")
	@ResponseBody
	public Object getThisQgroup() throws Exception{
		Map<String,Object> map = new LinkedHashMap<String,Object>();
		PageData pd = new PageData();
		pd = this.getPageData();
		pd = qgroupService.findById(pd);
		map.put("avatar", pd.getString("PHOTO"));	//群头像
		map.put("groupname", pd.getString("NAME"));	//群名称
		return AppUtil.returnObject(new PageData(), map);
	}
	
	/**群成员
	 * @param page
	 * @throws Exception
	 */
	@RequestMapping(value="/groupMembers")
	public ModelAndView groupMembers(Page page) throws Exception{
		logBefore(logger, Jurisdiction.getUsername()+"列表群成员");
		//if(!Jurisdiction.buttonJurisdiction(menuUrl, "cha")){return null;} //校验权限(无权查看时页面会有提示,如果不注释掉这句代码就无法进入列表页面,所以根据情况是否加入本句代码)
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		String keywords = pd.getString("keywords");							//关键词检索条件
		if(null != keywords && !"".equals(keywords)){
			pd.put("keywords", keywords.trim());
		}
		pd.put("USERNAME", Jurisdiction.getUsername());						//排除本人(即群主)
		page.setPd(pd);
		List<PageData>	varList = iqgroupService.memberslistPage(page);		//列出群成员列表
		mv.setViewName("fhim/qgroup/qgroup_members");
		mv.addObject("varList", varList);
		mv.addObject("pd", pd);
		mv.addObject("QX",Jurisdiction.getHC());							//按钮权限
		return mv;
	}
	
	@InitBinder
	public void initBinder(WebDataBinder binder){
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(format,true));
	}
}
