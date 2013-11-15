$(document).ready(function() {
    // Controls background image swapping & title div #roll visibility
    var current_bg = 0;
    /*
    $('div#drink').click(function() {
        if(current_bg < bg_imgs.length-1) {
            current_bg +=1;
            $('div#roll').addClass("ninja");
        }
        else {
            current_bg = 0;
            $('div#roll').removeClass("ninja");
        }
        $('body').css(	'background',
                        'url('+bg_imgs[current_bg]+') no-repeat center top fixed');
    });
    */
    
    // Animate our grenade pin
    $('div#cta').hover(
      function () {
        $('div#cta-pin').animate({
            bottom: '+=50'
          }, 250, function() {
            // Not firing anything here.
          });
      }, 
      function () {
        $('div#cta-pin').animate({
            bottom: '-=50'
          }, 250, function() {
            // Don't need to fire anything here either.
          });
      });
    
    // Animate the shotglass
    $('div#drink').hover(
      function () {
        $('div#absinthe').animate({
            height: '+=20',
            opacity: '1'
          }, 500, function() {
            // Not firing anything here.
          });
        $('div#shotglass').css('opacity', '1');
      }, 
      function () {
        $('div#absinthe').animate({
            height: '-=20',
            opacity: '0'
          }, 200, function() {
            // Don't need to fire anything here either.
          });
        $('div#shotglass').css('opacity', '0.65');
      });

});

/*
// Background image URLs are stored in an array
var bg_imgs = [];
for (i=0; i<4; i++) {
    // Set the correct image index
    bg_imgs[i] = "img/RAGEMAS_BKG" + (i+1) + ".jpg"
}


// Image preloading provided by Mika Tuupola
// Source at: http://www.appelsiini.net/2007/6/sequentially-preloading-images
$(window).bind("load", function() {
    var preload = new Array();
    $(".preload").each(function() {
        s = $(this).attr("src").replace(/\.(.+)$/i, "_on.$1");
        preload.push(s)
    });
    var img = document.createElement('img');
    $(img).bind('load', function() {
        if(preload[0]) {
            this.src = preload.shift();
        }
    }).trigger('load');
});

var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "http://ragemas.niketdesai.com/img/RAGEMAS_BKG2.jpg",
    "http://ragemas.niketdesai.com/img/RAGEMAS_BKG3.jpg",
    "http://ragemas.niketdesai.com/img/RAGEMAS_BKG4.jpg"
)
*/
