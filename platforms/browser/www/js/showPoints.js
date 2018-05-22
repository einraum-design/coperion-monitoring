$(document).ready(function(){


function showPoints(){

  $('#downstream-links, #upstream-links, #compounding-links, .compounding-arrow, .upstream-arrow, .downstream-arrow').css('display','none');



  $(".other #upstream-link").on('click', function(){
    $("#upstream-links ul li").removeClass('active-auswahl-punkt');
    $(".anlagen-bild").css({'transform':'translate(530px, -120px) scale(2.2)'});
    $("#upstream-links").fadeIn(200);
    $('.auswahl-punkt').removeClass('opacitySize');


    // Diese(r) Button(s) sind aktiv
    $('.compounding-arrow').fadeIn(300).css('right','0px').removeClass('left newPos');

    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.upstream-arrow').css('display','none').removeClass('left newPos');
    $('.downstream-arrow').css('display','none').removeClass('left newPos');

    $('#downstream-links, #compounding-links').fadeOut(200);
  });

  $('#compounding-link, #foerderdruck-link-2').on('click', function(){
    $("#compounding-links ul li").removeClass('active-auswahl-punkt');
    $(".anlagen-bild").css({'transform':'translate(120px, -190px) scale(2.8)'});
    $("#compounding-links a").css({'transform':'scale(.7)'});
    $("#upstream-links").fadeOut(200);
    $('.auswahl-punkt').removeClass('opacitySize');
    $('#compounding-links .auswahl-punkt').css('transform','scale(.8)');


    $("span").removeClass('active-.dot');
    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.compounding-arrow').css('display','none').removeClass('left newPos');

    // Diese(r) Button(s) sind aktiv
    $('.upstream-arrow').fadeIn(300).addClass('left');
    $('.downstream-arrow').fadeIn(300);

    $('#downstream-links').fadeOut(200);
    $('#compounding-links').fadeIn(200);
  });

  $('#downstream-link').on('click', function(){
    $(".anlagen-bild").css({'transform':'translate(-400px, -65px) scale(1.7)'});
    //$('#downstream-links').delay(300).fadeIn(200);
    $("span").removeClass('active-auswahl-punkt');
    $("#downstream-links").fadeIn(200);

    $("#downstream-links ul li").removeClass('active-auswahl-punkt');
    $('#downstream-links .auswahl-punkt').css('transform','scale(1.3)');
    $('.auswahl-punkt').removeClass('opacitySize');

    // Diese(r) Button(s) sind aktiv
    $('.compounding-arrow').fadeIn(300).addClass('left newPos');
    $('#upstream-links, #compounding-links').fadeOut(200);

    // Zwischen der Anlage sliden, dabei aber unnötige Buttons verstecken
    $('.upstream-arrow').css('display','none').removeClass('left');
    $('.downstream-arrow').css('display','none').removeClass('left');
  });

  $('#full-link').on('click', function(){
    $("#sensoren-hauptnavi").tabs({ active: 0 });
    $("#upstream-links, #compounding-links, #downstream-links").fadeOut(200);
    $("span").removeClass('active-.dot');
    $('.compounding-arrow').css('display','none').removeClass('left');
    $('.upstream-arrow').css('display','none').removeClass('left');
    $('.downstream-arrow').css('display','none').removeClass('left');
  });

  $('.full-link-spacebrew').on('click', function(){
    $("#sensoren-hauptnavi").tabs({ active: 0 });
    $("#upstream-links, #compounding-links, #downstream-links").fadeOut(200);
    $("span").removeClass('active-.dot');
    $('.compounding-arrow').css('display','none').removeClass('left');
    $('.upstream-arrow').css('display','none').removeClass('left');
    $('.downstream-arrow').css('display','none').removeClass('left');
    $(".anlagen-bild").css({'transform':'translate(0px, 0px) scale(1)'});
  });



}
showPoints();


});
