;(function($){
/**
 * jqGrid Turkish Translation
 * Erhan G眉ndo臒an (erhan@trposta.net)
 * http://blog.zakkum.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0}-{1} listeleniyor. Toplam:{2}",
	    emptyrecords: "Kay谋t bulunamad谋",
		loadtext: "Y眉kleniyor...",
		pgtext : "{0}/{1}. Sayfa"
	},
	search : {
	    caption: "Arama...",
	    Find: "Bul",
	    Reset: "Temizle",	    
	    odata: [{ oper:'eq', text:"e艧it"},{ oper:'ne', text:"e艧it de臒il"},{ oper:'lt', text:"daha az"},{ oper:'le', text:"daha az veya e艧it"},{ oper:'gt', text:"daha fazla"},{ oper:'ge', text:"daha fazla veya e艧it"},{ oper:'bw', text:"ile ba艧layan"},{ oper:'bn', text:"ile ba艧lamayan"},{ oper:'in', text:"i莽inde"},{ oper:'ni', text:"i莽inde de臒il"},{ oper:'ew', text:"ile biten"},{ oper:'en', text:"ile bitmeyen"},{ oper:'cn', text:"i莽eren"},{ oper:'nc', text:"i莽ermeyen"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "VE", text: "t眉m" },	{ op: "VEYA",  text: "herhangi" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
	    addCaption: "Kay谋t Ekle",
	    editCaption: "Kay谋t D眉zenle",
	    bSubmit: "G枚nder",
	    bCancel: "陌ptal",
		bClose: "Kapat",
		saveData: "Veriler de臒i艧ti! Kay谋t edilsin mi?",
		bYes : "Evet",
		bNo : "Hay谋t",
		bExit : "陌ptal",
	    msg: {
	        required:"Alan gerekli",
	        number:"L眉tfen bir numara giriniz",
	        minValue:"girilen de臒er daha b眉y眉k ya da buna e艧it olmal谋d谋r",
	        maxValue:"girilen de臒er daha k眉莽眉k ya da buna e艧it olmal谋d谋r",
	        email: "ge莽erli bir e-posta adresi de臒ildir",
	        integer: "L眉tfen bir tamsay谋 giriniz",
			url: "Ge莽erli bir URL de臒il. ('http://' or 'https://') 枚n eki gerekli.",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "Kay谋t G枚r眉nt眉le",
	    bClose: "Kapat"
	},
	del : {
	    caption: "Sil",
	    msg: "Se莽ilen kay谋tlar silinsin mi?",
	    bSubmit: "Sil",
	    bCancel: "陌ptal"
	},
	nav : {
		edittext: " ",
	    edittitle: "Se莽ili sat谋r谋 d眉zenle",
		addtext:" ",
	    addtitle: "Yeni sat谋r ekle",
	    deltext: " ",
	    deltitle: "Se莽ili sat谋r谋 sil",
	    searchtext: " ",
	    searchtitle: "Kay谋tlar谋 bul",
	    refreshtext: "",
	    refreshtitle: "Tabloyu yenile",
	    alertcap: "Uyar谋",
	    alerttext: "L眉tfen bir sat谋r se莽iniz",
		viewtext: "",
		viewtitle: "Se莽ilen sat谋r谋 g枚r眉nt眉le"
	},
	col : {
	    caption: "S眉tunlar谋 g枚ster/gizle",
	    bSubmit: "G枚nder",
	    bCancel: "陌ptal"	
	},
	errors : {
		errcap : "Hata",
		nourl : "Bir url yap谋land谋r谋lmam谋艧",
		norecords: "陌艧lem yap谋lacak bir kay谋t yok",
	    model : "colNames uzunlu臒u <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Paz", "Pts", "Sal", "脟ar", "Per", "Cum", "Cts",
				"Pazar", "Pazartesi", "Sal谋", "脟ar艧amba", "Per艧embe", "Cuma", "Cumartesi"
			],
			monthNames: [
				"Oca", "艦ub", "Mar", "Nis", "May", "Haz", "Tem", "A臒u", "Eyl", "Eki", "Kas", "Ara",
				"Ocak", "艦ubat", "Mart", "Nisan", "May谋s", "Haziran", "Temmuz", "A臒ustos", "Eyl眉l", "Ekim", "Kas谋m", "Aral谋k"
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
