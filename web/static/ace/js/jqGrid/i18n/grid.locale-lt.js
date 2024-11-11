;(function($){
/**
 * jqGrid Lithuanian Translation
 * aur1mas aur1mas@devnet.lt
 * http://aur1mas.devnet.lt
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Per啪i奴rima {0} - {1} i拧 {2}",
		emptyrecords: "漠ra拧懦 n臈ra",
		loadtext: "Kraunama...",
		pgtext : "Puslapis {0} i拧 {1}"
	},
	search : {
		caption: "Paie拧ka...",
		Find: "Ie拧koti",
		Reset: "Atstatyti",
		odata: [{ oper:'eq', text:"lygu"},{ oper:'ne', text:"nelygu"},{ oper:'lt', text:"ma啪iau"},{ oper:'le', text:"ma啪iau arba lygu"},{ oper:'gt', text:"daugiau"},{ oper:'ge', text:"daugiau arba lygu"},{ oper:'bw', text:"prasideda"},{ oper:'bn', text:"neprasideda"},{ oper:'in', text:"reik拧m臈 yra"},{ oper:'ni', text:"reik拧m臈s n臈ra"},{ oper:'ew', text:"baigiasi"},{ oper:'en', text:"nesibaigia"},{ oper:'cn', text:"yra sudarytas"},{ oper:'nc', text:"n臈ra sudarytas"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "visi" },	{ op: "OR",  text: "bet kuris" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Sukurti 寞ra拧膮",
		editCaption: "Redaguoti 寞ra拧膮",
		bSubmit: "I拧saugoti",
		bCancel: "At拧aukti",
		bClose: "U啪daryti",
		saveData: "Duomenys buvo pakeisti! I拧saugoti pakeitimus?",
		bYes : "Taip",
		bNo : "Ne",
		bExit : "At拧aukti",
		msg: {
			required:"Privalomas laukas",
			number:"漠veskite tinkam膮 numer寞",
			minValue:"reik拧m臈 turi b奴ti didesn臈 arba lygi ",
			maxValue:"reik拧m臈 turi b奴ti ma啪esn臈 arba lygi",
			email: "neteisingas el. pa拧to adresas",
			integer: "漠veskite teising膮 sveik膮j寞 skai膷i懦",
			date: "漠veskite teising膮 dat膮",
			url: "blogas adresas. Nepamir拧kite prid臈ti ('http://' arba 'https://')",
			nodefined : " n臈ra apibr臈啪ta!",
			novalue : " turi b奴ti gra啪inama kokia nors reik拧m臈!",
			customarray : "Custom f-ja turi gr膮啪inti masyv膮!",
			customfcheck : "Custom f-ja t奴r臈t懦 b奴ti sukurta, prie拧 bandant j膮 naudoti!"
			
		}
	},
	view : {
		caption: "Per啪i奴r臈ti 寞ra拧us",
		bClose: "U啪daryti"
	},
	del : {
		caption: "I拧trinti",
		msg: "I拧trinti pa啪ym臈tus 寞ra拧us(-膮)?",
		bSubmit: "I拧trinti",
		bCancel: "At拧aukti"
	},
	nav : {
		edittext: "",
		edittitle: "Redaguoti pa啪ym臈t膮 eilut臋",
		addtext:"",
		addtitle: "Prid臈ti nauj膮 eilut臋",
		deltext: "",
		deltitle: "I拧trinti pa啪ym臈t膮 eilut臋",
		searchtext: "",
		searchtitle: "Rasti 寞ra拧us",
		refreshtext: "",
		refreshtitle: "Perkrauti lentel臋",
		alertcap: "漠sp臈jimas",
		alerttext: "Pasirinkite eilut臋",
		viewtext: "",
		viewtitle: "Per啪i奴r臈ti pasirinkt膮 eilut臋"
	},
	col : {
		caption: "Pasirinkti stulpelius",
		bSubmit: "Gerai",
		bCancel: "At拧aukti"
	},
	errors : {
		errcap : "Klaida",
		nourl : "Url reik拧m臈 turi b奴ti perduota",
		norecords: "N臈ra 寞ra拧懦, kuriuos b奴t懦 galima apdoroti",
		model : "colNames skai膷ius <> colModel skai膷iui!"
	},
	formatter : {
		integer : {thousandsSeparator: "", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "艩e拧",
				"Sekmadienis", "Pirmadienis", "Antradienis", "Tre膷iadienis", "Ketvirtadienis", "Penktadienis", "艩e拧tadienis"
			],
			monthNames: [
				"Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugj", "Rugs", "Spa", "Lap", "Gru",
				"Sausis", "Vasaris", "Kovas", "Balandis", "Gegu啪臈", "Bir啪elis", "Liepa", "Rugpj奴tis", "Rugs臈jis", "Spalis", "Lapkritis", "Gruodis"
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
