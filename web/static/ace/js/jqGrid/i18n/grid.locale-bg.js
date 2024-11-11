;(function($){
/**
 * jqGrid Bulgarian Translation 
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0} - {1} 芯褌 {2}",
		emptyrecords: "袧褟屑邪 蟹邪锌懈褋(懈)",
		loadtext: "袟邪褉械卸写邪屑...",
		pgtext : "小褌褉. {0} 芯褌 {1}"
	},
	search : {
		caption: "孝褗褉褋械薪械...",
		Find: "袧邪屑械褉懈",
		Reset: "袠蟹褔懈褋褌懈",
		odata: [{ oper:'eq', text:"褉邪胁薪芯"},{ oper:'ne', text:"褉邪蟹谢懈褔薪芯"},{ oper:'lt', text:"锌芯-屑邪谢泻芯"},{ oper:'le', text:"锌芯-屑邪谢泻芯 懈谢懈="},{ oper:'gt', text:"锌芯-谐芯谢褟屑芯"},{ oper:'ge', text:"锌芯-谐芯谢褟屑芯 懈谢懈 ="},{ oper:'bw', text:"蟹邪锌芯褔胁邪 褋"},{ oper:'bn', text:"薪械 蟹邪锌芯褔胁邪 褋"},{ oper:'in', text:"褋械 薪邪屑懈褉邪 胁"},{ oper:'ni', text:"薪械 褋械 薪邪屑懈褉邪 胁"},{ oper:'ew', text:"蟹邪胁褗褉褕胁邪 褋"},{ oper:'en', text:"薪械 蟹邪胁褗褉褕邪胁邪 褋"},{ oper:'cn', text:"褋褗写褗褉卸邪"},{ oper:'nc', text:"薪械 褋褗写褗褉卸邪"},{ oper:'nu', text:'械 NULL'},{ oper:'nn', text:'薪械 械 NULL'}],
	    groupOps: [	{ op: "AND", text: "&nbsp;袠 " },	{ op: "OR",  text: "袠袥袠" }	],
		operandTitle : "袧邪褌懈褋薪懈 蟹邪 懈蟹斜芯褉 薪邪 芯锌械褉邪薪写.",
		resetTitle : "袠蟹褔懈褋褌懈 褋褌芯泄薪芯褋褌褌邪"
	},
	edit : {
		addCaption: "袧芯胁 袟邪锌懈褋",
		editCaption: "袪械写邪泻褑懈褟 袟邪锌懈褋",
		bSubmit: "袟邪锌懈褕懈",
		bCancel: "袠蟹褏芯写",
		bClose: "袟邪褌胁芯褉懈",
		saveData: "袛邪薪薪懈褌械 褋邪 锌褉芯屑械薪械薪懈! 袛邪 褋褗褏褉邪薪褟 谢懈 锌褉芯屑械薪懈褌械?",
		bYes : "袛邪",
		bNo : "袧械",
		bExit : "袨褌泻邪蟹",
		msg: {
			required:"袩芯谢械褌芯 械 蟹邪写褗谢卸懈褌械谢薪芯",
			number:"袙褗胁械写械褌械 胁邪谢懈写薪芯 褔懈褋谢芯!",
			minValue:"褋褌芯泄薪芯褋褌褌邪 褌褉褟斜胁邪 写邪 械 锌芯-谐芯谢褟屑邪 懈谢懈 褉邪胁薪邪 芯褌",
			maxValue:"褋褌芯泄薪芯褋褌褌邪 褌褉褟斜胁邪 写邪 械 锌芯-屑邪谢泻邪 懈谢懈 褉邪胁薪邪 芯褌",
			email: "薪械 械 胁邪谢懈写械薪 械谢. 邪写褉械褋",
			integer: "袙褗胁械写械褌械 胁邪谢懈写薪芯 褑褟谢芯 褔懈褋谢芯",
			date: "袙褗胁械写械褌械 胁邪谢懈写薪邪 写邪褌邪",
			url: "e 薪械胁邪谢懈写械薪 URL. 袠蟹懈褋泻邪胁邪 褋械 锌褉械褎懈泻褋('http://' 懈谢懈 'https://')",
			nodefined : " 械 薪械写械褎懈薪懈褉邪薪邪!",
			novalue : " 懈蟹懈褋泻胁邪 胁褉褗褖邪薪械 薪邪 褋褌芯泄薪芯褋褌!",
			customarray : "袩芯褌褉械斜. 肖褍薪泻褑懈褟 褌褉褟斜胁邪 写邪 胁褗褉薪械 屑邪褋懈胁!",
			customfcheck : "袩芯褌褉械斜懈褌械谢褋泻邪 褎褍薪泻褑懈褟 械 蟹邪写褗谢卸懈褌械谢薪邪 锌褉懈 褌芯蟹懈 褌懈锌 械谢械屑械薪褌!"
		}
	},
	view : {
		caption: "袩褉械谐谢械写 蟹邪锌懈褋",
		bClose: "袟邪褌胁芯褉懈"
	},
	del : {
		caption: "袠蟹褌褉懈胁邪薪械",
		msg: "袛邪 懈蟹褌褉懈褟 谢懈 懈蟹斜褉邪薪懈褟褌 蟹邪锌懈褋?",
		bSubmit: "袠蟹褌褉懈泄",
		bCancel: "袨褌泻邪蟹"
	},
	nav : {
		edittext: " ",
		edittitle: "袪械写邪泻褑懈褟 懈蟹斜褉邪薪 蟹邪锌懈褋",
		addtext:" ",
		addtitle: "袛芯斜邪胁褟薪械 薪芯胁 蟹邪锌懈褋",
		deltext: " ",
		deltitle: "袠蟹褌褉懈胁邪薪械 懈蟹斜褉邪薪 蟹邪锌懈褋",
		searchtext: " ",
		searchtitle: "孝褗褉褋械薪械 蟹邪锌懈褋(懈)",
		refreshtext: "",
		refreshtitle: "袨斜薪芯胁懈 褌邪斜谢懈褑邪",
		alertcap: "袩褉械写褍锌褉械卸写械薪懈械",
		alerttext: "袦芯谢褟, 懈蟹斜械褉械褌械 蟹邪锌懈褋",
		viewtext: "",
		viewtitle: "袩褉械谐谢械写 懈蟹斜褉邪薪 蟹邪锌懈褋"
	},
	col : {
		caption: "袠蟹斜械褉懈 泻芯谢芯薪懈",
		bSubmit: "袨泻",
		bCancel: "袠蟹褏芯写"	
	},
	errors : {
		errcap : "袚褉械褕泻邪",
		nourl : "袧褟屑邪 锌芯褋芯褔械薪 url 邪写褉械褋",
		norecords: "袧褟屑邪 蟹邪锌懈褋 蟹邪 芯斜褉邪斜芯褌泻邪",
		model : "袦芯写械谢邪 薪械 褋褗芯褌胁械褌褋褌胁邪 薪邪 懈屑械薪邪褌邪!"	
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" 谢胁.", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"袧械写", "袩芯薪", "袙褌", "小褉", "效械褌", "袩械褌", "小褗斜",
				"袧械写械谢褟", "袩芯薪械写械谢薪懈泻", "袙褌芯褉薪懈泻", "小褉褟写邪", "效械褌胁褗褉褌褗泻", "袩械褌褗泻", "小褗斜芯褌邪"
			],
			monthNames: [
				"携薪褍", "肖械胁", "袦邪褉", "袗锌褉", "袦邪泄", "挟薪懈", "挟谢懈", "袗胁谐", "小械锌", "袨泻褌", "袧芯胁", "袛械泻",
				"携薪褍邪褉懈", "肖械胁褉褍邪褉懈", "袦邪褉褌", "袗锌褉懈谢", "袦邪泄", "挟薪懈", "挟谢懈", "袗胁谐褍褋褌", "小械锌褌械屑胁褉懈", "袨泻褌芯屑胁褉懈", "袧芯械屑胁褉懈", "袛械泻械屑胁褉懈"
			],
			AmPm : ["","","",""],
			S: function (j) {
				if(j==7 || j==8 || j== 27 || j== 28) {
					return '屑懈';
				}
				return ['胁懈', '褉懈', '褌懈'][Math.min((j - 1) % 10, 2)];
			},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "n/j/Y",
				LongDate: "l, F d, Y",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "g:i A",
				LongTime: "g:i:s A",
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
