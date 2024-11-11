;(function($){
/**
 * jqGrid Arabic Translation
 * 
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "鬲爻噩賷賱 {0} - {1} 毓賱賶 {2}",
		emptyrecords: "賱丕 賷賵噩丿 鬲爻噩賷賱",
		loadtext: "鬲丨賲賷賱...",
		pgtext : "氐賮丨丞 {0} 毓賱賶 {1}"
	},
	search : {
		caption: "亘丨孬...",
		Find: "亘丨孬",
		Reset: "廿賱睾丕亍",
		odata: [{ oper:'eq', text:"賷爻丕賵賷"},{ oper:'ne', text:"賷禺鬲賱賮"},{ oper:'lt', text:"兀賯賱"},{ oper:'le', text:"兀賯賱 兀賵 賷爻丕賵賷"},{ oper:'gt', text:"兀賰亘乇"},{ oper:'ge', text:"兀賰亘乇 兀賵 賷爻丕賵賷"},{ oper:'bw', text:"賷亘丿兀 亘賭"},{ oper:'bn', text:"賱丕 賷亘丿兀 亘賭"},{ oper:'in', text:"est dans"},{ oper:'ni', text:"n'est pas dans"},{ oper:'ew', text:"賷賳鬲賴 亘賭"},{ oper:'en', text:"賱丕 賷賳鬲賴 亘賭"},{ oper:'cn', text:"賷丨鬲賵賷"},{ oper:'nc', text:"賱丕 賷丨鬲賵賷"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "賲毓", text: "丕賱賰賱" },	{ op: "兀賵",  text: "賱丕 兀丨丿" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
},
	edit : {
		addCaption: "丕囟丕賮丞",
		editCaption: "鬲丨丿賷孬",
		bSubmit: "鬲孬亘賷孬",
		bCancel: "廿賱睾丕亍",
		bClose: "睾賱賯",
		saveData: "鬲睾賷乇鬲 丕賱賲毓胤賷丕鬲 賴賱 鬲乇賷丿 丕賱鬲爻噩賷賱 ?",
		bYes: "賳毓賲",
		bNo: "賱丕",
		bExit: "廿賱睾丕亍",
		msg: {
			required: "禺丕賳丞 廿噩亘丕乇賷丞",
			number: "爻噩賱 乇賯賲 氐丨賷丨",
			minValue: "賷噩亘 兀賳 鬲賰賵賳 丕賱賯賷賲丞 兀賰亘乇 兀賵 鬲爻丕賵賷 0",
			maxValue: "賷噩亘 兀賳 鬲賰賵賳 丕賱賯賷賲丞 兀賯賱 兀賵 鬲爻丕賵賷 0",
			email: "亘乇賷丿 睾賷乇 氐丨賷丨",
			integer: "爻噩賱 毓丿丿 胤亘賷賷毓賷 氐丨賷丨",
			url: "賱賷爻 毓賳賵丕賳丕 氐丨賷丨丕. 丕賱亘丿丕賷丞 丕賱氐丨賷丨丞 ('http://' 兀賵 'https://')",
			nodefined : " 賱賷爻 賲丨丿丿!",
			novalue : " 賯賷賲丞 丕賱乇噩賵毓 賲胤賱賵亘丞!",
			customarray : "賷噩亘 毓賱賶 丕賱丿丕賱丞 丕賱卮禺氐賷丞 兀賳 鬲賳鬲噩 噩丿賵賱丕",
			customfcheck : "丕賱丿丕賱丞 丕賱卮禺氐賷丞 賲胤賱賵亘丞 賮賷 丨丕賱丞 丕賱鬲丨賯賯 丕賱卮禺氐賷"
		}
	},
	view : {
		caption: "乇兀賷鬲 丕賱鬲爻噩賷賱丕鬲",
		bClose: "睾賱賯"
	},
	del : {
		caption: "丨匕賮",
		msg: "丨匕賮 丕賱鬲爻噩賷賱丕鬲 丕賱賲禺鬲丕乇丞 ?",
		bSubmit: "丨匕賮",
		bCancel: "廿賱睾丕亍"
	},
	nav : {
		edittext: " ",
		edittitle: "鬲睾賷賷乇 丕賱鬲爻噩賷賱 丕賱賲禺鬲丕乇",
		addtext:" ",
		addtitle: "廿囟丕賮丞 鬲爻噩賷賱",
		deltext: " ",
		deltitle: "丨匕賮 丕賱鬲爻噩賷賱 丕賱賲禺鬲丕乇",
		searchtext: " ",
		searchtitle: "亘丨孬 毓賳 鬲爻噩賷賱",
		refreshtext: "",
		refreshtitle: "鬲丨丿賷孬 丕賱噩丿賵賱",
		alertcap: "鬲丨匕賷乇",
		alerttext: "賷乇噩賶 廿禺鬲賷丕乇 丕賱爻胤乇",
		viewtext: "",
		viewtitle: "廿馗賴丕乇 丕賱爻胤乇 丕賱賲禺鬲丕乇"
	},
	col : {
		caption: "廿馗賴丕乇/廿禺賮丕亍 丕賱兀毓賲丿丞",
		bSubmit: "鬲孬亘賷孬",
		bCancel: "廿賱睾丕亍"
	},
	errors : {
		errcap : "禺胤兀",
		nourl : "賱丕 賷賵噩丿 毓賳賵丕賳 賲丨丿丿",
		norecords: "賱丕 賷賵噩丿 鬲爻噩賷賱 賱賱賲毓丕賱噩丞",
		model : "毓丿丿 丕賱毓賳丕賵賷賳 (colNames) <> 毓丿丿 丕賱鬲爻噩賷賱丕鬲 (colModel)!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"丕賱兀丨丿", "丕賱廿孬賳賷賳", "丕賱孬賱丕孬丕亍", "丕賱兀乇亘毓丕亍", "丕賱禺賲賷爻", "丕賱噩賲毓丞", "丕賱爻亘鬲",
				"丕賱兀丨丿", "丕賱廿孬賳賷賳", "丕賱孬賱丕孬丕亍", "丕賱兀乇亘毓丕亍", "丕賱禺賲賷爻", "丕賱噩賲毓丞", "丕賱爻亘鬲"
			],
			monthNames: [
				"噩丕賳賮賷", "賮賷賮乇賷", "賲丕乇爻", "兀賮乇賷賱", "賲丕賷", "噩賵丕賳", "噩賵賷賱賷丞", "兀賵鬲", "爻亘鬲賲亘乇", "兀賰鬲賵亘乇", "賳賵賮賲亘乇", "丿賷爻賲亘乇",
				"噩丕賳賮賷", "賮賷賮乇賷", "賲丕乇爻", "兀賮乇賷賱", "賲丕賷", "噩賵丕賳", "噩賵賷賱賷丞", "兀賵鬲", "爻亘鬲賲亘乇", "兀賰鬲賵亘乇", "賳賵賮賲亘乇", "丿賷爻賲亘乇"
			],
			AmPm : ["氐亘丕丨丕","賲爻丕亍丕","氐亘丕丨丕","賲爻丕亍丕"],
			S: function (j) {return j == 1 ? 'er' : 'e';},
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
