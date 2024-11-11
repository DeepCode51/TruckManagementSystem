package com.fh.service.fhim.imstate.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fh.dao.DaoSupport;
import com.fh.entity.Page;
import com.fh.util.PageData;
import com.fh.service.fhim.imstate.ImstateManager;

/** 
 * 说明： 状态(在线or隐身以及签名)
 * 创建人：admin Q1347845688
 * 创建时间：2018-07-11
 * @version
 */
@Service("imstateService")
public class ImstateService implements ImstateManager{

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	/**新增
	 * @param pd
	 * @throws Exception
	 */
	public void save(PageData pd)throws Exception{
		dao.save("ImstateMapper.save", pd);
	}
	
	/**删除
	 * @param pd
	 * @throws Exception
	 */
	public void delete(PageData pd)throws Exception{
		dao.delete("ImstateMapper.delete", pd);
	}
	
	/**修改在线状态
	 * @param pd
	 * @throws Exception
	 */
	public void editOnline(PageData pd)throws Exception{
		dao.update("ImstateMapper.editOnline", pd);
	}
	
	/**修改个性签名
	 * @param pd
	 * @throws Exception
	 */
	public void editAuto(PageData pd)throws Exception{
		dao.update("ImstateMapper.editAuto", pd);
	}
	
	/**修改皮肤
	 * @param pd
	 * @throws Exception
	 */
	public void editSign(PageData pd)throws Exception{
		dao.update("ImstateMapper.editSign", pd);
	}
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> list(Page page)throws Exception{
		return (List<PageData>)dao.findForList("ImstateMapper.datalistPage", page);
	}
	
	/**列表(全部)
	 * @param pd
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> listAll(PageData pd)throws Exception{
		return (List<PageData>)dao.findForList("ImstateMapper.listAll", pd);
	}
	
	/**通过id获取数据
	 * @param pd
	 * @throws Exception
	 */
	public PageData findById(PageData pd)throws Exception{
		return (PageData)dao.findForObject("ImstateMapper.findById", pd);
	}
	
	/**通过用户名获取数据
	 * @param pd
	 * @throws Exception
	 */
	public PageData findByUsername(PageData pd)throws Exception{
		return (PageData)dao.findForObject("ImstateMapper.findByUsername", pd);
	}
	
	/**批量删除
	 * @param ArrayDATA_IDS
	 * @throws Exception
	 */
	public void deleteAll(String[] ArrayDATA_IDS)throws Exception{
		dao.delete("ImstateMapper.deleteAll", ArrayDATA_IDS);
	}
	
}

