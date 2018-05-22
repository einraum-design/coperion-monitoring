/* navigationSwitch */

$(document).ready(function(){

  // Navigation

  function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = 0;
    this.initEvents();
  }

  DropDown.prototype = {

    initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(){
        $(this).toggleClass('active');
        return false;
      });

      $('li').on('click', function(){
        $(this).addClass('give');
        $(this).siblings().removeClass('give');


      });

      $('#dd li:first-child').on('click',function(){
        $("#app-tab1").addClass("active");
        $("#app-tab2").removeClass("active");
        
        // window.sendSpacebrewMessage('componentActivated', {
        //   componentId: 90,
        //   componentName: 'Switch to Sensoring',
        //   rohstoffTracking: false
        // });

        resetSensoringPlantView();

      });

      $('#dd li:nth-child(2)').on('click',function(){
        $("#app-tab2").addClass("active");
        $("#app-tab1").removeClass("active");
        // window.sendSpacebrewMessage('componentActivated', {
        //   componentId: 89,
        //   componentName: 'Switch to Material Tracking',
        //   rohstoffTracking: true
        // });

        resetTrackingPlantView();
      });

      obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
      });

      },
/*
      getValue : function() {
        return this.val;

      },
      getIndex : function() {
        return this.index;

      }*/
  }

  $(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {

      $('#page').removeClass('blur');
    });

  });

});

// var resetPlantView = function() {

//   $('#full-link').trigger('click');
//   $('#upstream-link a').addClass('upstream-start');
//   $('#compounding-link a').addClass('compounding-start');
//   $('#downstream-link a').addClass('downstream-start');

//   $("#first-row").tabs({active: 0});
//   $("#first-row-rohstoffe").tabs({active: 0});
// }

var resetSensoringPlantView = function() {

  $('.sensoring-back-button').trigger('click');
  $('#upstream-link a').addClass('upstream-start');
  $('#compounding-link a').addClass('compounding-start');
  $('#downstream-link a').addClass('downstream-start');

  $("#first-row").tabs({active: 0});
  $("#first-row-rohstoffe").tabs({active: 0});
}

var resetTrackingPlantView = function() {

  $('.tracking-back-button').trigger('click');
  $('#upstream-link a').addClass('upstream-start');
  $('#compounding-link a').addClass('compounding-start');
  $('#downstream-link a').addClass('downstream-start');

  $("#first-row").tabs({active: 0});
  $("#first-row-rohstoffe").tabs({active: 0});
}
