jQuery(window).load(function(){ 
	jQuery('.slider_wrapper').flexslider({
	      animation: "fade",
	      animationLoop: true,
	      itemMargin: 0,
	      minItems: 1,
	      maxItems: 1,
	      slideshow: true,
	      controlNav: false,
	      	      slideshowSpeed: 5000,
	      move: 1
	});
	
		jQuery('.flexslider .slides > li img').resizeToParent({parent: '.slider_wrapper'});
	});