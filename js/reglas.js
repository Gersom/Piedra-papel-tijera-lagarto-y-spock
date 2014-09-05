function reglas(){

	$('a').on('click',function(e){
		e.preventDefault();
	});

	function aleatorio(minimo, maximo){
		var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
		return numero;
	}

	function maquina(){
		opcionMaquina =  aleatorio(0,4);
		$('#contenido').html(
			"<h2>La Maquina eligio : "+ opciones[opcionMaquina] +"</h2>" +
			"<h1></h1>" +
			"<a href='#' id='regresar'>Regresar</a>"
		);
		regresar();
	};

	function empate(){$('h1').html("Empate :/");};
	function ganaste(){$('h1').html("Ganaste :D");};
	function perdiste(){$('h1').html("Perdiste :(");};

	var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

	var piedra = 0;
	var papel = 1;
	var tijera = 2;
	var lagarto = 3;
	var spock = 4;

	var opcionMaquina;


	$('#piedra').on('click',function(e){
		maquina();
		if(opcionMaquina == piedra){
			empate();
		}
		else if(opcionMaquina == papel || opcionMaquina == spock){
			perdiste();
		}
		else if(opcionMaquina == tijera || opcionMaquina == lagarto){
			ganaste();
		}
		centro();
	});
	$('#papel').on('click',function(e){
		maquina();
		if(opcionMaquina == piedra || opcionMaquina == spock){
			ganaste();
		}
		else if(opcionMaquina == papel){
			empate();
		}
		else if(opcionMaquina == tijera || opcionMaquina == lagarto){
			perdiste();
		}
		centro();
	});
	$('#tijera').on('click',function(e){
		maquina();
		if(opcionMaquina == piedra || opcionMaquina == spock){
			perdiste();
		}
		else if(opcionMaquina == papel || opcionMaquina == lagarto){
			ganaste();
		}
		else if(opcionMaquina == tijera){
			empate();
		}
		centro();
	});
	$('#lagarto').on('click',function(e){
		maquina();
		if(opcionMaquina == tijera || opcionMaquina == piedra){
			perdiste();
		}
		else if(opcionMaquina == papel || opcionMaquina == spock){
			ganaste();
		}
		else if(opcionMaquina == lagarto){
			empate();
		}
		centro();
	});
	$('#spock').on('click',function(e){
		maquina();
		if(opcionMaquina == papel || opcionMaquina == lagarto){
			pesdiste();
		}
		else if(opcionMaquina == tijera || opcionMaquina == piedra){
			ganaste();
		}
		else if(opcionMaquina == spock){
			empate();
		}
		centro();
	});
};

