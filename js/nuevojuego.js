jQuery(document).ready(function(){
	nuevo();
});

function nuevo(){
	$('#nuevo').on('click',function(e){

		$('#contenido').html("<h1>Escoge uno...</h1><ul></ul>");

		var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
		var tmp = $('ul').html();
		var i;

		for (i = 0; i <= 4; i++) {
			$('ul').html(
				tmp + "<li><a href='#' id='"+ opciones[i] +"'>"+ opciones[i] +"</a>"
			);
			tmp = $('ul').html();
		};

		$('ul').html(tmp+"<a href='#' id='regresar'>Regresar</a>");
		regresar();
		
		reglas();
	});

	
};

function regresar(){
	
	$('#regresar').on('click',function(e){
			e.preventDefault();
			cuerpo();
		});
};