$(document).ready( function() {

	$('#big-sur-button').hover(function(e){
		// e.preventDefault();
		$('#quickview').css('visibility', 'visible');

		console.log("Clicked");	
	}, function(e){
		$('#quickview').css('visibility', 'hidden');

	})
})

/*
function displayQuickview() {
	document.getElementById("quickview").style.visibility='visible';

}
*/