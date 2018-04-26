 /*
Author: Linzi Nunes
*/

// Homepage Slider
$('.basicslider').flexslider({
	animation: "slide",
	pauseOnHover: true,
	controlNav: true,
	directionNav: false,
	smoothHeight: true,
	start: function(slider) {
		$('body').removeClass('loading');
	}
});