GO
/****** FHQQ1347845688 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE ${tabletop}${objectNameUpper} (
 		${objectNameUpper}_ID  nvarchar(100) NOT NULL,
 		PARENT_ID  nvarchar(100) NOT NULL,
		NAME  nvarchar(100) NOT NULL,
	<#list fieldList as var>
		<#if var[1] == 'Integer'>
		${var[0]} int NOT NULL,
		<#elseif var[1] == 'Double'>
		${var[0]} numeric(${var[5]},${var[6]}) NULL,
		<#else>
		${var[0]} nvarchar(${var[5]}) DEFAULT NULL,
		</#if>
	</#list>
PRIMARY KEY CLUSTERED 
(
	[${objectNameUpper}_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
