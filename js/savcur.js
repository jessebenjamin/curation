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

      lastname = data[0];
    }
  });

  //Get Flickr


var wint = "wint";
var garland = "portrait";

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
    $('.val2').text(data.response.results[r].mass);
    $('title').text(data.response.results[r].habitable_class);
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