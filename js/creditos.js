jQuery(document).ready(function(){
	creditos();
});

function creditos(){
	$('#creditos').on('click',function(e){

		$('#contenido').html(

			"<h1>CREDITOS</h1>" +
			"<p>" +
				"Juego desarrollado por : Gersom Alaja" +
			"</p>" +
			"<a href='#' id='regresar'>Regresar</a>"

		);
	
		$('#regresar').on('click',function(e){
			e.preventDefault();
			cuerpo();
		});
		centro();
	});

};