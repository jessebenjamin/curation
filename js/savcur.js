$(document).ready(function (){

	//Setup Content Height

  var height = $( document ).height();
  var width = $( document ).width();

  $('#background').children('canvas').css("height", height);
  $('#background').children('canvas').css("width", width);

  $(window).load(function() {
  	var heightwhite =  $('#background').children('canvas').height();

  	$('#whitespace').css('height', heightwhite);
  });

  //Setup Login & Friends

  $('.login').click(function(){
  	var crow = prompt("i = U+00D6	Ö	0303 0226	&Ouml;	Ö 	&#214;	Ö 	LATIN CAPITAL LETTER O WITH DIAERESIS; i++ = ?");
  	if (crow == "U+00D7	×	0303 0227	&times;	× 	&#215;	× 	MULTIPLICATION SIGN") {
  		alert("Commodore! Drop a line at hi@jesse-benjamin.com for a neat print.");
  	} else {
  		alert("Try harder.");
  		history.go(0);
  	};
  });

/*  $('.friend').click(function(){
  	$('#nogo').css("display", "block");
  });*/


  //Get Names

  var firstname;
  var lastname;

  namey.get({
  	count: 1,
    with_surname: false,
    frequency: "rare",
    callback: function(data) {
      console.log(data);
      $('.firstname').text(data);

      firstname = data[0];
    }
  });

  namey.get({
  	count: 1,
    type: "surname",
    frequency: "rare",
    callback: function(data) {
      console.log(data);
      $('.lastname').text(data);
      $('title').append(data);

      lastname = data[0];
    }
  });

  //Get Flickr

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


  	//Get NASA

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