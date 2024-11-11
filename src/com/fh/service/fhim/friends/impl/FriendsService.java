package com.fh.service.fhim.friends.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fh.dao.DaoSupport;
import com.fh.entity.Page;
import com.fh.util.PageData;
import com.fh.service.fhim.friends.FriendsManager;

/** 
 * 说明： 好友管理
 * 创建人：admin Q1347845688
 * 修改时间：2018-07-16
 * @version
 */
@Service("friendsService")
public class FriendsService implements FriendsManager{

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	/**新增
	 * @param pd
	 * @throws Exception
	 */
	public void save(PageData pd)throws Exception{
		dao.save("FriendsMapper.save", pd);
	}
	
	/**删除
	 * @param pd
	 * @throws Exception
	 */
	public void delete(PageData pd)throws Exception{
		dao.delete("FriendsMapper.delete", pd);
	}
	
	/**拉黑
	 * @param pd
	 * @throws Exception
	 */
	public void pullblack(PageData pd)throws Exception{
		dao.delete("FriendsMapper.pullblack", pd);
	}
	
	/**修改
	 * @param pd
	 * @throws Exception
	 */
	public void edit(PageData pd)throws Exception{
		dao.update("FriendsMapper.edit", pd);
	}
	
	/**修改同意状态 
	 * @param pd
	 * @throws Exception
	 */
	public void editAllow(PageData pd)throws Exception{
		dao.update("FriendsMapper.editAllow", pd);
	}
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> list(Page page)throws Exception{
		return (List<PageData>)dao.findForList("FriendsMapper.datalistPage", page);
	}
	
	/**列表(全部自己的好友)
	 * @param pd
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> listAll(PageData pd)throws Exception{
		return (List<PageData>)dao.findForList("FriendsMapper.listAll", pd);
	}
	
	/**列表(添加好友页面检索好友)
	 * @param pd
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> listAllToSearch(PageData pd)throws Exception{
		return (List<PageData>)dao.findForList("FriendsMapper.listAllToSearch", pd);
	}
	
	/**列表(全部全部有自己好友的用户)
	 * @param pd
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> listAllFri(PageData pd)throws Exception{
		return (List<PageData>)dao.findForList("FriendsMapper.listAllFri", pd);
	}
	
	/**通过id获取数据
	 * @param pd
	 * @throws Exception
	 */
	public PageData findById(PageData pd)throws Exception{
		return (PageData)dao.findForObject("FriendsMapper.findById", pd);
	}
	
	/**获取某个好友详细信息
	 * @param pd
	 * @throws Exception
	 */
	public PageData getTheFriend(PageData pd)throws Exception{
		return (PageData)dao.findForObject("FriendsMapper.getTheFriend", pd);
	}
	
	/**获取我的某个好友
	 * @param pd
	 * @throws Exception
	 */
	public PageData findMyFriend(PageData pd)throws Exception{
		return (PageData)dao.findForObject("FriendsMapper.findMyFriend", pd);
	}
	
	/**批量删除
	 * @param ArrayDATA_IDS
	 * @throws Exception
	 */
	public void deleteAll(String[] ArrayDATA_IDS)throws Exception{
		dao.delete("FriendsMapper.deleteAll", ArrayDATA_IDS);
	}
	
}

