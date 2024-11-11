;(function($){
/**
 * jqGrid Danish Translation
 * Kaare Rasmussen kjs@jasonic.dk
 * http://jasonic.dk/blog 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
	defaults : {
		recordtext: "View {0} - {1} of {2}",
	    emptyrecords: "No records to view",
		loadtext: "Loading...",
		pgtext : "Page {0} of {1}"
	},
	search : {
	    caption: "S酶g...",
	    Find: "Find",
	    Reset: "Nulstil",
	    odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
	    addCaption: "Tilf酶j",
	    editCaption: "Ret",
	    bSubmit: "Send",
	    bCancel: "Annuller",
		bClose: "Luk",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
	    msg: {
	        required:"Felt er n酶dvendigt",
	        number:"Indtast venligst et validt tal",
	        minValue:"v忙rdi skal v忙re st酶rre end eller lig med",
	        maxValue:"v忙rdi skal v忙re mindre end eller lig med",
	        email: "er ikke en valid email",
	        integer: "Indtast venligst et validt heltalt",
			date: "Indtast venligst en valid datov忙rdi",
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
	    caption: "Slet",
	    msg: "Slet valgte r忙kke(r)?",
	    bSubmit: "Slet",
	    bCancel: "Annuller"
	},
	nav : {
		edittext: " ",
	    edittitle: "Rediger valgte r忙kke",
		addtext:" ",
	    addtitle: "Tilf酶j ny r忙kke",
	    deltext: " ",
	    deltitle: "Slet valgte r忙kke",
	    searchtext: " ",
	    searchtitle: "Find poster",
	    refreshtext: "",
	    refreshtitle: "Indl忙s igen",
	    alertcap: "Advarsel",
	    alerttext: "V忙lg venligst r忙kke",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
	    caption: "Vis/skjul kolonner",
	    bSubmit: "Send",
	    bCancel: "Annuller"
	},
	errors : {
		errcap : "Fejl",
		nourl : "Ingel url valgt",
		norecords: "Ingen poster at behandle",
	    model : "colNames og colModel har ikke samme l忙ngde!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"S酶n", "Man", "Tirs", "Ons", "Tors", "Fre", "L酶r",
				"S酶ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L酶rdag"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
				"Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
			],
			AmPm : ["","","",""],
			S: function (j) {return '.'},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "j/n/Y",
	            LongDate: "l d. F Y",
	            FullDateTime: "l d F Y G:i:s",
	            MonthDay: "d. F",
	            ShortTime: "G:i",
	            LongTime: "G:i:s",
	            SortableDateTime: "Y-m-d\\TH:i:s",
	            UniversalSortableDateTime: "Y-m-d H:i:sO",
	            YearMonth: "F Y"
	        },
	        reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
	    target: '',
	    checkbox : {disabled:true},
		idName : 'id'
	}
};
// DK
})(jQuery);
