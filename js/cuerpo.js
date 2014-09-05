jQuery(document).ready(function(){
	cuerpo();

});

function cuerpo(){
	$('#contenido').html(
		"<section id='inicio'>" +
			"<article>" +
				"<h1>PRIMER GAME</h1>" +
				"<p></p>" +
			"</article>" +
			"<ul>" +
				"<li><a href='#' id='nuevo'>Nuevo Juego</a></li>" +
				"<li><a href='#' id='instrucciones'>Instrucciones</a></li>" +
				"<li><a href='#' id='creditos'>Creditos</a></li>" +
			"</ul>" +
		"</section>"
	);

	var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
	var tmp;
	var i;

	for (i = 0; i <= 4; i++) {
		tmp = $('#inicio p').html();
		$('#inicio p').html(
			tmp + opciones[i] + "<img src='img/" + opciones[i] + ".png' />"
		);
	};

	$('a').on('click',function(e){
		e.preventDefault();
	});
	$('body').css({"margin-top":0});
	instrucciones();
	creditos();
	nuevo();
};

function centro(){
	var temporal = [[$(window).height()-$('body').height()]/2]-1;
	$('body').css({"margin-top":temporal});
};