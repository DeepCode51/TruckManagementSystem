;(function($){
/**
 * jqGrid Polish Translation
 * 艁ukasz Schab lukasz@freetree.pl
 * http://FreeTree.pl
 *
 * Updated names, abbreviations, currency and date/time formats for Polish norms (also corresponding with CLDR v21.0.1 --> http://cldr.unicode.org/index) 
 * Tomasz P臋czek tpeczek@gmail.com
 * http://tpeczek.blogspot.com; http://tpeczek.codeplex.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Poka偶 {0} - {1} z {2}",
		emptyrecords: "Brak rekord贸w do pokazania",
		loadtext: "艁adowanie...",
		pgtext : "Strona {0} z {1}"
	},
	search : {
		caption: "Wyszukiwanie...",
		Find: "Szukaj",
		Reset: "Czy艣膰",
		odata: [{ oper:'eq', text:"dok艂adnie"},{ oper:'ne', text:"r贸偶ne od"},{ oper:'lt', text:"mniejsze od"},{ oper:'le', text:"mniejsze lub r贸wne"},{ oper:'gt', text:"wi臋ksze od"},{ oper:'ge', text:"wi臋ksze lub r贸wne"},{ oper:'bw', text:"zaczyna si臋 od"},{ oper:'bn', text:"nie zaczyna si臋 od"},{ oper:'in', text:"jest w"},{ oper:'ni', text:"nie jest w"},{ oper:'ew', text:"ko艅czy si臋 na"},{ oper:'en', text:"nie ko艅czy si臋 na"},{ oper:'cn', text:"zawiera"},{ oper:'nc', text:"nie zawiera"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "oraz" },	{ op: "OR",  text: "lub" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Dodaj rekord",
		editCaption: "Edytuj rekord",
		bSubmit: "Zapisz",
		bCancel: "Anuluj",
		bClose: "Zamknij",
		saveData: "Dane zosta艂y zmienione! Zapisa膰 zmiany?",
		bYes: "Tak",
		bNo: "Nie",
		bExit: "Anuluj",
		msg: {
			required: "Pole jest wymagane",
			number: "Prosz臋 wpisa膰 poprawn膮 liczb臋",
			minValue: "warto艣膰 musi by膰 wi臋ksza lub r贸wna od",
			maxValue: "warto艣膰 musi by膰 mniejsza lub r贸wna od",
			email: "nie jest poprawnym adresem e-mail",
			integer: "Prosz臋 wpisa膰 poprawn膮 liczb臋",
			date: "Prosz臋 podaj poprawn膮 dat臋",
			url: "jest niew艂a艣ciwym adresem URL. Pami臋taj o prefiksie ('http://' lub 'https://')",
			nodefined: " niezdefiniowane!",
			novalue: " wymagana jest warto艣膰 zwracana!",
			customarray: "Funkcja niestandardowa powinna zwraca膰 tablic臋!",
			customfcheck: "Funkcja niestandardowa powinna by膰 obecna w przypadku niestandardowego sprawdzania!"
		}
	},
	view : {
		caption: "Poka偶 rekord",
		bClose: "Zamknij"
	},
	del : {
		caption: "Usu艅",
		msg: "Czy usun膮膰 wybrany rekord(y)?",
		bSubmit: "Usu艅",
		bCancel: "Anuluj"
	},
	nav : {
		edittext: "",
		edittitle: "Edytuj wybrany wiersz",
		addtext: "",
		addtitle: "Dodaj nowy wiersz",
		deltext: "",
		deltitle: "Usu艅 wybrany wiersz",
		searchtext: "",
		searchtitle: "Wyszukaj rekord",
		refreshtext: "",
		refreshtitle: "Prze艂aduj",
		alertcap: "Uwaga",
		alerttext: "Prosz臋 wybra膰 wiersz",
		viewtext: "",
		viewtitle: "Poka偶 wybrany wiersz"
	},
	col : {
		caption: "Poka偶/Ukryj kolumny",
		bSubmit: "Zatwierd藕",
		bCancel: "Anuluj"
	},
	errors : {
		errcap: "B艂膮d",
		nourl: "Brak adresu url",
		norecords: "Brak danych",
		model : "D艂ugo艣膰 colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" z艂", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"niedz.", "pon.", "wt.", "艣r.", "czw.", "pt.", "sob.",
				"niedziela", "poniedzia艂ek", "wtorek", "艣roda", "czwartek", "pi膮tek", "sobota"
			],
			monthNames: [
				"sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa藕", "lis", "gru",
				"stycze艅", "luty", "marzec", "kwiecie艅", "maj", "czerwiec", "lipiec", "sierpie艅", "wrzesie艅", "pa藕dziernik", "listopad", "grudzie艅"
				],
			AmPm : ["","","",""],
			S: function (j) {return '';},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long: "Y-m-d H:i:s",
				ISO8601Short: "Y-m-d",
				ShortDate: "d.m.y",
				LongDate: "l, j F Y",
				FullDateTime: "l, j F Y H:i:s",
				MonthDay: "j F",
				ShortTime: "H:i",
				LongTime: "H:i:s",
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
});
})(jQuery);
