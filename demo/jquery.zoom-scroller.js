/* ===========================================================
 * jquery.zoom-scroller.js v1.0
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Image will smoothly zooms in/out as you scroll through them
 * creating a very nice subtle animation that grabs attention
 *
 * https://github.com/peachananr/zoom-scroller
 * 
 * License: GPL v3
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    zoom: 1,
    initZoom: 1.15,
    animationTime: 2000,
    easing: "ease",
    onZoom: null
  };  
  
  
  $.fn.zoomScroller = function(options){
    return this.each(function(){
      var settings = $.extend({}, defaults, options),
          el = $(this),
          originY = 0,
          bg = el.find("> img");

      // Wrap all list items in a scroller to be used to scroll    
      el.addClass("zs-wrapper").css("overflow", "hidden").prepend("<div class='zs-img'></div>");
      bg.remove();
      var img = el.find("> .zs-img");
      
      img.css({
        background: "url(" + bg.attr("src") + ") center center no-repeat",
        "background-size": "cover",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        "-webkit-transform": "scale(" + settings.initZoom + ")",
        "-moz-transform": "scale(" + settings.initZoom + ")",
        "-o-transform": "scale(" + settings.initZoom + ")",
        "transform": "scale(" + settings.initZoom + ")",
        "-webkit-transition": "-webkit-transform " + settings.animationTime + "ms " + settings.easing,
        "-moz-transition": "-moz-transform " + settings.animationTime + "ms " + settings.easing,
        "-ms-transition": "-o-transform " + settings.animationTime + "ms " + settings.easing,
        "transition": "transform " + settings.animationTime + "ms " + settings.easing
      });
  
      // Swipe Support
      var debut,
          isTouching = false;
      if (settings.parallaxOnMobile == true) {
        $("body").on('touchstart', function() {
          if (event.touches.length == 1) {
            debut = event.touches[0].pageY;
            isTouching = true;
          }
        });   

        $("body").on('touchend', function() {
          isTouching = false;
          debut = null;
        })
      }
      
      // function to grab current zoom value
      function getScale(el) {
        var st = window.getComputedStyle(el, null);
        var tr = st.getPropertyValue("-webkit-transform") ||
                 st.getPropertyValue("-moz-transform") ||
                 st.getPropertyValue("-ms-transform") ||
                 st.getPropertyValue("-o-transform") ||
                 st.getPropertyValue("transform");

        var values = tr.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];

        var scale = Math.sqrt(a*a + b*b);
        return scale;
      }

      // bind on scroll to create zoom effect on the background 
      $(document).on('touchmove mousewheel DOMMouseScroll', function(e, delta) {
        originY = $(document).scrollTop();
        
        // Zoom startes/stops only when object is on screen
        if (el.is_on_screen($(document).scrollTop())) {      
          img.css({
            "-webkit-transform": "scale(" + settings.zoom + ")",
            "-moz-transform": "scale(" + settings.zoom + ")",
            "-o-transform": "scale(" + settings.zoom + ")",
            "transform": "scale(" + settings.zoom + ")"
          });
          if (typeof settings.onZoom == 'function') settings.onZoom(img.parent(), "in"); 
        } else {
          img.css({
            "-webkit-transform": "scale(" + settings.initZoom + ")",
            "-moz-transform": "scale(" + settings.initZoom + ")",
            "-o-transform": "scale(" + settings.initZoom + ")",
            "transform": "scale(" + settings.initZoom + ")"
          });
          if (typeof settings.onZoom == 'function') settings.onZoom(img.parent(), "out"); 
        }
      
      });
      
      // Function Check if the when the element appears on the screen
      
      $.fn.is_on_screen = function(originY){
        var win = el;
        var viewport = {
            top : originY
        };

        viewport.bottom = viewport.top + $(window).height() ;
        
        var bounds = this.offset();
        
        
        bounds.top = this.offset().top;
        bounds.bottom = this.offset().top + this.height();
        return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
      };
      
      
    });
    
  }
  

}(window.jQuery);