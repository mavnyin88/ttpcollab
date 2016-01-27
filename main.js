$(document).ready(function(){

	$('#submit').click(function(e){
		e.preventDefault();
		$('form').css("display","none");
		$('.emailHeader').html("THANKS!<br> You'll recieve an email shortly");
	})
})