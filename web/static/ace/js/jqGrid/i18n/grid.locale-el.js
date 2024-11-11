;(function($){
/**
 * jqGrid Greek (el) Translation
 * Alex Cicovic
 * http://www.alexcicovic.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "View {0} - {1} of {2}",
	    emptyrecords: "No records to view",
		loadtext: "桅蠈蟻蟿蠅蟽畏...",
		pgtext : "Page {0} of {1}"
	},
	search : {
	    caption: "螒谓伪味萎蟿畏蟽畏...",
	    Find: "螘蠉蟻蔚蟽畏",
	    Reset: "螘蟺伪谓伪蠁慰蟻维",
	    odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
	    addCaption: "螘喂蟽伪纬蠅纬萎 螘纬纬蟻伪蠁萎蟼",
	    editCaption: "螘蟺蔚尉蔚蟻纬伪蟽委伪 螘纬纬蟻伪蠁萎蟼",
	    bSubmit: "螝伪蟿伪蠂蠋蟻畏蟽畏",
	    bCancel: "螁魏蠀蟻慰",
		bClose: "螝位蔚委蟽喂渭慰",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
	    msg: {
	        required:"韦慰 蟺蔚未委慰 蔚委谓伪喂 伪蟺伪蟻伪委蟿畏蟿慰",
	        number:"韦慰 蟺蔚未委慰 未苇蠂蔚蟿伪喂 渭蠈谓慰 伪蟻喂胃渭慰蠉蟼",
	        minValue:"螚 蟿喂渭萎 蟺蟻苇蟺蔚喂 谓伪 蔚委谓伪喂 渭蔚纬伪位蠉蟿蔚蟻畏 萎 委蟽畏 蟿慰蠀 ",
	        maxValue:"螚 蟿喂渭萎 蟺蟻苇蟺蔚喂 谓伪 蔚委谓伪喂 渭喂魏蟻蠈蟿蔚蟻畏 萎 委蟽畏 蟿慰蠀 ",
	        email: "螚 未喂蔚蠉胃蠀谓蟽畏 e-mail 未蔚谓 蔚委谓伪喂 苇纬魏蠀蟻畏",
	        integer: "韦慰 蟺蔚未委慰 未苇蠂蔚蟿伪喂 渭蠈谓慰 伪魏苇蟻伪喂慰蠀蟼 伪蟻喂胃渭慰蠉蟼",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "View Record",
	    bClose: "Close"
	},
	del : {
	    caption: "螖喂伪纬蟻伪蠁萎",
	    msg: "螖喂伪纬蟻伪蠁萎 蟿蠅谓 蔚蟺喂位蔚纬渭苇谓蠅谓 蔚纬纬蟻伪蠁蠋谓;",
	    bSubmit: "螡伪喂",
	    bCancel: "螁魏蠀蟻慰"
	},
	nav : {
		edittext: " ",
	    edittitle: "螘蟺蔚尉蔚蟻纬伪蟽委伪 蔚蟺喂位蔚纬渭苇谓畏蟼 蔚纬纬蟻伪蠁萎蟼",
		addtext:" ",
	    addtitle: "螘喂蟽伪纬蠅纬萎 谓苇伪蟼 蔚纬纬蟻伪蠁萎蟼",
	    deltext: " ",
	    deltitle: "螖喂伪纬蟻伪蠁萎 蔚蟺喂位蔚纬渭苇谓畏蟼 蔚纬纬蟻伪蠁萎蟼",
	    searchtext: " ",
	    searchtitle: "螘蠉蟻蔚蟽畏 螘纬纬蟻伪蠁蠋谓",
	    refreshtext: "",
	    refreshtitle: "螒谓伪谓苇蠅蟽畏 螤委谓伪魏伪",
	    alertcap: "螤蟻慰蟽慰蠂萎",
	    alerttext: "螖蔚谓 苇蠂蔚蟿蔚 蔚蟺喂位苇尉蔚喂 蔚纬纬蟻伪蠁萎",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
	    caption: "螘渭蠁维谓喂蟽畏 / 螒蟺蠈魏蟻蠀蠄畏 危蟿畏位蠋谓",
	    bSubmit: "螣螝",
	    bCancel: "螁魏蠀蟻慰"
	},
	errors : {
		errcap : "危蠁维位渭伪",
		nourl : "螖蔚谓 苇蠂蔚喂 未慰胃蔚委 未喂蔚蠉胃蠀谓蟽畏 蠂蔚喂蟻喂蟽渭慰蠉 纬喂伪 蟿畏 蟽蠀纬魏蔚魏蟻喂渭苇谓畏 蔚谓苇蟻纬蔚喂伪",
		norecords: "螖蔚谓 蠀蟺维蟻蠂慰蠀谓 蔚纬纬蟻伪蠁苇蟼 蟺蟻慰蟼 蔚蟺蔚尉蔚蟻纬伪蟽委伪",
		model : "螁谓喂蟽慰蟼 伪蟻喂胃渭蠈蟼 蟺蔚未委蠅谓 colNames/colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"螝蠀蟻", "螖蔚蠀", "韦蟻喂", "韦蔚蟿", "螤蔚渭", "螤伪蟻", "危伪尾",
				"螝蠀蟻喂伪魏萎", "螖蔚蠀蟿苇蟻伪", "韦蟻委蟿畏", "韦蔚蟿维蟻蟿畏", "螤苇渭蟺蟿畏", "螤伪蟻伪蟽魏蔚蠀萎", "危维尾尾伪蟿慰"
			],
			monthNames: [
				"螜伪谓", "桅蔚尾", "螠伪蟻", "螒蟺蟻", "螠伪喂", "螜慰蠀谓", "螜慰蠀位", "螒蠀纬", "危蔚蟺", "螣魏蟿", "螡慰蔚", "螖蔚魏",
				"螜伪谓慰蠀维蟻喂慰蟼", "桅蔚尾蟻慰蠀维蟻喂慰蟼", "螠维蟻蟿喂慰蟼", "螒蟺蟻委位喂慰蟼", "螠维喂慰蟼", "螜慰蠉谓喂慰蟼", "螜慰蠉位喂慰蟼", "螒蠉纬慰蠀蟽蟿慰蟼", "危蔚蟺蟿苇渭尾蟻喂慰蟼", "螣魏蟿蠋尾蟻喂慰蟼", "螡慰苇渭尾蟻喂慰蟼", "螖蔚魏苇渭尾蟻喂慰蟼"
			],
			AmPm : ["蟺渭","渭渭","螤螠","螠螠"],
			S: function (j) {return j == 1 || j > 1 ? ['畏'][Math.min((j - 1) % 10, 3)] : ''},
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
