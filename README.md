#Zoom Scroller by Pete R.
Zoom Scroller let you add a smooth subtle zoom in/out animation to images when scrolling
Created by [Pete R.](http://www.thepetedesign.com), Founder of [Travelistly](http://www.travelistly.com) and [BucketListly](http://www.bucketlistly.com)

License: [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)

[![Zoom Scroller](http://www.thepetedesign.com/images/zoom-scroller_image.jpg "Zoom Scroller")](http://www.thepetedesign.com/demos/zoom-scroller_demo.html)


## Demo
[View demo](http://www.thepetedesign.com/demos/zoom-scroller_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and smartphones have been tested. Not tested on IE.

## Basic Usage
To use this plugin, simply include the latest jQuery library (preferably version 2.0.0 or higher) together with `jquery.zoom-scroller.js` into your document's `<head>` follow by an HTML markup as follows:

````html
<body>
  ..
  <div class="zoom-images">
    <img src="images/1.jpg">
  </div>
  <div class="zoom-images">
    <img src="images/2.jpg">
  </div>
  ..
</body>

````
Make sure that the image you want to zoom is wrapped within a container that will be used to call the jQuery function.

Once you got your images setup, call the function as shown below:

````javascript
 $(".zoom-images").zoomScroller({
   initZoom: 1.15,                          // This option let you define the initial scale of the image before it starts animating. 1 is normal size. Increase/decrease this value by decimal points to get the zoom you want. (2 is equivalent to 200% width x height). The default value is 1.15.
   zoom: 1,                                 // This is the option that determine whether to zoom in or out when animating. If you want to zoom in, make sure this value is more than initZoom. If not, then this value must be lower than initZoom. The default value is 1.
   animationTime: 2000,                     // You an define how long the animation will take place here. The option accept milliseconds. The default value is 2000.
   easing: "ease",                          // This option accept CSS easing options. This allows you to control the easing of the zoom. The default value is "ease".
   onZoom: function(el, zoomType) {},       // This is the callback that will let you execute any function during the animation. The default value is null.
   beforeZoom: function(el, zoomType) {},   // This is the callback that will let you execute any function before the animation. The default value is null.
   afterZoom: function(el, zoomType) {},    // This is the callback that will let you execute any function after the animation. The default value is null.
   offsetTop: 0,                            // This allows you to define the top offset before the animation is initiated. The default value 0 so the animation will initiate right when 1 pixel of the element appears from the top of the viewport.
   offsetBottom: 200,                       // This allows you to define the bottom offset before the animation is initiated. The default value 200 so the animation will initiate only when at least 200 pixels of the element are visible from the bottom of the viewport.
 });
````
With the default setup above, your images will now have a very subtle, smooth zoom out animation as you scroll through the page.

## Callbacks
You can use this callback to perform actions during the animation.

### onZoom(element, zoomType)
This callback gets called during the zoom animation. The "element" variable will let you get the current element that is being animated and "zoomType" variable will let you know whether the animation is caused by elements entering the viewport or exiting the viewport. Values returned are "in" or "out". Here's an example:

````javascript
  $(".zoom-images").zoomScroller({
    onZoom: function(element, zoomType) {
      if (zoomType == "in") {
        ..
      } else {
        ..
      }
    }
  });
````

### beforeZoom(element, zoomType)
Same variables available as the onZoom callbacks but this will execute before the animation started instead:

````javascript
  $(".zoom-images").zoomScroller({
    beforeZoom: function(element, zoomType) {
      ..
    }
  });
````

### afterZoom(element, zoomType)
Same variables available as the onZoom callbacks but this will execute after the animation started instead:

````javascript
  $(".zoom-images").zoomScroller({
    afterZoom: function(element, zoomType) {
      ..
    }
  });
````

Now you can create a smooth subtle animation on images you wish to grab viewers attention.

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#plugins), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- Tutorial (Coming Soon)