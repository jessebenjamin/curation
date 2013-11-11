$(document).ready(function (){

  var height = $( document ).height();
  var width = $( document ).width();

  $('#background').children('canvas').css("height", height);
  $('#background').children('canvas').css("width", width);

  $('#whitespace').css('height', height);
  $('#whitespace').css('height', width);

  namey.get({
  	count: 1,
    with_surname: false,
    frequency: "rare",
    callback: function(data) {
      console.log(data);
      $('.firstname').text(data);
    }
  });

  namey.get({
  	count: 1,
    type: "surname",
    frequency: "rare",
    callback: function(data) {
      console.log(data);
      $('.lastname').text(data);
    }
  });

/*var firstnameJSON = "http://namey.muffinlabs.com/name.json?with_surname=false&frequency=rare";
var lastnameJSON = "http://namey.muffinlabs.com/name.json";

$.getJSON(firstnameJSON, function(data){ 
  console.log(data);
});

$.getJSON(lastnameJSON, {
  count: "1",
  type: "surname",
  frequency: "rare",
  format: "json"
}).done(function(data){ 
  console.log(data.);
});*/


var wint = "wint";
var garland = "portrait";

var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON( flickerAPI, {
    tags: wint,
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
    tags: garland,
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