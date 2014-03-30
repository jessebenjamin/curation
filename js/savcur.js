$(document).ready(function (){

  //Setup Content Height & Background ----------------------------------------------------------------------------------------

  if ($(window).width() <= 780) {

    $('body').css("font-size", "16px");

    var imgCount = Math.floor(Math.random()*21);
    var backImg = "background-"+imgCount+".png"; 

    $('#background').css("background", "url(./images/" + backImg + ") top left");

    var height = $( document).height();
    var width = $( window ).width();

    $('#background').css("min-height", height);
    $('#background').css("min-width", width);
    $('#background').css("position", "fixed");

    $(window).load(function() {

      var heightnum = height * .025;
      var heighttotal = Math.floor(height - heightnum);

      $('#whitespace').css('min-height', heighttotal);

    })

  } else {

  $(window).load(function() {

    //$('#background').append("<canvas data-processing-sources='./processing/abstract_if/abstract_if.pde'></canvas>");
    //$('#background canvas').css('min-height', heightback).css('max-width', width);

    var height = $( document ).height();
    var width = $( window ).width();

    var heightnum = height * .025;
    var heighttotal = Math.floor(height - heightnum);
    var heightback = Math.floor(height + heightnum); 


    $('#background').css({"min-height": heightback, "width": width});
    $('#background').append("<canvas id='back'></canvas>");
    $('#back').css({'min-width': width});

    $('#landing').css({'min-width': width/2});

    //'max-height': heightback,
    
    var sourceList = ['./processing/abstract_if/abstract_if.pde'];
    var canvasSource = document.querySelector("#back");
    Processing.loadSketchFromSources(canvasSource, sourceList);

    //var canvas = document.getElementById("back");

    //cq(canvas).resizePixel(0.5, 0.25);

    $('#whitespace').css('height', heighttotal);
  })
  };

  //Get Names ---------------------------------------------------------------------------------------------------------------


  var firstname;
  var lastname;

  namey.get({
      count: 1,  
      with_surname: false,  
      frequency: "all",  
      callback: function(data) {

      if (data[0] === "" || data[0] === "undefined") {
        data[0] = "Mohammed";
      }

      $('.firstname').text(data[0]);

      firstname = data[0];

      $(".person").prepend(firstname + " ");
      $("title").append(firstname + " ");
      }
  });

  namey.get({
    count: 1,  
    type: "surname",  
    frequency: "all",  
    callback: function(data) {

      if (data[0] === "" || data[0] === "undefined") {
        data[0] = "Doe";
      }

      lastname = data[0];

      $(".person").append(lastname);
      $("title").append(lastname);
      }
  });

  //Setup Login & Friends ---------------------------------------------------------------------------------------------------

  $('.login').click(function(){

    var crow = prompt("x = &Ouml;", "x+1 = ?");

    if (crow == "&times;") {

      var ran = Math.round(Math.random()*9);
      var dom = new Array("HWk2TH", "Hkqk34", "UgZsT7", "JrD9cp", "hjdKDb", "ycnc2k", "GGC8s2", "JZQRpx", "gXCgnF", "jwr3ha");
      var random = dom[ran];
      alert("Commodore! Drop a line at hi@jesse-benjamin.com for a neat print. Code:" + " " + random);
      location.reload();

    } else {

      alert("Confirmation failed.");
      $('#whitespace').css("font-size", "2500%");
      $('#whitespace').css("text-align", "center");
      $('#whitespace').css("padding-top", "3%");
      $('#whitespace').css("background-color", "transparent");
      $('#whitespace').css("color", "#fff");
      $('#whitespace').html("✞");
    
      setTimeout(function (){
      location.reload();  
      }, 750);
    };
  });

  $('.friend').click(function(){
    
    var join = prompt("You cannot add users without an account. Please provide your full name:");
    
    if (join == "") {
    
      alert("Please provide your full name.");
    
    } else {
    
        alert(".get=?Critical error: no match found in account database!_?=null");
        $('#whitespace').css("font-size", "2500%");
        $('#whitespace').css("text-align", "center");
        $('#whitespace').css("padding-top", "3%");
        $('#whitespace').css("background-color", "transparent");
        $('#whitespace').css("color", "#fff");
        $('#whitespace').html("✞");
    
      setTimeout(function (){
      location.reload();  
      }, 750);
    };
  });

  $('.logout').click(function(){
    
      alert(".get=?naught|nil?-¿");

      window.location = 'index.html';  

  });

  $('#landing .person').click(function(){
    
      window.location = 'tour.html';  

  });

  var emo = Math.floor(Math.random() * 38);
  var lemo = Math.floor(Math.random() * 38);
  var bemo = Math.floor(Math.random() * 38);
  var cemo = Math.floor(Math.random() * 38);
  var ticons = new Array("⇞", "❤", "✈", "★", "☀", "▣", "℞", "♩", "♪", "♫", "☨", "✞", "✵", "✪", "✯", "☻", "☺", "✆", "☹", "☁", "☃", "❁", "☘", "☥", "☮", "☯", "☯", "☤", "⚓", "⚠", "⚡", "♿", "☢", "☠", "✌", "✎", "✒", "☿", "♆");
  var emoticon = ticons[emo];
  var lemoticon = ticons[lemo];
  var bemoticon = ticons[bemo];
  var cemoticon = ticons[cemo];

      $('.emoticon').html(lemoticon);
      $('.bemoticon').html(bemoticon);
      $('.cemoticon').html(cemoticon);

  //Get Flickr ---------------------------------------------------------------------------------------------------------------


  setTimeout(function (){

      var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var href;
      var title;
      var taggs;

      $.getJSON( flickrAPI, {
            tags: lastname,
            tagmode: "any",
            format: "json"
            }).done(function( data ) {
      $.each( data.items, function( i, item ) {

          taggs = item.tags;

          if (taggs === "") {
            taggs = "thereisnoonehere";
          }

          $( "<img>" ).attr( "src", item.media.m ).attr( "alt", "?=life=null" ).wrap("<a></a>").parent().attr("title", taggs).attr("href", item.media.m).attr("data-lightbox",  "gallery").wrap("<div class='flickr_img'></div>").parent().appendTo( "#flickr" );
          $('.val1').html(item.published);

          //$("#flickr a");

          if ( i === 5 ) {
            return false;
          }

        });

      });

     $.getJSON( flickrAPI, {
          tags: firstname,
          tagmode: "any",
          format: "json"
          }).done(function( data ) {
      $.each( data.items, function( i, item ) {

        $( "<img>" ).attr( "src", item.media.m ).appendTo( ".portrait" );

        if ( i === 0 ) {
            return false;
        }

        })
      });

     $.getJSON( flickrAPI, {
          tags: "friend",
          tagmode: "any",
          format: "json"
          }).done(function( data ) {
      $.each( data.items, function( i, item ) {

        $( "<img>" ).attr( "src", item.media.m ).attr( "alt", "?=friend=null" ).wrap("<a></a>").parent().attr("href", "http://www.savage-curation.com/tour.html").wrap("<div class='friends_img'></div>").parent().appendTo( "#friends" );

        if ( i === 40 ) {
            return false;
        }

        })
      });


  }, 750);

//Get TEXT ----------------------------------------------------------------------------------------------------------------

  var friendcount = Math.round(Math.random()*1000);

  $('.friendcount').html(friendcount + " " + "Friends");

  var gibberish = "http://randomtext.me/api/gibberish/p-1/20-40/";

  $.getJSON( gibberish, {
    tagmode: "any",
    format: "json"
  }).done(function(data){
    console.log(data);
    $(".quote").append(data.text_out + cemoticon);
  });

  var musing = "http://hipsterjesus.com/api/";

  var ponder = Math.floor(Math.random() * 3);

  $.getJSON( musing, {
    paras: ponder,
    type: "hipster-centric",
    html: "true",
    tagmode: "any",
    format: "json"
  }).done(function(data){
    $(".musing").append(data.text);
  });

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
    }).done(function(data) {

    //console.log(data);
    r = Math.round(Math.random()*300);

    //$('.val1').append(data.response.results[r]._id);
    $('.val2').append(data.response.results[r].disc_year);
    $('.val3').append(data.response.results[r].mass);
    $('.val4').append(data.response.results[r].star.constellation);
    $('.val5').append(data.response.results[r].star.type);

    if (data.response.results[r].star.type === "") {
           $('.val5').html("Unknown");
        }

    if (data.response.results[r].disc_year === "") {
           $('.val2').html("0 Hours");
        }

  });


//Arrows ----------------------------------------------------------------------------------------------------------------


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
    }; 
    
    checkY();

});
