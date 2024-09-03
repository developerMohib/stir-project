(function ($) {
  "use strict";

  /**
	 	<=={Master JS}==>
		01 Mobile Menu JS
		02 scrollCue JS
	
	**/

  /**<<=== 01 Mobile Menu JS ==>>**/
  $(".for-mobile-menu").meanmenu({
    meanScreenWidth: "991",
  });

  /**<<=== 05 scrollCue JS ==>>**/
  scrollCue.init();
  console.log('scroll cure' )
})(jQuery);
