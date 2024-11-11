package com.fh.service.fhim.imstate;

import java.util.List;

import com.fh.entity.Page;
import com.fh.util.PageData;

/** 
 * 说明： 状态(在线or隐身以及签名)接口
 * 创建人：admin Q1347845688
 * 创建时间：2018-07-11
 * @version
 */
public interface ImstateManager{

	/**新增
	 * @param pd
	 * @throws Exception
	 */
	public void save(PageData pd)throws Exception;
	
	/**删除
	 * @param pd
	 * @throws Exception
	 */
	public void delete(PageData pd)throws Exception;
	
	/**修改在线状态
	 * @param pd
	 * @throws Exception
	 */
	public void editOnline(PageData pd)throws Exception;
	
	/**修改个性签名
	 * @param pd
	 * @throws Exception
	 */
	public void editAuto(PageData pd)throws Exception;
	
	/**修改皮肤
	 * @param pd
	 * @throws Exception
	 */
	public void editSign(PageData pd)throws Exception;
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	public List<PageData> list(Page page)throws Exception;
	
	/**列表(全部)
	 * @param pd
	 * @throws Exception
	 */
	public List<PageData> listAll(PageData pd)throws Exception;
	
	/**通过id获取数据
	 * @param pd
	 * @throws Exception
	 */
	public PageData findById(PageData pd)throws Exception;
	
	/**通过用户名获取数据
	 * @param pd
	 * @throws Exception
	 */
	public PageData findByUsername(PageData pd)throws Exception;
	
	/**批量删除
	 * @param ArrayDATA_IDS
	 * @throws Exception
	 */
	public void deleteAll(String[] ArrayDATA_IDS)throws Exception;
	
}

