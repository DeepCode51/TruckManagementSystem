;(function($){
/**
 * jqGrid French Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Enregistrements {0} - {1} sur {2}",
		emptyrecords: "Aucun enregistrement 脿 afficher",
		loadtext: "Chargement...",
		pgtext : "Page {0} sur {1}"
	},
	search : {
		caption: "Recherche...",
		Find: "Chercher",
		Reset: "R茅initialiser",
		odata: [{ oper:'eq', text:"茅gal"},{ oper:'ne', text:"diff茅rent"},{ oper:'lt', text:"inf茅rieur"},{ oper:'le', text:"inf茅rieur ou 茅gal"},{ oper:'gt', text:"sup茅rieur"},{ oper:'ge', text:"sup茅rieur ou 茅gal"},{ oper:'bw', text:"commence par"},{ oper:'bn', text:"ne commence pas par"},{ oper:'in', text:"est dans"},{ oper:'ni', text:"n'est pas dans"},{ oper:'ew', text:"finit par"},{ oper:'en', text:"ne finit pas par"},{ oper:'cn', text:"contient"},{ oper:'nc', text:"ne contient pas"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "tous" },	{ op: "OR",  text: "au moins un" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Ajouter",
		editCaption: "Editer",
		bSubmit: "Valider",
		bCancel: "Annuler",
		bClose: "Fermer",
		saveData: "Les donn茅es ont chang茅 ! Enregistrer les modifications ?",
		bYes: "Oui",
		bNo: "Non",
		bExit: "Annuler",
		msg: {
			required: "Champ obligatoire",
			number: "Saisissez un nombre correct",
			minValue: "La valeur doit 锚tre sup茅rieure ou 茅gale 脿",
			maxValue: "La valeur doit 锚tre inf茅rieure ou 茅gale 脿",
			email: "n'est pas un email correct",
			integer: "Saisissez un entier correct",
			url: "n'est pas une adresse correcte. Pr茅fixe requis ('http://' or 'https://')",
			nodefined : " n'est pas d茅fini!",
			novalue : " la valeur de retour est requise!",
			customarray : "Une fonction personnalis茅e devrait retourner un tableau (array)!",
			customfcheck : "Une fonction personnalis茅e devrait 锚tre pr茅sente dans le cas d'une v茅rification personnalis茅e!"
		}
	},
	view : {
		caption: "Voir les enregistrement",
		bClose: "Fermer"
	},
	del : {
		caption: "Supprimer",
		msg: "Supprimer les enregistrements s茅lectionn茅s ?",
		bSubmit: "Supprimer",
		bCancel: "Annuler"
	},
	nav : {
		edittext: " ",
		edittitle: "Editer la ligne s茅lectionn茅e",
		addtext:" ",
		addtitle: "Ajouter une ligne",
		deltext: " ",
		deltitle: "Supprimer la ligne s茅lectionn茅e",
		searchtext: " ",
		searchtitle: "Chercher un enregistrement",
		refreshtext: "",
		refreshtitle: "Recharger le tableau",
		alertcap: "Avertissement",
		alerttext: "Veuillez s茅lectionner une ligne",
		viewtext: "",
		viewtitle: "Afficher la ligne s茅lectionn茅e"
	},
	col : {
		caption: "Afficher/Masquer les colonnes",
		bSubmit: "Valider",
		bCancel: "Annuler"
	},
	errors : {
		errcap : "Erreur",
		nourl : "Aucune adresse n'est param茅tr茅e",
		norecords: "Aucun enregistrement 脿 traiter",
		model : "Nombre de titres (colNames) <> Nombre de donn茅es (colModel)!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam",
				"Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
			],
			monthNames: [
				"Jan", "F茅v", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "D茅c",
				"Janvier", "F茅vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "D茅cembre"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j == 1 ? 'er' : 'e';},
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
