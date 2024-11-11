;(function($){
/**
 * jqGrid Russian Translation v1.0 02.07.2009 (based on translation by Alexey Kanaev v1.1 21.01.2009, http://softcore.com.ru)
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "袩褉芯褋屑芯褌褉 {0} - {1} 懈蟹 {2}",
		emptyrecords: "袧械褌 蟹邪锌懈褋械泄 写谢褟 锌褉芯褋屑芯褌褉邪",
		loadtext: "袟邪谐褉褍蟹泻邪...",
		pgtext : "小褌褉. {0} 懈蟹 {1}"
	},
	search : {
		caption: "袩芯懈褋泻...",
		Find: "袧邪泄褌懈",
		Reset: "小斜褉芯褋",
		odata: [{ oper:'eq', text:"褉邪胁薪芯"},{ oper:'ne', text:"薪械 褉邪胁薪芯"},{ oper:'lt', text:"屑械薪褜褕械"},{ oper:'le', text:"屑械薪褜褕械 懈谢懈 褉邪胁薪芯"},{ oper:'gt', text:"斜芯谢褜褕械"},{ oper:'ge', text:"斜芯谢褜褕械 懈谢懈 褉邪胁薪芯"},{ oper:'bw', text:"薪邪褔懈薪邪械褌褋褟 褋"},{ oper:'bn', text:"薪械 薪邪褔懈薪邪械褌褋褟 褋"},{ oper:'in', text:"薪邪褏芯写懈褌褋褟 胁"},{ oper:'ni', text:"薪械 薪邪褏芯写懈褌褋褟 胁"},{ oper:'ew', text:"蟹邪泻邪薪褔懈胁邪械褌褋褟 薪邪"},{ oper:'en', text:"薪械 蟹邪泻邪薪褔懈胁邪械褌褋褟 薪邪"},{ oper:'cn', text:"褋芯写械褉卸懈褌"},{ oper:'nc', text:"薪械 褋芯写械褉卸懈褌"},{ oper:'nu', text:"褉邪胁薪芯 NULL"},{ oper:'nn', text:"薪械 褉邪胁薪芯 NULL"}],
		groupOps: [	{ op: "AND", text: "胁褋械" }, { op: "OR", text: "谢褞斜芯泄" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "袛芯斜邪胁懈褌褜 蟹邪锌懈褋褜",
		editCaption: "袪械写邪泻褌懈褉芯胁邪褌褜 蟹邪锌懈褋褜",
		bSubmit: "小芯褏褉邪薪懈褌褜",
		bCancel: "袨褌屑械薪邪",
		bClose: "袟邪泻褉褘褌褜",
		saveData: "袛邪薪薪褘械 斜褘谢懈 懈蟹屑械薪械薪薪褘! 小芯褏褉邪薪懈褌褜 懈蟹屑械薪械薪懈褟?",
		bYes : "袛邪",
		bNo : "袧械褌",
		bExit : "袨褌屑械薪邪",
		msg: {
			required:"袩芯谢械 褟胁谢褟械褌褋褟 芯斜褟蟹邪褌械谢褜薪褘屑",
			number:"袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 锌褉邪胁懈谢褜薪芯械 褔懈褋谢芯",
			minValue:"蟹薪邪褔械薪懈械 写芯谢卸薪芯 斜褘褌褜 斜芯谢褜褕械 谢懈斜芯 褉邪胁薪芯",
			maxValue:"蟹薪邪褔械薪懈械 写芯谢卸薪芯 斜褘褌褜 屑械薪褜褕械 谢懈斜芯 褉邪胁薪芯",
			email: "薪械泻芯褉褉械泻褌薪芯械 蟹薪邪褔械薪懈械 e-mail",
			integer: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 褑械谢芯械 褔懈褋谢芯",
			date: "袩芯卸邪谢褍泄褋褌邪, 胁胁械写懈褌械 锌褉邪胁懈谢褜薪褍褞 写邪褌褍",
			url: "薪械胁械褉薪邪褟 褋褋褘谢泻邪. 袧械芯斜褏芯写懈屑芯 胁胁械褋褌懈 锌褉械褎懈泻褋 ('http://' 懈谢懈 'https://')",
			nodefined : " 薪械 芯锌褉械写械谢械薪芯!",
			novalue : " 胁芯蟹胁褉邪褖邪械屑芯械 蟹薪邪褔械薪懈械 芯斜褟蟹邪褌械谢褜薪芯!",
			customarray : "袩芯谢褜蟹芯胁邪褌械谢褜褋泻邪褟 褎褍薪泻褑懈褟 写芯谢卸薪邪 胁芯蟹胁褉邪褖邪褌褜 屑邪褋褋懈胁!",
			customfcheck : "袩芯谢褜蟹芯胁邪褌械谢褜褋泻邪褟 褎褍薪泻褑懈褟 写芯谢卸薪邪 锌褉懈褋褍褌褋褌胁芯胁邪褌褜 胁 褋谢褍褔邪懈 锌芯谢褜蟹芯胁邪褌械谢褜褋泻芯泄 锌褉芯胁械褉泻懈!"
		}
	},
	view : {
		caption: "袩褉芯褋屑芯褌褉 蟹邪锌懈褋懈",
		bClose: "袟邪泻褉褘褌褜"
	},
	del : {
		caption: "校写邪谢懈褌褜",
		msg: "校写邪谢懈褌褜 胁褘斜褉邪薪薪褍褞 蟹邪锌懈褋褜(懈)?",
		bSubmit: "校写邪谢懈褌褜",
		bCancel: "袨褌屑械薪邪"
	},
	nav : {
		edittext: " ",
		edittitle: "袪械写邪泻褌懈褉芯胁邪褌褜 胁褘斜褉邪薪薪褍褞 蟹邪锌懈褋褜",
		addtext:" ",
		addtitle: "袛芯斜邪胁懈褌褜 薪芯胁褍褞 蟹邪锌懈褋褜",
		deltext: " ",
		deltitle: "校写邪谢懈褌褜 胁褘斜褉邪薪薪褍褞 蟹邪锌懈褋褜",
		searchtext: " ",
		searchtitle: "袧邪泄褌懈 蟹邪锌懈褋懈",
		refreshtext: "",
		refreshtitle: "袨斜薪芯胁懈褌褜 褌邪斜谢懈褑褍",
		alertcap: "袙薪懈屑邪薪懈械",
		alerttext: "袩芯卸邪谢褍泄褋褌邪, 胁褘斜械褉懈褌械 蟹邪锌懈褋褜",
		viewtext: "",
		viewtitle: "袩褉芯褋屑芯褌褉械褌褜 胁褘斜褉邪薪薪褍褞 蟹邪锌懈褋褜"
	},
	col : {
		caption: "袩芯泻邪蟹邪褌褜/褋泻褉褘褌褜 褋褌芯谢斜褑褘",
		bSubmit: "小芯褏褉邪薪懈褌褜",
		bCancel: "袨褌屑械薪邪"	
	},
	errors : {
		errcap : "袨褕懈斜泻邪",
		nourl : "URL 薪械 褍褋褌邪薪芯胁谢械薪",
		norecords: "袧械褌 蟹邪锌懈褋械泄 写谢褟 芯斜褉邪斜芯褌泻懈",
		model : "效懈褋谢芯 锌芯谢械泄 薪械 褋芯芯褌胁械褌褋褌胁褍械褌 褔懈褋谢褍 褋褌芯谢斜褑芯胁 褌邪斜谢懈褑褘!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"袙褋", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜",
				"袙芯褋泻褉械褋械薪懈械", "袩芯薪械写械谢褜薪懈泻", "袙褌芯褉薪懈泻", "小褉械写邪", "效械褌胁械褉谐", "袩褟褌薪懈褑邪", "小褍斜斜芯褌邪"
			],
			monthNames: [
				"携薪胁", "肖械胁", "袦邪褉", "袗锌褉", "袦邪泄", "袠褞薪", "袠褞谢", "袗胁谐", "小械薪", "袨泻褌", "袧芯褟", "袛械泻",
				"携薪胁邪褉褜", "肖械胁褉邪谢褜", "袦邪褉褌", "袗锌褉械谢褜", "袦邪泄", "袠褞薪褜", "袠褞谢褜", "袗胁谐褍褋褌", "小械薪褌褟斜褉褜", "袨泻褌褟斜褉褜", "袧芯褟斜褉褜", "袛械泻邪斜褉褜"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
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
