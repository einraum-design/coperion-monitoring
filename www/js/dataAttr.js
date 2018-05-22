$(document).ready(function(){

  // Change data attribute from images to data src when images loaded

  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
       img.setAttribute('src', img.getAttribute('data-src'));
       img.onload = function() {
        img.removeAttribute('data-src');
    };
  });

});
