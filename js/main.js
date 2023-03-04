$(document).ready(function(){
	$('#creditsButton').click(function(){
		$('#creditsText').fadeIn('slow');

		$('html, body').animate({
	        scrollTop: $(document).height()
	    }, 1300);
	})
})