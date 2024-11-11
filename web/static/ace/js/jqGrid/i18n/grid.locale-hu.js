;(function($){
/**
 * jqGrid Hungarian Translation
 * 艕rszigety 脕d谩m udx6bs@freemail.hu
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/

$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Oldal {0} - {1} / {2}",
		emptyrecords: "Nincs tal谩lat",
		loadtext: "Bet枚lt茅s...",
		pgtext : "Oldal {0} / {1}"
	},
	search : {
		caption: "Keres茅s...",
		Find: "Keres",
		Reset: "Alap茅rtelmezett",
		odata: [{ oper:'eq', text:"egyenl艖"},{ oper:'ne', text:"nem egyenl艖"},{ oper:'lt', text:"kevesebb"},{ oper:'le', text:"kevesebb vagy egyenl艖"},{ oper:'gt', text:"nagyobb"},{ oper:'ge', text:"nagyobb vagy egyenl艖"},{ oper:'bw', text:"ezzel kezd艖dik"},{ oper:'bn', text:"nem ezzel kezd艖dik"},{ oper:'in', text:"tartalmaz"},{ oper:'ni', text:"nem tartalmaz"},{ oper:'ew', text:"v茅gz艖dik"},{ oper:'en', text:"nem v茅gz艖dik"},{ oper:'cn', text:"tartalmaz"},{ oper:'nc', text:"nem tartalmaz"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "脷j t茅tel",
		editCaption: "T茅tel szerkeszt茅se",
		bSubmit: "Ment茅s",
		bCancel: "M茅gse",
		bClose: "Bez谩r谩s",
		saveData: "A t茅tel megv谩ltozott! T茅tel ment茅se?",
		bYes : "Igen",
		bNo : "Nem",
		bExit : "M茅gse",
		msg: {
			required:"K枚telez艖 mez艖",
			number:"K茅rj眉k, adjon meg egy helyes sz谩mot",
			minValue:"Nagyobb vagy egyenl艖nek kell lenni mint ",
			maxValue:"Kisebb vagy egyenl艖nek kell lennie mint",
			email: "hib谩s emailc铆m",
			integer: "K茅rj眉k adjon meg egy helyes eg茅sz sz谩mot",
			date: "K茅rj眉k adjon meg egy helyes d谩tumot",
			url: "nem helyes c铆m. El艖tag k枚telez艖 ('http://' vagy 'https://')",
			nodefined : " nem defini谩lt!",
			novalue : " visszat茅r茅si 茅rt茅k k枚telez艖!!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "T茅tel megtekint茅se",
		bClose: "Bez谩r谩s"
	},
	del : {
		caption: "T枚rl茅s",
		msg: "Kiv谩laztott t茅tel(ek) t枚rl茅se?",
		bSubmit: "T枚rl茅s",
		bCancel: "M茅gse"
	},
	nav : {
		edittext: "",
		edittitle: "T茅tel szerkeszt茅se",
		addtext:"",
		addtitle: "脷j t茅tel hozz谩ad谩sa",
		deltext: "",
		deltitle: "T茅tel t枚rl茅se",
		searchtext: "",
		searchtitle: "Keres茅s",
		refreshtext: "",
		refreshtitle: "Friss铆t茅s",
		alertcap: "Figyelmeztet茅s",
		alerttext: "K茅rem v谩lasszon t茅telt.",
		viewtext: "",
		viewtitle: "T茅tel megtekint茅se"
	},
	col : {
		caption: "Oszlopok kiv谩laszt谩sa",
		bSubmit: "Ok",
		bCancel: "M茅gse"
	},
	errors : {
		errcap : "Hiba",
		nourl : "Nincs URL be谩ll铆tva",
		norecords: "Nincs feldolgoz谩sra v谩r贸 t茅tel",
		model : "colNames 茅s colModel hossza nem egyenl艖!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Va", "H茅", "Ke", "Sze", "Cs眉", "P茅", "Szo",
				"Vas谩rnap", "H茅tf艖", "Kedd", "Szerda", "Cs眉t枚rt枚k", "P茅ntek", "Szombat"
			],
			monthNames: [
				"Jan", "Feb", "M谩r", "脕pr", "M谩j", "J煤n", "J煤l", "Aug", "Szep", "Okt", "Nov", "Dec",
				"Janu谩r", "Febru谩r", "M谩rcius", "脕prili", "M谩jus", "J煤nius", "J煤lius", "Augusztus", "Szeptember", "Okt贸ber", "November", "December"
			],
			AmPm : ["de","du","DE","DU"],
			S: function (j) {return '.-ik';},
			srcformat: 'Y-m-d',
			newformat: 'Y/m/d',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "Y/j/n",
				LongDate: "Y. F h贸 d., l",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "a g:i",
				LongTime: "a g:i:s",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "Y, F"
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
