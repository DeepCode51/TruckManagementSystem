;(function($){
/**
 * jqGrid Hebrew Translation
 * Shuki Shukrun shukrun.shuki@gmail.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "诪爪讬讙 {0} - {1} 诪转讜讱 {2}",
		emptyrecords: "讗讬谉 专砖讜诪讜转 诇讛爪讬讙",
		loadtext: "讟讜注谉...",
		pgtext : "讚祝 {0} 诪转讜讱 {1}"
	},
	search : {
		caption: "诪讞驻砖...",
		Find: "讞驻砖",
		Reset: "讛转讞诇",
		odata: [{ oper:'eq', text:"砖讜讜讛"},{ oper:'ne', text:"诇讗 砖讜讜讛"},{ oper:'lt', text:"拽讟谉"},{ oper:'le', text:"拽讟谉 讗讜 砖讜讜讛"},{ oper:'gt', text:"讙讚讜诇"},{ oper:'ge', text:"讙讚讜诇 讗讜 砖讜讜讛"},{ oper:'bw', text:"诪转讞讬诇 讘"},{ oper:'bn', text:"诇讗 诪转讞讬诇 讘"},{ oper:'in', text:"谞诪爪讗 讘"},{ oper:'ni', text:"诇讗 谞诪爪讗 讘"},{ oper:'ew', text:"诪住转讬讬诐 讘"},{ oper:'en', text:"诇讗 诪住转讬讬诐 讘"},{ oper:'cn', text:"诪讻讬诇"},{ oper:'nc', text:"诇讗 诪讻讬诇"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "讛讻诇" },	{ op: "OR",  text: "讗讞讚 诪" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "讛讜住祝 专砖讜诪讛",
		editCaption: "注专讜讱 专砖讜诪讛",
		bSubmit: "砖诇讞",
		bCancel: "讘讟诇",
		bClose: "住讙讜专",
		saveData: "谞转讜谞讬诐 讛砖转谞讜! 诇砖诪讜专?",
		bYes : "讻谉",
		bNo : "诇讗",
		bExit : "讘讟诇",
		msg: {
			required:"砖讚讛 讞讜讘讛",
			number:"讗谞讗, 讛讻谞住 诪住驻专 转拽讬谉",
			minValue:"注专讱 爪专讬讱 诇讛讬讜转 讙讚讜诇 讗讜 砖讜讜讛 诇 ",
			maxValue:"注专讱 爪专讬讱 诇讛讬讜转 拽讟谉 讗讜 砖讜讜讛 诇 ",
			email: "讛讬讗 诇讗 讻转讜讘转 讗讬讬诪诇 转拽讬谞讛",
			integer: "讗谞讗, 讛讻谞住 诪住驻专 砖诇诐",
			date: "讗谞讗, 讛讻谞住 转讗专讬讱 转拽讬谉",
			url: "讛讻转讜讘转 讗讬谞讛 转拽讬谞讛. 讚专讜砖讛 转讞讬诇讬转 ('http://' 讗讜 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
		caption: "讛爪讙 专砖讜诪讛",
		bClose: "住讙讜专"
	},
	del : {
		caption: "诪讞拽",
		msg: "讛讗诐 诇诪讞讜拽 讗转 讛专砖讜诪讛/讜转 讛诪住讜诪谞讜转?",
		bSubmit: "诪讞拽",
		bCancel: "讘讟诇"
	},
	nav : {
		edittext: "",
		edittitle: "注专讜讱 砖讜专讛 诪住讜诪谞转",
		addtext:"",
		addtitle: "讛讜住祝 砖讜专讛 讞讚砖讛",
		deltext: "",
		deltitle: "诪讞拽 砖讜专讛 诪住讜诪谞转",
		searchtext: "",
		searchtitle: "讞驻砖 专砖讜诪讜转",
		refreshtext: "",
		refreshtitle: "讟注谉 讙专讬讚 诪讞讚砖",
		alertcap: "讗讝讛专讛",
		alerttext: "讗谞讗, 讘讞专 砖讜专讛",
		viewtext: "",
		viewtitle: "讛爪讙 砖讜专讛 诪住讜诪谞转"
	},
	col : {
		caption: "讛爪讙/讛住转专 注诪讜讚讜转",
		bSubmit: "砖诇讞",
		bCancel: "讘讟诇"
	},
	errors : {
		errcap : "砖讙讬讗讛",
		nourl : "诇讗 讛讜讙讚专讛 讻转讜讘转 url",
		norecords: "讗讬谉 专砖讜诪讜转 诇注讘讚",
		model : "讗讜专讱 砖诇 colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"讗", "讘", "讙", "讚", "讛", "讜", "砖",
				"专讗砖讜谉", "砖谞讬", "砖诇讬砖讬", "专讘讬注讬", "讞诪讬砖讬", "砖讬砖讬", "砖讘转"
			],
			monthNames: [
				"讬谞讜", "驻讘专", "诪专抓", "讗驻专", "诪讗讬", "讬讜谞", "讬讜诇", "讗讜讙", "住驻讟", "讗讜拽", "谞讜讘", "讚爪诪",
				"讬谞讜讗专", "驻讘专讜讗专", "诪专抓", "讗驻专讬诇", "诪讗讬", "讬讜谞讬", "讬讜诇讬", "讗讜讙讜住讟", "住驻讟诪讘专", "讗讜拽讟讜讘专", "谞讜讘诪讘专", "讚爪诪讘专"
			],
			AmPm : ["诇驻谞讬 讛爪讛专讬诐","讗讞专 讛爪讛专讬诐","诇驻谞讬 讛爪讛专讬诐","讗讞专 讛爪讛专讬诐"],
			S: function (j) {return j < 11 || j > 13 ? ['', '', '', ''][Math.min((j - 1) % 10, 3)] : ''},
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
