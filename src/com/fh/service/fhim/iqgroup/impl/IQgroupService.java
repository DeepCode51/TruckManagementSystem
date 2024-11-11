package com.fh.service.fhim.iqgroup.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fh.dao.DaoSupport;
import com.fh.entity.Page;
import com.fh.util.PageData;
import com.fh.service.fhim.iqgroup.IQgroupManager;

/** 
 * 说明： 我在的群组
 * 创建人：admin Q1347845688
 * 创建时间：2018-07-20
 * @version
 */
@Service("iqgroupService")
public class IQgroupService implements IQgroupManager{

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	/**新增
	 * @param pd
	 * @throws Exception
	 */
	public void save(PageData pd)throws Exception{
		dao.save("IQgroupMapper.save", pd);
	}
	
	/**删除
	 * @param pd
	 * @throws Exception
	 */
	public void delete(PageData pd)throws Exception{
		dao.delete("IQgroupMapper.delete", pd);
	}
	
	/**修改
	 * @param pd
	 * @throws Exception
	 */
	public void edit(PageData pd)throws Exception{
		dao.update("IQgroupMapper.edit", pd);
	}
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> list(Page page)throws Exception{
		return (List<PageData>)dao.findForList("IQgroupMapper.datalistPage", page);
	}
	
	/**列表(全部群成员)带分页
	 * @param page
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> memberslistPage(Page page)throws Exception{
		return (List<PageData>)dao.findForList("IQgroupMapper.memberslistPage", page);
	}
	
	/**列表(全部)
	 * @param pd
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> listAll(PageData pd)throws Exception{
		return (List<PageData>)dao.findForList("IQgroupMapper.listAll", pd);
	}
	
	/**通过id获取数据
	 * @param pd
	 * @throws Exception
	 */
	public PageData findById(PageData pd)throws Exception{
		return (PageData)dao.findForObject("IQgroupMapper.findById", pd);
	}
	
	/**判断我是否在某群 
	 * @param pd
	 * @throws Exception
	 */
	public PageData findByIdandQid(PageData pd)throws Exception{
		return (PageData)dao.findForObject("IQgroupMapper.findByIdandQid", pd);
	}
	
	/**批量删除
	 * @param ArrayDATA_IDS
	 * @throws Exception
	 */
	public void deleteAll(String[] ArrayDATA_IDS)throws Exception{
		dao.delete("IQgroupMapper.deleteAll", ArrayDATA_IDS);
	}
	
}

