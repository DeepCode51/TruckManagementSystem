-- ----------------------------
-- Table structure for "C##FHADMIN"."${tabletop}${objectNameUpper}"
-- ----------------------------
-- DROP TABLE "C##FHADMIN"."${tabletop}${objectNameUpper}";
CREATE TABLE "C##FHADMIN"."${tabletop}${objectNameUpper}" (
<#list fieldList as var>
	<#if var[1] == 'Integer'>
	"${var[0]}" NUMBER(${var[5]}) NULL ,
	<#elseif var[1] == 'Double'>
	"${var[0]}" NUMBER(${var[5]},${var[6]}) NULL ,
	<#else>
	"${var[0]}" VARCHAR2(${var[5]} BYTE) NULL ,
	</#if>
</#list>
	"${objectNameUpper}_ID" VARCHAR2(100 BYTE) NOT NULL,
	"${faobject}_ID" VARCHAR2(100 BYTE) NOT NULL
)
LOGGING
NOCOMPRESS
NOCACHE
;

<#list fieldList as var>
COMMENT ON COLUMN "C##FHADMIN"."${tabletop}${objectNameUpper}"."${var[0]}" IS '${var[2]}';
</#list>
COMMENT ON COLUMN "C##FHADMIN"."${tabletop}${objectNameUpper}"."${objectNameUpper}_ID" IS 'ID';

-- ----------------------------
-- Indexes structure for table ${tabletop}${objectNameUpper}
-- ----------------------------

-- ----------------------------
-- Checks structure for table "C##FHADMIN"."${tabletop}${objectNameUpper}"

-- ----------------------------

ALTER TABLE "C##FHADMIN"."${tabletop}${objectNameUpper}" ADD CHECK ("${objectNameUpper}_ID" IS NOT NULL);

-- ----------------------------
-- Primary Key structure for table "C##FHADMIN"."${tabletop}${objectNameUpper}"
-- ----------------------------
ALTER TABLE "C##FHADMIN"."${tabletop}${objectNameUpper}" ADD PRIMARY KEY ("${objectNameUpper}_ID");
