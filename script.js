$(document).ready(function(){
	$('.vaiLacrai').fadeOut(1500);
	$('.j_query_fadein').click(function(){
		$('.vaiLacrai').fadeIn(1500);
	});
	$('.caixa').css('background','yellow');
	$('.caixa').css('border','5px solid #ffc107');
	$('.caixa').css('float','right');

	$('#sobe').click(function(){
		$('.palhaco').slideUp();
	});

	$('#desce').click(function(){
		$('.palhaco').slideDown();
	});

	$('#desce').click(function(){
		$('.palhaco').slideDown();
	});

	$('#mudar').click(function(){
		$('.professor').text('The teacher is my fried');
	});

})
