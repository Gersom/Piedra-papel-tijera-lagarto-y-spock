jQuery(document).ready(function(){
	instrucciones();
});

function instrucciones(){
	$('#instrucciones').on('click',function(e){
		$('#contenido').html(

			"<h1>REGLAS 'Piedra, Papel, Tijera, Lagarto o Spock'</h1>" +
			"<img src='img/ins.png' />" +
			"<p>" +
				"Las tijeras cortan el papel, el papel cubre a la piedra, la piedra aplasta al lagarto, el lagarto envenena a Spock, Spock destroza las tijeras, las tijeras decapitan al lagarto, el lagarto se come el papel, el papel desautoriza/refuta a Spock, Spock vaporiza la piedra, y, como es siempre… piedra aplasta las tijeras." +
			"</p>" +
			"<a href='#' id='regresar'>Regresar</a>"

		);
	
		$('#regresar').on('click',function(e){
			e.preventDefault();
			cuerpo();
		});

	});
};