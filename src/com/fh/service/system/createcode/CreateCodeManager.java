package com.fh.service.system.createcode;

import java.util.List;

import com.fh.entity.Page;
import com.fh.util.PageData;

/** 
 * 类名称：代码生成器接口类
 * 创建人：admin Q1347845688
 * @version
 */
public interface CreateCodeManager {
	
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
	
	/**列表
	 * @param page
	 * @throws Exception
	 */
	public List<PageData> list(Page page)throws Exception;
	
	/**通过id获取数据
	 * @param pd
	 * @throws Exception
	 */
	public PageData findById(PageData pd)throws Exception;
	
	/**批量删除
	 * @param ArrayDATA_IDS
	 * @throws Exception
	 */
	public void deleteAll(String[] ArrayDATA_IDS)throws Exception;
	
	/**列表(主表)
	 * @param page
	 * @throws Exception
	 */
	public List<PageData> listFa()throws Exception;
	
}
