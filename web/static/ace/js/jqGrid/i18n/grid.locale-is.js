;(function($){
/**
 * jqGrid Icelandic Translation
 * jtm@hi.is Univercity of Iceland
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Sko冒a {0} - {1} af {2}",
	    emptyrecords: "Engar f忙rslur",
		loadtext: "Hle冒ur...",
		pgtext : "S铆冒a {0} af {1}"
	},
	search : {
	    caption: "Leita...",
	    Find: "Leita",
	    Reset: "Endursetja",
	    odata: [{ oper:'eq', text:"sama og"},{ oper:'ne', text:"ekki sama og"},{ oper:'lt', text:"minna en"},{ oper:'le', text:"minna e冒a jafnt og"},{ oper:'gt', text:"st忙rra en"},{ oper:'ge', text:"st忙rra e冒a jafnt og"},{ oper:'bw', text:"byrjar 谩"},{ oper:'bn', text:"byrjar ekki 谩"},{ oper:'in', text:"er 铆"},{ oper:'ni', text:"er ekki 铆"},{ oper:'ew', text:"endar 谩"},{ oper:'en', text:"endar ekki 谩"},{ oper:'cn', text:"inniheldur"},{ oper:'nc', text:"inniheldur ekki"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "allt" },	{ op: "OR",  text: "e冒a" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
	    addCaption: "B忙ta vi冒 f忙rslu",
	    editCaption: "Breyta f忙rslu",
	    bSubmit: "Vista",
	    bCancel: "H忙tta vi冒",
		bClose: "Loka",
		saveData: "G枚gn hafa breyst! Vista breytingar?",
		bYes : "J谩",
		bNo : "Nei",
		bExit : "H忙tta vi冒",
	    msg: {
	        required:"Reitur er nau冒synlegur",
	        number:"Vinsamlega settu inn t枚lu",
	        minValue:"gildi ver冒ur a冒 vera meira en e冒a jafnt og ",
	        maxValue:"gildi ver冒ur a冒 vera minna en e冒a jafnt og ",
	        email: "er ekki l枚glegt email",
	        integer: "Vinsamlega settu inn t枚lu",
			date: "Vinsamlega setti inn dagsetningu",
			url: "er ekki l枚glegt URL. Vantar ('http://' e冒a 'https://')",
			nodefined : " er ekki skilgreint!",
			novalue : " skilagildi nau冒synlegt!",
			customarray : "Fall skal skila fylki!",
			customfcheck : "Fall skal vera skilgreint!"
		}
	},
	view : {
	    caption: "Sko冒a f忙rslu",
	    bClose: "Loka"
	},
	del : {
	    caption: "Ey冒a",
	    msg: "Ey冒a v枚ldum f忙rslum ?",
	    bSubmit: "Ey冒a",
	    bCancel: "H忙tta vi冒"
	},
	nav : {
		edittext: " ",
	    edittitle: "Breyta f忙rslu",
		addtext:" ",
	    addtitle: "N媒 f忙rsla",
	    deltext: " ",
	    deltitle: "Ey冒a f忙rslu",
	    searchtext: " ",
	    searchtitle: "Leita",
	    refreshtext: "",
	    refreshtitle: "Endurhla冒a",
	    alertcap: "Vi冒v枚run",
	    alerttext: "Vinsamlega veldu f忙rslu",
		viewtext: "",
		viewtitle: "Sko冒a valda f忙rslu"
	},
	col : {
	    caption: "S媒na / fela d谩lka",
	    bSubmit: "Vista",
	    bCancel: "H忙tta vi冒"	
	},
	errors : {
		errcap : "Villa",
		nourl : "Vantar sl贸冒",
		norecords: "Engar f忙rslur valdar",
	    model : "Lengd colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "M谩n", "脼ri", "Mi冒", "Fim", "F枚s", "Lau",
				"Sunnudagur", "M谩nudagur", "脼ri冒judagur", "Mi冒vikudagur", "Fimmtudagur", "F枚studagur", "Laugardagur"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Ma铆", "J煤n", "J煤l", "脕g煤", "Sep", "Oct", "N贸v", "Des",
				"Jan煤ar", "Febr煤ar", "Mars", "Apr铆l", "Ma铆", "J煤n媒", "J煤l媒", "脕g煤st", "September", "Okt贸ber", "N贸vember", "Desember"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
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
