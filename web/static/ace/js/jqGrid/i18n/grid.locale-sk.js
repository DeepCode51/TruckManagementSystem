;(function($){
/**
 * jqGrid Slovak Translation
 * Milan Cibulka
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Zobrazen媒ch {0} - {1} z {2} z谩znamov",
	    emptyrecords: "Neboli n谩jden茅 啪iadne z谩znamy",
		loadtext: "Na膷铆t谩m...",
		pgtext : "Strana {0} z {1}"
	},
	search : {
		caption: "Vyh木ad谩vam...",
		Find: "H木ada钮",
		Reset: "Reset",
	    odata: [{ oper:'eq', text:"rovn谩 sa"},{ oper:'ne', text:"nerovn谩 sa"},{ oper:'lt', text:"men拧ie"},{ oper:'le', text:"men拧ie alebo rovnaj煤ce sa"},{ oper:'gt', text:"v盲膷拧ie"},{ oper:'ge', text:"v盲膷拧ie alebo rovnaj煤ce sa"},{ oper:'bw', text:"za膷铆na s"},{ oper:'bn', text:"neza膷铆na s"},{ oper:'in', text:"je v"},{ oper:'ni', text:"nie je v"},{ oper:'ew', text:"kon膷铆 s"},{ oper:'en', text:"nekon膷铆 s"},{ oper:'cn', text:"obahuje"},{ oper:'nc', text:"neobsahuje"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "v拧etk媒ch" },	{ op: "OR",  text: "niektor茅ho z" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Prida钮 z谩znam",
		editCaption: "Edit谩cia z谩znamov",
		bSubmit: "Ulo啪i钮",
		bCancel: "Storno",
		bClose: "Zavrie钮",
		saveData: "脷daje boli zmenen茅! Ulo啪i钮 zmeny?",
		bYes : "Ano",
		bNo : "Nie",
		bExit : "Zru拧i钮",
		msg: {
		    required:"Pole je po啪adovan茅",
		    number:"Pros铆m, vlo啪te val铆dne 膷铆slo",
		    minValue:"hodnota mus铆 b媒钮 v盲膷拧ia ako alebo rovn谩 ",
		    maxValue:"hodnota mus铆 b媒钮 men拧ia ako alebo rovn谩 ",
		    email: "nie je val铆dny e-mail",
		    integer: "Pros铆m, vlo啪te cel茅 膷铆slo",
			date: "Pros铆m, vlo啪te val铆dny d谩tum",
			url: "nie je platnou URL. Po啪adovan媒 prefix ('http://' alebo 'https://')",
			nodefined : " nie je definovan媒!",
			novalue : " je vy啪adovan谩 n谩vratov谩 hodnota!",
			customarray : "Custom function mala vr谩ti钮 pole!",
			customfcheck : "Custom function by mala by钮 pr铆tomn谩 v pr铆pade custom checking!"
		}
	},
	view : {
	    caption: "Zobrazi钮 z谩znam",
	    bClose: "Zavrie钮"
	},
	del : {
		caption: "Zmaza钮",
		msg: "Zmaza钮 vybran媒(茅) z谩znam(y)?",
		bSubmit: "Zmaza钮",
		bCancel: "Storno"
	},
	nav : {
		edittext: " ",
		edittitle: "Editova钮 vybran媒 riadok",
		addtext:" ",
		addtitle: "Prida钮 nov媒 riadek",
		deltext: " ",
		deltitle: "Zmaza钮 vybran媒 z谩znam ",
		searchtext: " ",
		searchtitle: "N谩js钮 z谩znamy",
		refreshtext: "",
		refreshtitle: "Obnovi钮 tabu木ku",
		alertcap: "Varovanie",
		alerttext: "Pros铆m, vyberte riadok",
		viewtext: "",
		viewtitle: "Zobrazi钮 vybran媒 riadok"
	},
	col : {
		caption: "Zobrazit/Skr媒钮 st暮pce",
		bSubmit: "Ulo啪i钮",
		bCancel: "Storno"	
	},
	errors : {
		errcap : "Chyba",
		nourl : "Nie je nastaven谩 url",
		norecords: "沤iadne z谩znamy k spracovaniu",
		model : "D暮啪ka colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Ne", "Po", "Ut", "St", "艩t", "Pi", "So",
				"Nedela", "Pondelok", "Utorok", "Streda", "艩tvrtok", "Piatek", "Sobota"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "M谩j", "J煤n", "J煤l", "Aug", "Sep", "Okt", "Nov", "Dec",
				"Janu谩r", "Febru谩r", "Marec", "Apr铆l", "M谩j", "J煤n", "J煤l", "August", "September", "Okt贸ber", "November", "December"
			],
			AmPm : ["do","od","DO","OD"],
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
