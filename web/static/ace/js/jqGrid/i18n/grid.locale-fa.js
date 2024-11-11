;(function ($) {
/**
 * jqGrid Persian Translation
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
	$.jgrid = $.jgrid || {};
	$.extend($.jgrid,{
        defaults: {
            recordtext: "賳賲丕亘卮 {0} - {1} 丕夭 {2}",
            emptyrecords: "乇讴賵乇丿蹖 蹖丕賮鬲 賳卮丿",
            loadtext: "亘丕乇诏夭丕乇賷...",
            pgtext: "氐賮丨賴 {0} 丕夭 {1}"
        },
        search: {
            caption: "噩爻鬲噩賵...",
            Find: "賷丕賮鬲賴 賴丕",
            Reset: "丕夭 賳賵",
            odata: [{ oper:'eq', text:"亘乇丕亘乇"},{ oper:'ne', text:"賳丕 亘乇丕亘乇"},{ oper:'lt', text:"亘賴"},{ oper:'le', text:"讴賵趩讴鬲乇"},{ oper:'gt', text:"丕夭"},{ oper:'ge', text:"亘夭乇诏鬲乇"},{ oper:'bw', text:"卮乇賵毓 亘丕"},{ oper:'bn', text:"卮乇賵毓 賳卮賵丿 亘丕"},{ oper:'in', text:"賳亘丕卮丿"},{ oper:'ni', text:"毓囟賵 丕蹖賳 賳亘丕卮丿"},{ oper:'ew', text:"丕鬲賲丕賲 亘丕"},{ oper:'en', text:"鬲賲丕賲 賳卮賵丿 亘丕"},{ oper:'cn', text:"丨丕賵蹖"},{ oper:'nc', text:"賳亘丕卮丿 丨丕賵蹖"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
            groupOps: [{
                op: "AND",
                text: "讴賱"
            },
            {
                op: "OR",
                text: "賲噩賲賵毓"
            }],
			operandTitle : "Click to select search operation.",
			resetTitle : "Reset Search Value"
        },
        edit: {
            addCaption: "丕囟丕賮賴 讴乇丿賳 乇讴賵乇丿",
            editCaption: "賵賷乇丕賷卮 乇讴賵乇丿",
            bSubmit: "孬亘鬲",
            bCancel: "丕賳氐乇丕賮",
            bClose: "亘爻鬲賳",
            saveData: "丿蹖鬲丕 鬲毓蹖蹖乇 讴乇丿! 匕禺蹖乇賴 卮賵丿責",
            bYes: "亘賱賴",
            bNo: "禺蹖乇",
            bExit: "丕賳氐乇丕賮",
            msg: {
                required: "賮賷賱丿賴丕 亘丕賷丿 禺鬲賲丕 倬乇 卮賵賳丿",
                number: "賱胤賮丕 毓丿丿 賵毓鬲亘乇 賵丕乇丿 讴賳賷丿",
                minValue: "賲賯丿丕乇 賵丕乇丿 卮丿賴 亘丕賷丿 亘夭乇诏鬲乇 賷丕 賲爻丕賵賷 亘丕",
                maxValue: "賲賯丿丕乇 賵丕乇丿 卮丿賴 亘丕賷丿 讴賵趩讴鬲乇 賷丕 賲爻丕賵賷",
                email: "倬爻鬲 丕賱讴鬲乇賵賳賷讴 賵丕乇丿 卮丿賴 賲毓鬲亘乇 賳賷爻鬲",
                integer: "賱胤賮丕 賷讴 毓丿丿 氐丨賷丨 賵丕乇丿 讴賳賷丿",
                date: "賱胤賮丕 賷讴 鬲丕乇賷禺 賲毓鬲亘乇 賵丕乇丿 讴賳賷丿",
                url: "丕蹖賳 丌丿乇爻 氐丨蹖丨 賳賲蹖 亘丕卮丿. 倬蹖卮賵賳丿 賳蹖丕夭 丕爻鬲 ('http://' 蹖丕 'https://')",
                nodefined: " 鬲毓乇蹖賮 賳卮丿賴!",
                novalue: " 賲賯丿丕乇 亘乇诏卮鬲蹖 丕噩亘丕乇蹖 丕爻鬲!",
                customarray: "鬲丕亘毓 卮賲丕 亘丕蹖丿 賲賯丿丕乇 丌乇丕蹖賴 丿丕卮鬲賴 亘丕卮丿!",
                customfcheck: "亘乇丕蹖 丿丕卮鬲賳 賲鬲丿 丿賱禺賵丕賴 卮賲丕 亘丕蹖丿 爻胤賵賳 亘丕 趩讴蹖賳诏 丿賱禺賵丕賴 丿丕卮鬲賴 亘丕卮蹖丿!"
            }
        },
        view: {
            caption: "賳賲丕蹖卮 乇讴賵乇丿",
            bClose: "亘爻鬲賳"
        },
        del: {
            caption: "丨匕賮",
            msg: "丕夭 丨匕賮 诏夭賷賳賴 賴丕賷 丕賳鬲禺丕亘 卮丿賴 賲胤賲卅賳 賴爻鬲賷丿責",
            bSubmit: "丨匕賮",
            bCancel: "丕亘胤丕賱"
        },
        nav: {
            edittext: " ",
            edittitle: "賵賷乇丕賷卮 乇丿賷賮 賴丕賷 丕賳鬲禺丕亘 卮丿賴",
            addtext: " ",
            addtitle: "丕賮夭賵丿賳 乇丿賷賮 噩丿賷丿",
            deltext: " ",
            deltitle: "丨匕賮 乇丿亘賮 賴丕賷 丕賳鬲蹖丕亘 卮丿賴",
            searchtext: " ",
            searchtitle: "噩爻鬲噩賵賷 乇丿賷賮",
            refreshtext: "",
            refreshtitle: "亘丕夭賷丕亘賷 賲噩丿丿 氐賮丨賴",
            alertcap: "丕禺胤丕乇",
            alerttext: "賱胤賮丕 賷讴 乇丿賷賮 丕賳鬲禺丕亘 讴賳賷丿",
            viewtext: "",
            viewtitle: "賳賲丕蹖卮 乇讴賵乇丿 賴丕蹖 丕賳鬲禺丕亘 卮丿賴"
        },
        col: {
            caption: "賳賲丕賷卮/毓丿賲 賳賲丕賷卮 爻鬲賵賳",
            bSubmit: "孬亘鬲",
            bCancel: "丕賳氐乇丕賮"
        },
        errors: {
            errcap: "禺胤丕",
            nourl: "賴賷趩 丌丿乇爻賷 鬲賳馗賷賲 賳卮丿賴 丕爻鬲",
            norecords: "賴賷趩 乇讴賵乇丿賷 亘乇丕賷 倬乇丿丕夭卮 賲賵噩賵丿 賳賷爻鬲",
            model: "胤賵賱 賳丕賲 爻鬲賵賳 賴丕 賲丨丕賱賮 爻鬲賵賳 賴丕賷 賲丿賱 賲賷 亘丕卮丿!"
        },
        formatter: {
            integer: {
                thousandsSeparator: " ",
                defaultValue: "0"
            },
            number: {
                decimalSeparator: ".",
                thousandsSeparator: " ",
                decimalPlaces: 2,
                defaultValue: "0.00"
            },
            currency: {
                decimalSeparator: ".",
                thousandsSeparator: " ",
                decimalPlaces: 2,
                prefix: "",
                suffix: "",
                defaultValue: "0"
            },
            date: {
                dayNames: ["賷讴", "丿賵", "爻賴", "趩賴丕乇", "倬賳噩", "噩賲毓", "卮賳亘", "賷讴卮賳亘賴", "丿賵卮賳亘賴", "爻賴 卮賳亘賴", "趩賴丕乇卮賳亘賴", "倬賳噩卮賳亘賴", "噩賲毓賴", "卮賳亘賴"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "跇丕賳賵賷賴", "賮賵乇賷賴", "賲丕乇爻", "丌賵乇賷賱", "賲賴", "跇賵卅賳", "跇賵卅賷賴", "丕賵鬲", "爻倬鬲丕賲亘乇", "丕讴鬲亘乇", "賳賵丕賲亘乇", "December"],
                AmPm: ["亘.馗", "亘.馗", "賯.馗", "賯.馗"],
                S: function (b) {
                    return b < 11 || b > 13 ? ["st", "nd", "rd", "th"][Math.min((b - 1) % 10, 3)] : "th"
                },
                srcformat: "Y-m-d",
                newformat: "d/m/Y",
				parseRe : /[#%\\\/:_;.,\t\s-]/,
                masks: {
                    ISO8601Long: "Y-m-d H:i:s",
                    ISO8601Short: "Y-m-d",
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
                reformatAfterEdit: false
            },
            baseLinkUrl: "",
            showAction: "賳賲丕賷卮",
            target: "",
            checkbox: {
                disabled: true
            },
            idName: "id"
        }
    });
})(jQuery);
