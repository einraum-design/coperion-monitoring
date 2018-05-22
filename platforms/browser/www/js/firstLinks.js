$(document).ready(function(){

  $('#legende-button').on('click', function(){
		$('#timeline-legende').toggleClass('active');
    $(this).toggleClass('active');
	});


  $("#full-link").click(function(){
    $(".anlagen-bild").css({'transform':'translate(0px, 0px) scale(1)'});
    // window.sendSpacebrewMessage('componentActivated', {
    //   componentId: 200,
    //   rohstoffTracking: false
    // });
  });


  $('.upstream-spacebrew').on('click', function(){
    $("#second-row-upstream-rohstoffe").tabs({ active: 0 });
  });

  $('.compounding-spacebrew').on('click', function(){
    $("#second-row-compounding-rohstoffe").tabs({ active: 0 });
  });

  $('.downstream-spacebrew').on('click', function(){
    $("#second-row-downstream-rohstoffe").tabs({ active: 0 });
  });


  // Startscreen Anzeige
  // Upstream, Compounding und Downstream werden zuerst als Kacheln angezeigt.

  $('#upstream-link a').addClass('upstream-start');
  $('#compounding-link a').addClass('compounding-start');
  $('#downstream-link a').addClass('downstream-start');

  $('#full-link a').on('click',function(){
    $('#upstream-link a').addClass('upstream-start');
    $('#compounding-link a').addClass('compounding-start');
    $('#downstream-link a').addClass('downstream-start');
  });

  $('#upstream-link a, #compounding-link a, #downstream-link a').on('click',function(){
    $('#upstream-link a').removeClass('upstream-start');
    $('#compounding-link a').removeClass('compounding-start');
    $('#downstream-link a').removeClass('downstream-start');
  });



});
