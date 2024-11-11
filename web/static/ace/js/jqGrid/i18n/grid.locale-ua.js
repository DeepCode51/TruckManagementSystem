;(function($){
/**
 * jqGrid Ukrainian Translation v1.0 02.07.2009
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "袩械褉械谐谢褟写 {0} - {1} 蟹 {2}",
	  emptyrecords: "袧械屑邪褦 蟹邪锌懈褋褨胁 写谢褟 锌械褉械谐谢褟写褍",
		loadtext: "袟邪胁邪薪褌邪卸械薪薪褟...",
		pgtext : "小褌芯褉. {0} 蟹 {1}"
	},
	search : {
    caption: "袩芯褕褍泻...",
    Find: "袟薪邪泄褌懈",
    Reset: "小泻懈写邪薪薪褟",
    odata: [{ oper:'eq', text:"褉褨胁薪芯"},{ oper:'ne', text:"薪械 褉褨胁薪芯"},{ oper:'lt', text:"屑械薪褕械"},{ oper:'le', text:"屑械薪褕械 邪斜芯 褉褨胁薪械"},{ oper:'gt', text:"斜褨谢褜褕械"},{ oper:'ge', text:"斜褨谢褜褕械 邪斜芯 褉褨胁薪械"},{ oper:'bw', text:"锌芯褔懈薪邪褦褌褜褋褟 蟹"},{ oper:'bn', text:"薪械 锌芯褔懈薪邪褦褌褜褋褟 蟹"},{ oper:'in', text:"蟹薪邪褏芯写懈褌褜褋褟 胁"},{ oper:'ni', text:"薪械 蟹薪邪褏芯写懈褌褜褋褟 胁"},{ oper:'ew', text:"蟹邪泻褨薪褔褍褦褌褜褋褟 薪邪"},{ oper:'en', text:"薪械 蟹邪泻褨薪褔褍褦褌褜褋褟 薪邪"},{ oper:'cn', text:"屑褨褋褌懈褌褜"},{ oper:'nc', text:"薪械 屑褨褋褌懈褌褜"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
    groupOps: [	{ op: "AND", text: "胁褋械" },	{ op: "OR",  text: "斜褍写褜-褟泻懈泄" }],
	operandTitle : "Click to select search operation.",
	resetTitle : "Reset Search Value"
	},
	edit : {
    addCaption: "袛芯写邪褌懈 蟹邪锌懈褋",
    editCaption: "袟屑褨薪懈褌懈 蟹邪锌懈褋",
    bSubmit: "袟斜械褉械谐褌懈",
    bCancel: "袙褨写屑褨薪邪",
		bClose: "袟邪泻褉懈褌懈",
		saveData: "袛芯 写邪薪薪懈褏 斜褍谢懈 胁薪械褋械薪褨 蟹屑褨薪懈! 袟斜械褉械谐褌懈 蟹屑褨薪懈?",
		bYes : "孝邪泻",
		bNo : "袧褨",
		bExit : "袙褨写屑褨薪邪",
	    msg: {
        required:"袩芯谢械 褦 芯斜芯胁'褟蟹泻芯胁懈屑",
        number:"袘褍写褜 谢邪褋泻邪, 胁胁械写褨褌褜 锌褉邪胁懈谢褜薪械 褔懈褋谢芯",
        minValue:"蟹薪邪褔械薪薪褟 锌芯胁懈薪薪械 斜褍褌懈 斜褨谢褜褕械 邪斜芯 写芯褉褨胁薪褞褦",
        maxValue:"蟹薪邪褔械薪薪褟 锌芯胁懈薪薪芯 斜褍褌懈 屑械薪褕械 邪斜芯 写芯褉褨胁薪褞褦",
        email: "薪械泻芯褉械泻褌薪邪 邪写褉械褋邪 械谢械泻褌褉芯薪薪芯褩 锌芯褕褌懈",
        integer: "袘褍写褜 谢邪褋泻邪, 胁胁械写械薪薪褟 写褨泄褋薪械 褑褨谢械 蟹薪邪褔械薪薪褟",
        date: "袘褍写褜 谢邪褋泻邪, 胁胁械写械薪薪褟 写褨泄褋薪械 蟹薪邪褔械薪薪褟 写邪褌懈",
        url: "薪械 写褨泄褋薪懈泄 URL. 袧械芯斜褏褨写薪邪 锌褉懈褋褌邪胁泻邪 ('http://' or 'https://')",
		nodefined : " is not defined!",
		novalue : " return value is required!",
		customarray : "Custom function should return array!",
		customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "袩械褉械谐谢褟薪褍褌懈 蟹邪锌懈褋",
	    bClose: "袟邪泻褉懈褌懈"
	},
	del : {
	    caption: "袙懈写邪谢懈褌懈",
	    msg: "袙懈写邪谢懈褌懈 芯斜褉邪薪懈泄 蟹邪锌懈褋(懈)?",
	    bSubmit: "袙懈写邪谢懈褌懈",
	    bCancel: "袙褨写屑褨薪邪"
	},
	nav : {
  		edittext: " ",
	    edittitle: "袟屑褨薪懈褌懈 胁懈斜褉邪薪懈泄 蟹邪锌懈褋",
  		addtext:" ",
	    addtitle: "袛芯写邪褌懈 薪芯胁懈泄 蟹邪锌懈褋",
	    deltext: " ",
	    deltitle: "袙懈写邪谢懈褌懈 胁懈斜褉邪薪懈泄 蟹邪锌懈褋",
	    searchtext: " ",
	    searchtitle: "袟薪邪泄褌懈 蟹邪锌懈褋懈",
	    refreshtext: "",
	    refreshtitle: "袨薪芯胁懈褌懈 褌邪斜谢懈褑褞",
	    alertcap: "袩芯锌械褉械写卸械薪薪褟",
	    alerttext: "袘褍写褜 谢邪褋泻邪, 胁懈斜械褉褨褌褜 蟹邪锌懈褋",
  		viewtext: "",
  		viewtitle: "袩械褉械谐谢褟薪褍褌懈 芯斜褉邪薪懈泄 蟹邪锌懈褋"
	},
	col : {
	    caption: "袩芯泻邪蟹邪褌懈/袩褉懈褏芯胁邪褌懈 褋褌芯胁锌褑褨",
	    bSubmit: "袟斜械褉械谐褌懈",
	    bCancel: "袙褨写屑褨薪邪"
	},
	errors : {
		errcap : "袩芯屑懈谢泻邪",
		nourl : "URL 薪械 蟹邪写邪薪",
		norecords: "袧械屑邪褦 蟹邪锌懈褋褨胁 写谢褟 芯斜褉芯斜泻懈",
    model : "效懈褋谢芯 锌芯谢褨胁 薪械 胁褨写锌芯胁褨写邪褦 褔懈褋谢褍 褋褌芯胁锌褑褨胁 褌邪斜谢懈褑褨!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"袧写", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜",
				"袧械写褨谢褟", "袩芯薪械写褨谢芯泻", "袙褨胁褌芯褉芯泻", "小械褉械写邪", "效械褌胁械褉", "袩'褟褌薪懈褑褟", "小褍斜芯褌邪"
			],
			monthNames: [
				"小褨褔", "袥褞褌", "袘械褉", "袣胁褨", "孝褉邪", "效械褉", "袥懈锌", "小械褉", "袙械褉", "袞芯胁", "袥懈褋", "袚褉褍",
				"小褨褔械薪褜", "袥褞褌懈泄", "袘械褉械蟹械薪褜", "袣胁褨褌械薪褜", "孝褉邪胁械薪褜", "效械褉胁械薪褜", "袥懈锌械薪褜", "小械褉锌械薪褜", "袙械褉械褋械薪褜", "袞芯胁褌械薪褜", "袥懈褋褌芯锌邪写", "袚褉褍写械薪褜"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "n.j.Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y G:i:s",
	            MonthDay: "F d",
	            ShortTime: "G:i",
	            LongTime: "G:i:s",
	            SortableDateTime: "Y-m-d\\TH:i:s",
	            UniversalSortableDateTime: "Y-m-d H:i:sO",
	            YearMonth: "F, Y"
	        },
	        reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
	  target: '',
	  checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);
