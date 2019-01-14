var $ = jQuery.noConflict();
$(document).ready(function(event){
	// add  zero-width space &#8203; to our looooong @coloradocollege email addresses  so they can wrap if needed
	$('a[href^="mailto:"]:contains("coloradocollege")' ).each(function(){
		var lnktxt = $(this).html().replace(/coloradocollege/gi, "colorado&#8203;college");
		$(this).html(lnktxt);
	});
});