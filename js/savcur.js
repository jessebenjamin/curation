$(document).ready(function (){

	//Setup Content Height ----------------------------------------------------------------------------------------------------

  var height = $( document ).height();
  var width = $( document ).width();

  $('#background').children('canvas').css("height", height);
  $('#background').children('canvas').css("width", width);

  $(window).load(function() {
  	var heightwhite =  $('#background').children('canvas').height();
    var heightnum = heightwhite * .0175;
    var heighttotal = heightwhite - heightnum;

  	$('#whitespace').css('height', heighttotal);
  });

  //Setup Login & Friends ---------------------------------------------------------------------------------------------------

  var firstname;
  var lastname;

  $('.login').click(function(){
  	var crow = prompt("x = U+00D6	Ö	0303 0226	&Ouml;	Ö 	&#214;	Ö 	LATIN CAPITAL LETTER O WITH DIAERESIS", "x+1 = ?");
  	if (crow == "U+00D7	×	0303 0227	&times;	× 	&#215;	× 	MULTIPLICATION SIGN") {
      var ran = Math.round(Math.random(0, 9));
      var dom = new Array("HWk2TH", "Hkqk34", "UgZsT7", "JrD9cp", "hjdKDb", "ycnc2k", "GGC8s2", "JZQRpx", "gXCgnF", "jwr3ha");
      var random = dom[ran];
      alert("Commodore! Drop a line at hi@jesse-benjamin.com for a neat print. Code:" + " " + random);
      history.go(0);
  	} else {
  		alert("Login failed.");
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
      $('#nav').css("font-size", "400%");
      $('#nav').html("&dagger;");      
    };
  });

  //Get Names ---------------------------------------------------------------------------------------------------------------


  namey.get({count: 1,  with_surname: false,  frequency: "all",  callback: function(data) {
      console.log(data);
      $('.firstname').html(data);

      firstname = data;
    }
  });

  namey.get({count: 1,  type: "surname",  frequency: "all",  callback: function(data) {
      console.log(data);
      $('.lastname').html(data);
      $('title').append(data);

      lastname = data;
    }
  });

  //Get Flickr ---------------------------------------------------------------------------------------------------------------

var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON( flickerAPI, {
    tags: lastname,
    tagmode: "any",
    format: "json"
    })
  .done(function( data ) {
  $.each( data.items, function( i, item ) {
  $( "<img>" ).attr( "src", item.media.m ).appendTo( "#flickr" );
    if ( i === 3 ) {
        return false;
      }
    });
    });

 $.getJSON( flickerAPI, {
    tags: firstname,
    tagmode: "any",
    format: "json"
    })
  .done(function( data ) {
  $.each( data.items, function( i, item ) {
  $( "<img>" ).attr( "src", item.media.m ).appendTo( "#portrait" );
    if ( i === 0 ) {
        return false;
      }
    });
    });


  	//Get NASA ----------------------------------------------------------------------------------------------------------------

var exoAPI = "http://exoapi.com/api/skyhook/planets/all";
var r;


  $.getJSON( exoAPI, { 
    tagmode: "any",
    format: "json"
    })
  .done(function(data) {
    console.log(data);
    r = Math.round(Math.random(0, 300));
    $('.val1').text(data.response.results[r]._id);
    $('.val2').text(data.response.results[r].disc_year);
    $('.val3').text(data.response.results[r].mass);
    $('.val4').text(data.response.results[r].star.constellation);
    $('.val5').text(data.response.results[r].star.type);
    $('.val6').text(data.response.results[r].star.name_hd);
    });


var startY = 300;
    $(window).scroll(function(){
    checkY();
    });
    function checkY(){
    if( $(window).scrollTop() > startY ){
        $('.left').slideDown();
        $('.right').slideDown();
    }else{
        $('.left').slideUp();
        $('.right').slideUp();
    }
  } 
checkY();

});