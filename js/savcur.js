$(document).ready(function (){

	//Setup Content Height ----------------------------------------------------------------------------------------------------

  var height = $( window ).height();
  var width = $( window ).width();

  $('#background').children('canvas').css("height", height);
  $('#background').children('canvas').css("width", width);

  $(window).load(function() {
  	var heightwhite =  $('#background').children('canvas').height();
    var heightnum = heightwhite * .0175;
    var heighttotal = heightwhite - heightnum;

  	$('#whitespace').css('height', heighttotal);
  });

  //Setup Login & Friends ---------------------------------------------------------------------------------------------------

  $('.login').click(function(){
  	var crow = prompt("x = &Ouml;", "x+1 = ?");
  	if (crow == "&times;") {
      var ran = Math.round(Math.random()*9);
      var dom = new Array("HWk2TH", "Hkqk34", "UgZsT7", "JrD9cp", "hjdKDb", "ycnc2k", "GGC8s2", "JZQRpx", "gXCgnF", "jwr3ha");
      var random = dom[ran];
      alert("Commodore! Drop a line at hi@jesse-benjamin.com for a neat print. Code:" + " " + random);
      history.go(0);
  	} else {
  		alert("Confirmation failed.");
  		history.go(0);
  	};
  });

  $('.friend').click(function(){
    var join = prompt("You cannot add users without an account. Please provide your full name:");
    if (join == "") {
      alert("Please provide your full name.");
    } else {
      alert(".get=?Critical error: no match found in account database!_?=null");
      history.go(0);
      $('.lastname').css("font-size", "400%");
      $('.firstname').html(" ");
      $('.lastname').html("&dagger;");       
    };
  });

  //Get Names ---------------------------------------------------------------------------------------------------------------


  var firstname;
  var lastname;
  var wikiname;


  namey.get({count: 1,  with_surname: false,  frequency: "all",  callback: function(data) {
      console.log(data);
      $('.firstname').html(data[0]);
      $('title').append(data[0]+" ");

      firstname = data[0];

/*      wikiname = firstname.toString();
      var wikisearch = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiname + "&format=json&callback=spellcheck";

      $.getJSON(wikisearch, {
        count:1,
        format: "json"
      }).done(function(data){
          console.log(data[0]);
      });

      console.log(wikisearch);*/
    }
  });

  namey.get({count: 1,  type: "surname",  frequency: "all",  callback: function(data) {
      console.log(data);
      var emo = Math.floor(Math.random() * 54);
      var lemo = Math.floor(Math.random() * 54);
      var bemo = Math.floor(Math.random() * 54);
      var cemo = Math.floor(Math.random() * 54);
      var ticons = new Array("⇞", "❤", "✈", "★", "☀", "▣", "℞", "♩", "♪", "♫", "☨", "✞", "✵", "✪", "✯", "☻", "☺", "✆", "☹", "☁", "☃", "❁", "☘", "☥", "☮", "☯", "☯", "☤", "⚓", "⚠", "⚡", "♿", "☢", "☠", "✌", "✎", "✒", "☿", "♆", "&#9800;", "&#9801;", "&#9802;", "&#9803;", "&#9804;", "&#9805;", "&#9806;", "&#9807;", "&#9809;", "&#9810;", "&#9811;", "&#9818;", "&#9819;", "&#9820;", "&#9821;", "&#9822;", "&#9823;")
      var emoticon = ticons[emo];
      var lemoticon = ticons[lemo];
      var bemoticon = ticons[bemo];
      var cemoticon = ticons[cemo];

      $('.emoticon').html(lemoticon);
      $('.bemoticon').html(bemoticon);
      $('.cemoticon').html(cemoticon);

      $('.lastname').html(data[0] + " " + emoticon);
      $('title').append(data[0]);

      lastname = data[0];
    }
  });

  //Get NYT ------------------------------------------------------------------------------------------------------------------

  var nyt = "http://api.nytimes.com/svc/search/v2/articlesearch.json?&q=kari&api-key=372a6a22f4fe050bba6eb0aad278c28a:3:68487947";

  $.getJSON(nyt, {
    format: "json"
  }).done(function(data){
    console.log(data.response.docs[5].snippet);
    $('#text').append(data.response.docs[5].snippet);
  });

  //Get Obama   --------------------------------------------------------------------------------------------------------------

  var bho = "https://api.whitehouse.gov/v1/petitions.json?limit=1&offset=0";

  $.getJSON(bho, {
    format: "json"
    }).done( function(data) {
    console.log(data.results[0].title);
  });

  //Get Flickr ---------------------------------------------------------------------------------------------------------------


  setTimeout(function (){

  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON( flickerAPI, {
    tags: lastname,
    tagmode: "any",
    format: "json"
    })
  .done(function( data ) {
  $.each( data.items, function( i, item ) {
  $( "<img>" ).attr( "src", item.media.m ).appendTo( "#flickr" );
    if ( i === 5 ) {
        return false;
      }
    });
    $("#flickr img").wrap("<div class='flickr_img'></div>");
    });

 $.getJSON( flickerAPI, {
    tags: firstname,
    tagmode: "any",
    format: "json"
    })
  .done(function( data ) {
  $.each( data.items, function( i, item ) {
  $( "<img>" ).attr( "src", item.media.m ).appendTo( ".portrait" );
    if ( i === 0 ) {
        return false;
      }
    });
    });

  }, 750);


  	//Get NASA ----------------------------------------------------------------------------------------------------------------

var lon = (Math.random() * (-180 - 180) + 180).toFixed(3) * 1;
var lat = (Math.random() * (-180 - 180) + 180).toFixed(3) * 1;
var ron = Math.round(Math.random()*1);
var rin = Math.round(Math.random()*1);
var dom = new Array("N", "S");
var dim = new Array("E", "W");
var dor = dom[ron];
var dir = dim[rin];

$('.longlat').append(lon+" "+dor+" "+"&times;"+" ");
$('.longlat').append(lat+" "+dir);

var exoAPI = "http://exoapi.com/api/skyhook/planets/all";
var r;


  $.getJSON( exoAPI, { 
    tagmode: "any",
    format: "json"
    })
  .done(function(data) {
    console.log(data);
    r = Math.round(Math.random()*300);
    $('.val1').append(data.response.results[r]._id);
    $('.val2').append(data.response.results[r].disc_year);
    $('.val3').append(data.response.results[r].mass);
    $('.val4').append(data.response.results[r].star.constellation);
    $('.val5').append(data.response.results[r].star.type);

    // "&middot;" + " " + 
    });


var startY = 300;
    $(window).scroll(function(){
    checkY();
    });
    function checkY(){
    if( $(window).scrollTop() > startY ){
        $('.left').slideDown();
        $('.right').slideDown();

    $('.left').click(function() {
        window.scrollTo(0, 0);
    });
    
    $('.right').click(function() {
        window.scrollTo(0, 0);
    });
    }else{
        $('.left').slideUp();
        $('.right').slideUp();
    }
  } 
checkY();

});