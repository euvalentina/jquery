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

	$('#bola1').mouseenter(function(){
		$('.bola1').css('background','red');
	});

	$('#bola2').mouseenter(function(){
		$('.bola2').css('background','blue');
	});

	$('#bola3').mouseenter(function(){
		$('.bola3').css('background','green');
	});

	$('#bola4').mouseenter(function(){
		$('.bola4').css('background','orenge');
	});

	$('.mudar').click(function(){
		$(".time > .vaiPalmeiras").addClass('vaiCorinthians');
		$(".time > .vaiPalmeiras").removeClass('vaiPalmeiras');
	});

	$('#mudarlink').click(function(){
		$("a[href='http://www.casadapamonha.com.br']").attr("href='']")
	});

	$('#removertitle').click(function(){
		$("a").removeAttr("title");
	});

	function checkImagem(url){
		var img = '<img src="' + url + '" />';
		$(img).load(function() {
			$('body').append(url +img);
		}).blind('error', function() {
			alert('imagem: ' +url+ 'não existe');
		});
		
	});
	
	