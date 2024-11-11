package com.fh.service.${packageName}.${objectNameLower};

import java.util.List;
import com.fh.entity.Page;
import com.fh.entity.${packageName}.${objectName};
import com.fh.util.PageData;

/** 
 * 说明： ${TITLE}接口
 * 创建人：admin Q1347845688
 * 创建时间：${nowDate?string("yyyy-MM-dd")}
 * @version
 */
public interface ${objectName}Manager{

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
	
	/**修改
	 * @param pd
	 * @throws Exception
	 */
	public void edit(PageData pd)throws Exception;
	
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
	
	/**
	 * 通过ID获取其子级列表
	 * @param parentId
	 * @return
	 * @throws Exception
	 */
	public List<${objectName}> listByParentId(String parentId) throws Exception;
	
	/**
	 * 获取所有数据并填充每条数据的子级列表(递归处理)
	 * @param MENU_ID
	 * @return
	 * @throws Exception
	 */
	public List<${objectName}> listTree(String parentId) throws Exception;
	
}

