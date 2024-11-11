package com.fh.entity.${packageName};

import java.util.List;

/** 
 * 说明：${TITLE} 实体类
 * 创建人：admin Q1347845688
 * 创建时间：${nowDate?string("yyyy-MM-dd")}
 */
public class ${objectName}{ 
	
	private String ${objectNameUpper}_ID;	//主键
	private String NAME;					//名称
	private String PARENT_ID;				//父类ID
	private String target;
	private ${objectName} ${objectNameLower};
	private List<${objectName}> sub${objectName};
	private boolean has${objectName} = false;
	private String treeurl;
	
	<#list fieldList as var>
		<#if var[1] == 'Integer'>
	private int ${var[0]};				//${var[2]}
	public int getF${var[0]}() {
		return ${var[0]};
	}
	public void setF${var[0]}(int ${var[0]}) {
		this.${var[0]} = ${var[0]};
	}
		<#elseif var[1] == 'Double'>
	private Double ${var[0]};			//${var[2]}
	public Double getF${var[0]}() {
		return ${var[0]};
	}
	public void setF${var[0]}(Double ${var[0]}) {
		this.${var[0]} = ${var[0]};
	}
		<#else>
	private String ${var[0]};			//${var[2]}
	public String getF${var[0]}() {
		return ${var[0]};
	}
	public void setF${var[0]}(String ${var[0]}) {
		this.${var[0]} = ${var[0]};
	}
		</#if>
	</#list>

	public String get${objectNameUpper}_ID() {
		return ${objectNameUpper}_ID;
	}
	public void set${objectNameUpper}_ID(String ${objectNameUpper}_ID) {
		this.${objectNameUpper}_ID = ${objectNameUpper}_ID;
	}
	public String getNAME() {
		return NAME;
	}
	public void setNAME(String NAME) {
		this.NAME = NAME;
	}
	public String getPARENT_ID() {
		return PARENT_ID;
	}
	public void setPARENT_ID(String PARENT_ID) {
		this.PARENT_ID = PARENT_ID;
	}
	public String getTarget() {
		return target;
	}
	public void setTarget(String target) {
		this.target = target;
	}
	public ${objectName} get${objectName}() {
		return ${objectNameLower};
	}
	public void set${objectName}(${objectName} ${objectNameLower}) {
		this.${objectNameLower} = ${objectNameLower};
	}
	public List<${objectName}> getSub${objectName}() {
		return sub${objectName};
	}
	public void setSub${objectName}(List<${objectName}> sub${objectName}) {
		this.sub${objectName} = sub${objectName};
	}
	public boolean isHas${objectName}() {
		return has${objectName};
	}
	public void setHas${objectName}(boolean has${objectName}) {
		this.has${objectName} = has${objectName};
	}
	public String getTreeurl() {
		return treeurl;
	}
	public void setTreeurl(String treeurl) {
		this.treeurl = treeurl;
	}
	
}
