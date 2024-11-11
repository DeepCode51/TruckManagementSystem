;(function($){
/**
 * jqGrid Czech Translation
 * Pavel Jirak pavel.jirak@jipas.cz
 * doplnil Thomas Wagner xwagne01@stud.fit.vutbr.cz
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Zobrazeno {0} - {1} z {2} z谩znam暖",
	    emptyrecords: "Nenalezeny 啪谩dn茅 z谩znamy",
		loadtext: "Na膷铆t谩m...",
		pgtext : "Strana {0} z {1}"
	},
	search : {
		caption: "Vyhled谩v谩m...",
		Find: "Hledat",
		Reset: "Reset",
	    odata: [{ oper:'eq', text:"rovno"},{ oper:'ne', text:"nerovno"},{ oper:'lt', text:"men拧铆"},{ oper:'le', text:"men拧铆 nebo rovno"},{ oper:'gt', text:"v臎t拧铆"},{ oper:'ge', text:"v臎t拧铆 nebo rovno"},{ oper:'bw', text:"za膷铆n谩 s"},{ oper:'bn', text:"neza膷铆n谩 s"},{ oper:'in', text:"je v"},{ oper:'ni', text:"nen铆 v"},{ oper:'ew', text:"kon膷铆 s"},{ oper:'en', text:"nekon膷铆 s"},{ oper:'cn', text:"obsahuje"},{ oper:'nc', text:"neobsahuje"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "v拧ech" },	{ op: "OR",  text: "n臎kter茅ho z" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "P艡idat z谩znam",
		editCaption: "Editace z谩znamu",
		bSubmit: "Ulo啪it",
		bCancel: "Storno",
		bClose: "Zav艡铆t",
		saveData: "Data byla zm臎n臎na! Ulo啪it zm臎ny?",
		bYes : "Ano",
		bNo : "Ne",
		bExit : "Zru拧it",
		msg: {
		    required:"Pole je vy啪adov谩no",
		    number:"Pros铆m, vlo啪te validn铆 膷铆slo",
		    minValue:"hodnota mus铆 b媒t v臎t拧铆 ne啪 nebo rovn谩 ",
		    maxValue:"hodnota mus铆 b媒t men拧铆 ne啪 nebo rovn谩 ",
		    email: "nen铆 validn铆 e-mail",
		    integer: "Pros铆m, vlo啪te cel茅 膷铆slo",
			date: "Pros铆m, vlo啪te validn铆 datum",
			url: "nen铆 platnou URL. Vy啪adov谩n prefix ('http://' or 'https://')",
			nodefined : " nen铆 definov谩n!",
			novalue : " je vy啪adov谩na n谩vratov谩 hodnota!",
			customarray : "Custom function m臎l谩 vr谩tit pole!",
			customfcheck : "Custom function by m臎la b媒t p艡铆tomna v p艡铆pad臎 custom checking!"
		}
	},
	view : {
	    caption: "Zobrazit z谩znam",
	    bClose: "Zav艡铆t"
	},
	del : {
		caption: "Smazat",
		msg: "Smazat vybran媒(茅) z谩znam(y)?",
		bSubmit: "Smazat",
		bCancel: "Storno"
	},
	nav : {
		edittext: " ",
		edittitle: "Editovat vybran媒 艡谩dek",
		addtext:" ",
		addtitle: "P艡idat nov媒 艡谩dek",
		deltext: " ",
		deltitle: "Smazat vybran媒 z谩znam ",
		searchtext: " ",
		searchtitle: "Naj铆t z谩znamy",
		refreshtext: "",
		refreshtitle: "Obnovit tabulku",
		alertcap: "Varov谩n铆",
		alerttext: "Pros铆m, vyberte 艡谩dek",
		viewtext: "",
		viewtitle: "Zobrazit vybran媒 艡谩dek"
	},
	col : {
		caption: "Zobrazit/Skr媒t sloupce",
		bSubmit: "Ulo啪it",
		bCancel: "Storno"	
	},
	errors : {
		errcap : "Chyba",
		nourl : "Nen铆 nastavena url",
		norecords: "沤谩dn茅 z谩znamy ke zpracov谩n铆",
		model : "D茅lka colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Ne", "Po", "脷t", "St", "膶t", "P谩", "So",
				"Ned臎le", "Pond臎l铆", "脷ter媒", "St艡eda", "膶tvrtek", "P谩tek", "Sobota"
			],
			monthNames: [
				"Led", "脷no", "B艡e", "Dub", "Kv臎", "膶er", "膶vc", "Srp", "Z谩艡", "艠铆j", "Lis", "Pro",
				"Leden", "脷nor", "B艡ezen", "Duben", "Kv臎ten", "膶erven", "膶ervenec", "Srpen", "Z谩艡铆", "艠铆jen", "Listopad", "Prosinec"
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
