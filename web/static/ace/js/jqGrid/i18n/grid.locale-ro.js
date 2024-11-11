;(function($){
/**
 * jqGrid Romanian Translation
 * Alexandru Emil Lupu contact@alecslupu.ro
 * http://www.alecslupu.ro/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Vizualizare {0} - {1} din {2}",
		emptyrecords: "Nu exist膬 卯nregistr膬ri de vizualizat",
		loadtext: "脦nc膬rcare...",
		pgtext : "Pagina {0} din {1}"
	},
	search : {
		caption: "Caut膬...",
		Find: "Caut膬",
		Reset: "Resetare",
		odata: [{ oper:'eq', text:"egal"},{ oper:'ne', text:"diferit"},{ oper:'lt', text:"mai mic"},{ oper:'le', text:"mai mic sau egal"},{ oper:'gt', text:"mai mare"},{ oper:'ge', text:"mai mare sau egal"},{ oper:'bw', text:"卯ncepe cu"},{ oper:'bn', text:"nu 卯ncepe cu"},{ oper:'in', text:"se g膬se葯te 卯n"},{ oper:'ni', text:"nu se g膬se葯te 卯n"},{ oper:'ew', text:"se termin膬 cu"},{ oper:'en', text:"nu se termin膬 cu"},{ oper:'cn', text:"con葲ine"},{ oper:'nc', text:""},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "toate" },	{ op: "OR",  text: "oricare" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Ad膬ugare 卯nregistrare",
		editCaption: "Modificare 卯nregistrare",
		bSubmit: "Salveaz膬",
		bCancel: "Anulare",
		bClose: "脦nchide",
		saveData: "Informa葲iile au fost modificate! Salva葲i modific膬rile?",
		bYes : "Da",
		bNo : "Nu",
		bExit : "Anulare",
		msg: {
			required:"C芒mpul este obligatoriu",
			number:"V膬 rug膬m introduce葲i un num膬r valid",
			minValue:"valoarea trebuie sa fie mai mare sau egal膬 cu",
			maxValue:"valoarea trebuie sa fie mai mic膬 sau egal膬 cu",
			email: "nu este o adres膬 de e-mail valid膬",
			integer: "V膬 rug膬m introduce葲i un num膬r valid",
			date: "V膬 rug膬m s膬 introduce葲i o dat膬 valid膬",
			url: "Nu este un URL valid. Prefixul  este necesar('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
		caption: "Vizualizare 卯nregistrare",
		bClose: "脦nchidere"
	},
	del : {
		caption: "葮tegere",
		msg: "葮terge葲i 卯nregistrarea (卯nregistr膬rile) selectate?",
		bSubmit: "葮terge",
		bCancel: "Anulare"
	},
	nav : {
		edittext: "",
		edittitle: "Modific膬 r芒ndul selectat",
		addtext:"",
		addtitle: "Adaug膬 r芒nd nou",
		deltext: "",
		deltitle: "葮terge r芒ndul selectat",
		searchtext: "",
		searchtitle: "C膬utare 卯nregistr膬ri",
		refreshtext: "",
		refreshtitle: "Re卯ncarcare Grid",
		alertcap: "Avertisment",
		alerttext: "V膬 rug膬m s膬 selecta葲i un r芒nd",
		viewtext: "",
		viewtitle: "Vizualizeaz膬 r芒ndul selectat"
	},
	col : {
		caption: "Arat膬/Ascunde coloanele",
		bSubmit: "Salveaz膬",
		bCancel: "Anulare"
	},
	errors : {
		errcap : "Eroare",
		nourl : "Niciun url nu este setat",
		norecords: "Nu sunt 卯nregistr膬ri de procesat",
		model : "Lungimea colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S芒m",
				"Duminic膬", "Luni", "Mar葲i", "Miercuri", "Joi", "Vineri", "S芒mb膬t膬"
			],
			monthNames: [
				"Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec",
				"Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
			],
			AmPm : ["am","pm","AM","PM"],
			/*
			 Here is a problem in romanian: 
					M	/	F
			 1st = primul / prima
			 2nd = Al doilea / A doua
			 3rd = Al treilea / A treia 
			 4th = Al patrulea/ A patra
			 5th = Al cincilea / A cincea 
			 6th = Al 葯aselea / A 葯asea
			 7th = Al 葯aptelea / A 葯aptea
			 .... 
			 */
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
