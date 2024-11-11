;(function($){
/**
 * jqGrid Montenegrian Translation
 * Bild Studio info@bild-studio.net
 * http://www.bild-studio.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Pregled {0} - {1} od {2}",
		emptyrecords: "Ne postoji nijedan zapis",
		loadtext: "U膷itivanje...",
		pgtext : "Strana {0} od {1}"
	},
	search : {
		caption: "Tra啪enje...",
		Find: "Tra啪i",
		Reset: "Resetuj",
		odata: [{ oper:'eq', text:"jednako"},{ oper:'ne', text:"nije jednako"},{ oper:'lt', text:"manje"},{ oper:'le', text:"manje ili jednako"},{ oper:'gt', text:"ve膰e"},{ oper:'ge', text:"ve膰e ili jednako"},{ oper:'bw', text:"po膷inje sa"},{ oper:'bn', text:"ne po膷inje sa"},{ oper:'in', text:"je u"},{ oper:'ni', text:"nije u"},{ oper:'ew', text:"zavr拧ava sa"},{ oper:'en', text:"ne zavr拧ava sa"},{ oper:'cn', text:"sadr啪i"},{ oper:'nc', text:"ne sadr啪i"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "sva" },	{ op: "OR",  text: "bilo koje" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Dodaj zapis",
		editCaption: "Izmjeni zapis",
		bSubmit: "Po拧alji",
		bCancel: "Odustani",
		bClose: "Zatvori",
		saveData: "Podatak je izmjenjen! Sa膷uvaj izmjene?",
		bYes : "Da",
		bNo : "Ne",
		bExit : "Odustani",
		msg: {
			required:"Polje je obavezno",
			number:"Unesite ispravan broj",
			minValue:"vrijednost mora biti ve膰a od ili jednaka sa ",
			maxValue:"vrijednost mora biti manja ili jednaka sa",
			email: "nije ispravna email adresa, nije valjda da ne umije拧 ukucati mail!?",
			integer: "Ne zajebaji se unesi cjelobrojnu vrijednost ",
			date: "Unesite ispravan datum",
			url: "nije ispravan URL. Potreban je prefiks ('http://' or 'https://')",
			nodefined : " nije definisan!",
			novalue : " zahtjevana je povratna vrijednost!",
			customarray : "Prilago膽ena funkcija treba da vrati niz!",
			customfcheck : "Prilago膽ena funkcija treba da bude prisutana u slu膷aju prilago膽ene provjere!"
			
		}
	},
	view : {
		caption: "Pogledaj zapis",
		bClose: "Zatvori"
	},
	del : {
		caption: "Izbrisi",
		msg: "Izbrisi izabran(e) zapise(e)?",
		bSubmit: "Izbri拧i",
		bCancel: "Odbaci"
	},
	nav : {
		edittext: "",
		edittitle: "Izmjeni izabrani red",
		addtext:"",
		addtitle: "Dodaj novi red",
		deltext: "",
		deltitle: "Izbri拧i izabran red",
		searchtext: "",
		searchtitle: "Na膽i zapise",
		refreshtext: "",
		refreshtitle: "Ponovo u膷itaj podatke",
		alertcap: "Upozorenje",
		alerttext: "Izaberite red",
		viewtext: "",
		viewtitle: "Pogledaj izabrani red"
	},
	col : {
		caption: "Izaberi kolone",
		bSubmit: "OK",
		bCancel: "Odbaci"
	},
	errors : {
		errcap : "Gre拧ka",
		nourl : "Nije postavljen URL",
		norecords: "Nema zapisa za obradu",
		model : "Du啪ina modela colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Ned", "Pon", "Uto", "Sre", "膶et", "Pet", "Sub",
				"Nedelja", "Ponedeljak", "Utorak", "Srijeda", "膶etvrtak", "Petak", "Subota"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec",
				"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
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
