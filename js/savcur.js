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
      $('#whitespace').css("font-size", "2000%");
      $('#whitespace').css("text-align", "center");
      $('#whitespace').css("padding-top", "50px");
      $('#whitespace').html("&dagger;");       
    };
  });

  //Get Names ---------------------------------------------------------------------------------------------------------------


  var firstname;
  var lastname;
  var nameLoaded = 0;
  var nameAdded = false;

  namey.get({count: 1,  with_surname: false,  frequency: "all",  callback: function(data) {
      console.log(data);
      $('.firstname').text(data[0]);

      nameLoaded++;
      firstname = data[0];

      $(".person").prepend(firstname + " ");
      $("title").append(firstname + " ");
    }
  });

  namey.get({count: 1,  type: "surname",  frequency: "all",  callback: function(data) {
      console.log(data);

      nameLoaded++;
      lastname = data[0];

      $(".person").append(lastname);
      $("title").append(lastname);
    }
  });




  
      var emo = Math.floor(Math.random() * 54);
      var lemo = Math.floor(Math.random() * 54);
      var bemo = Math.floor(Math.random() * 54);
      var cemo = Math.floor(Math.random() * 54);
      var ticons = new Array("⇞", "❤", "✈", "★", "☀", "▣", "℞", "♩", "♪", "♫", "☨", "✞", "✵", "✪", "✯", "☻", "☺", "✆", "☹", "☁", "☃", "❁", "☘", "☥", "☮", "☯", "☯", "☤", "⚓", "⚠", "⚡", "♿", "☢", "☠", "✌", "✎", "✒", "☿", "♆", "&#9800;", "&#9801;", "&#9802;", "&#9803;", "&#9804;", "&#9805;", "&#9806;", "&#9807;", "&#9809;", "&#9810;", "&#9811;", "&#9818;", "&#9819;", "&#9820;", "&#9821;", "&#9822;", "&#9823;");
      var emoticon = ticons[emo];
      var lemoticon = ticons[lemo];
      var bemoticon = ticons[bemo];
      var cemoticon = ticons[cemo];

      $('.emoticon').html(lemoticon);
      $('.bemoticon').html(bemoticon);
      $('.cemoticon').html(cemoticon);

  //Get World Bank ------------------------------------------------------------------------------------------------------------

  var wb = "http://search.worldbank.org/api/v2/projects?format=json&source=IBRD&kw=N";

  $.getJSON(wb, {
    format: "json"
  }).done(function(data){
    console.log(data);
    //$('#text').append(data.response.docs[5].snippet);
  });

  //Get Flickr ---------------------------------------------------------------------------------------------------------------


  setTimeout(function (){

  var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var href;
  var aWrap;
  var divWrap;

  $.getJSON( flickrAPI, {
    tags: lastname,
    tagmode: "any",
    format: "json"
    })
  .done(function( data ) {
  $.each( data.items, function( i, item ) {

  $( "<img>" ).attr( "src", item.media.m ).appendTo( "#flickr" );

    href = item.media.m;
    console.log(href);

    if ( i === 5 ) {
        return false;
      }

    });

    //$("#flickr img").attr("rel", "lightbox[GAL]").attr("title", firstname+" "+emoticon).wrap("<div class='flickr_img'><a></a></div>");
    //$("#flickr img").attr("rel", "lightbox[GAL]").attr("title", firstname+" "+emoticon).wrap("<div class='flickr_img'><a></a></div>").attr("href", href);

    $("#flickr img").wrap("<a></a>");
    $("#flickr a").attr("rel", "lightbox[GAL]").attr("title", firstname+" "+emoticon).attr("href", href).wrap("<div class='flickr_img'></div>");

    });

 $.getJSON( flickrAPI, {
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
    });


var startY = 300;
    $(window).scroll(function(){
    checkY();
    });
    function checkY(){
    if( $(window).scrollTop() > startY ){
        $('.left').fadeIn("slow");
        $('.right').fadeIn("slow");

    $('.left').click(function() {
        window.scrollTo(0, 0);
    });
    
    $('.right').click(function() {
        window.scrollTo(0, 0);
    });
    }else{
        $('.left').fadeOut("slow");
        $('.right').fadeOut("slow");
    }
  } 
checkY();

});