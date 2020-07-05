jQuery(document).ready(function(){
	var enlace = jQuery(".hambur").attr("href");

	jQuery(".hambur").click(function(e){
		e.preventDefault();
		abrirMenu();
	});



	jQuery("header .container nav a").click(function(){
		var enlace = jQuery(this).attr("href");
		abrirMenu();
		jQuery("html,body").animate({
			"scrollTop" : jQuery(enlace).position().top
		},600)
	});
	// jQuery(".hambur").addClass("open");
	// jQuery(".hambur").removeClass("hambur");

	// if (jQuery(".hambur").hasClass("open") == true) {
	// 	expression
	// }else {
		
	// }
});


function abrirMenu() {
	jQuery("header").toggleClass("open");
		jQuery("header .container .hambur i").toggleClass("fa-times");
		jQuery("header .container nav").toggleClass("open");
}