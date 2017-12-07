var currentLang = "en";
var voices = new Map(); //map countrycode -> name of corresponding voice
var translations = {};

function getSheet(url) {
    $.getJSON(url, function (data) {

        var entry = data.feed.entry;

        // $( ".translationshead" ).append( "<th>Nederlands</th>"); 
        var i = 0;

        $(entry).each(function (index, element) {
            if (voices.size == 0) {
                //console.log(this.content.$t.split(", "));

                this.content.$t.split(", ").forEach(function (el) {
                    voices.set((el.split(": "))[0], (el.split(": "))[1]);
                    $("#languages").append("<option class='language' value=" + (el.split(": "))[0] + ">" + (el.split(": "))[0] + "</option>");

                    //            $("#languages").append("<li><a href='' onclick='return false;'>"+(el.split(": "))[0])+"</a></li>";


                    // $( ".translationshead" ).append( "<th>"+(el.split(": "))[1]+"</th>");
                    //console.log((el.split(": "))[1]);
                });
            }
            else {


                var title = this.title.$t.replace(/[^ -~]+/g, "").replace(/(\r\n|\n|\r)/gm, "").trim();
                var s = '<div class="song amplitude-song-container amplitude-play-pause amplitude-active-song-container say"  data-say="' + title + '">';
                s += '<div class="song-meta-data">';
                s += '<span class="song-title">' + title + '</span>';
                s += '</div>';
                s += '<div class="play-now">';
                s += '<a class="btn btn-sm btn-black"><span class="normal-state" >Play</span><span class="play-state">Stop</span></a>';
                s += '</div>';
                translations[title] = {};
                //console.log(this.content.$t.split(", "));
                this.content.$t.split(", ").forEach(function (el) {
                    translations[title][(el.split(": "))[0]] = (el.split(": "))[1];
                    // text = (el.split(": "))[1];
                    // s += '<td data-title="'+voices.get((el.split(": "))[0])+'"> <a href="#"><i class="say fa fa-play-circle" style="font-size:48px;color:black" lang="'+(el.split(": "))[0]+'" data-text="'+text+'" ></i><audio class= rel="noreferrer" hidden></audio></a></td>';
                });

                $("#translations").append(s);
                // console.log(this.title.$t);
                // console.log(this.content.$t);
            }
        });
    }).fail(function () {
        console.log("Loading spreadsheet failed.");
    });

}

window.onload = function (e) {
    $('#body').css('paddingBottom', ($('#footer').height()+50)+'px');
    var $rows = $('#translations').find('.song');
    $('#search').keyup(function () {
        $rows = $('#translations').find('.song');
        var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
            reg = RegExp(val, 'i'),
            text;

        $rows.show().filter(function () {
            text = $(this).find(".song-meta-data").text().replace(/\s+/g, ' ');
            return !reg.test(text);
        }).hide();
    });
}

function querySt(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");

    for (i = 0; i < gy.length; i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}

// ID of the Google Spreadsheet
var defaultSheetID = "1gsdlh7rZmZeC2rYBS16b3g1Z5kJ1AkiZRT9_sTJgBz4"

var spreadsheetID = defaultSheetID;

var query = "undefined";
var queries = ["sheet", "key"];
var i = 0;
queries.every(function (q) {
    query = decodeURIComponent(querySt(q));
    if (query != "undefined") {
        spreadsheetID = query;
        return false;
    }
    else {
        return true;
    }
});

// Make sure it is public or set to Anyone with link can view 
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

getSheet(url);


// var voicelist = responsiveVoice.getVoices();
// voicelist.forEach(function(voice){
//   console.log('case "en": row[i] = "'+voice.name+'"; break;');
// })

// $(function(){
// $('a.say').on('click', function(e){
//   console.log("clicked");
// })
// });

var mouseflag = 0; //flag 0 if not click and drag, otherwise 1
var playflag = 0; //flag 0 if responsiveVoice is not playing
document.addEventListener("mousedown", function () {
    mouseflag = 0;
}, false);
document.addEventListener("mousemove", function () {
    mouseflag = 1;
}, false);
document.addEventListener('mouseup', function (e) {
    //responsiveVoice elements
    if (playflag === 1) {
        e.preventDefault();
        let targetElement = e.target || event.srcElement;
        if (hasClass(e.target, 'amplitude-playing') || $(targetElement).parents('.amplitude-playing').length) {
            if ($(targetElement).parents('.amplitude-playing').length) { targetElement = $(targetElement).parents('.amplitude-playing'); }
            $(targetElement).removeClass("amplitude-playing");
            $(targetElement).addClass("amplitude-paused");
            responsiveVoice.cancel();
            setTimeout(function () { playflag = 0; }, 100);
        } else if (hasClass(e.target, 'say') || $(targetElement).parents('.say').length) {
            let playingElement = $('.amplitude-playing');
            playingElement.removeClass("amplitude-playing");
            playingElement.addClass("amplitude-paused");
            playflag = 0;
        }
    } if (mouseflag === 0 && playflag === 0) {
        e.preventDefault();
        let targetElement = e.target || event.srcElement;
        if (hasClass(e.target, 'say') || $(targetElement).parents('.say').length) {
            if ($(targetElement).parents('.say').length) { targetElement = $(targetElement).parents('.say'); }
            playflag = 1;
            let text = $(targetElement).attr("data-say");
            let translation = translations[text][currentLang];
            $(targetElement).addClass("amplitude-playing");
            $(targetElement).removeClass("amplitude-paused");
            $('#text-say').val(translation);
            responsiveVoice.speak(translation, voices.get(currentLang), {
                onend: function () {
                    $(targetElement).removeClass("amplitude-playing");
                    $(targetElement).addClass("amplitude-paused");
                    setTimeout(function () { playflag = 0; }, 100);
                }
            });
        }
    }
}, false);

function changeLang($lang) {
    currentLang = $lang;
    console.log(currentLang);
}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
