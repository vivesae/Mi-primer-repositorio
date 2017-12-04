	class crea_arboles {

		constructor (arboles, arbustos, puntos, tiempo_total){

				this.arboles 		= arboles;
				this.arbustos 		= arbustos;
				this.puntos 		= puntos;
				this.tiempo_total   = tiempo_total;

				console.log("Tienes "+arboles+" arboles, "+arbustos+" arbustos, has acumulado "+puntos+" puntos y has invertido en este proyecto "+tiempo_total+" minutos");
				document.getElementById("datos").innerHTML = "Tienes "+arboles+" arboles, "+arbustos+" arbustos, has acumulado "+puntos+" puntos y en este proyecto llevas invertidos: "+tiempo_total+" minutos";

			}

	}


	class Contador {

		empezar_a_contar(tiempo, tipo){

		//	tiempo = this.tiempo;

		//	document.getElementById("demo").innerHTML = "Estoy empezando a contar";

			this.minutos_focus = tiempo;

			this.tipo_reto = tipo;

			var time_now = new Date().getTime();
			this.tiempo_final = time_now + tiempo * 60 * 1000; //Depende de tiempo
			
			this.actualiza_tiempo();

		}

		actualiza_tiempo(){
			console.log("Soy la función actualiza tiempo, y el tiempo final es: "+this.tiempo_final);

			var intervalo = setInterval(function(){
				var tiempo_ahora 	 = new Date().getTime();
				this.diferencia 	 = contador.tiempo_final - tiempo_ahora;

				var horas 	 = Math.floor((diferencia % (1000 * 60* 60 * 24)) / (1000 * 60 * 60));
				var minutos  = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
				var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

				document.getElementById("contador").innerHTML = horas + "h " + minutos + "m " + segundos + "s ";
				document.getElementById("stop").innerHTML = '<button class="btn btn-raised btn-danger" onclick="contador.stop()">STOP</button>';

				document.getElementById("boton_arbusto").disabled = true;
				document.getElementById("boton_arbol").disabled   = true;


				if (this.diferencia <= 0) {

					clearInterval(intervalo);
					document.getElementById("contador").innerHTML = "Plantado";
					document.getElementById("boton_arbusto").disabled = false;
					document.getElementById("boton_arbol").disabled   = false;
					contador.finaliza_tiempo();
					document.getElementById('stop').innerHTML = '';
					
					// Aquí ocultas el Stop
					
					// Aquí volver a habilitar botones
				}


			},1000)

			this.interval = intervalo;

		}


		stop(){
			clearInterval(contador.interval);
			document.getElementById("contador").innerHTML = "Tu arbol ha quedado a medio plantar";

			if(contador.tipo_reto == 'arbusto') {
				var arbu_sin 	= document.createElement("IMG");
				arbu_sin.setAttribute("src", "arbusto_sin_plantar.png");
				document.getElementById("bosque").appendChild(arbu_sin);
			} else {
				var arbo_sin 	= document.createElement("IMG");
				arbo_sin.setAttribute("src", "arbol_sin_plantar.png");
				document.getElementById("bosque").appendChild(arbo_sin);				
			}
			
		}

		
		finaliza_tiempo() { 	// detectar si ha sido un arbol o un arbusto

			console.log("He acabado de contar");
	//		document.getElementById("boton_arbusto").disabled = false;
	//		document.getElementById("boton_arbol").disabled   = false;
			
			forest.plantamos(this.tipo_reto);

		/*	if (contador.tipo_reto == 'arbusto') {

				console.log("es un arbusto");
				datos.arbustos ++;
				datos.puntos 		= datos.puntos + 100;
				var arbu_img 		= document.createElement("IMG");
				arbu_img.setAttribute("src", "arbusto.png");
				document.getElementById("bosque").appendChild(arbu_img);
		//		var fecha = document.createElement("p");
		//		var bla 	= "hola";
		//		document.getElementById("bosque").appendChild(bla);
				


			} else {
				console.log("es un arbol");
				datos.arboles ++;			
				datos.puntos 	   = datos.puntos + 250;
				var arbo_img 	= document.createElement("IMG");
				arbo_img.setAttribute("src", "arbol.png");
				document.getElementById("bosque").appendChild(arbo_img);

			} */

			datos.tiempo_total = datos.tiempo_total + contador.minutos_focus;

			document.getElementById("datos").innerHTML = "Tienes "+datos.arboles+" arboles, "+datos.arbustos+" arbustos, has acumulado "+datos.puntos+" puntos y en este proyecto llevas invertidos: "+datos.tiempo_total+" minutos";

		}

	}
	
	class Bosque{

		constructor(){
			// Defino Canvas
			this.canvas  = document.getElementById("cuadro_bosque");
			this.context = this.canvas.getContext("2d");

			// Defino imágenes

			this.bosque_vacio  	  = new Image();
			this.bosque_vacio.src = "img/bosquevacio.png";
			this.arbol 			  = new Image();
			this.arbol.src		  = "img/arbol.png";
			this.arbusto 		  = new Image();
			this.arbusto.src	  = "img/arbusto.png";

			// Variables 

			this.posicion_usada	  = [];

			//this.posicion_canvas = [ {x:10,y:20}, {x:10,y:20}, {x:10,y:20} ];

			this.posicion_canvas = {
				posicion1: {x:424, y:48},
				posicion2: {x:350, y:90},
				posicion3: {x:495, y:90},
				posicion4: {x:280, y:125},
				posicion5: {x:424, y:120},
				posicion6: {x:560, y:122},
				posicion7: {x:215, y:155},
				posicion8: {x:350, y:155},
				posicion9: {x:495, y:155},
				posicion10: {x:622, y:155},
				posicion11: {x:140, y:190},
				posicion12: {x:280, y:190},
				posicion13: {x:424, y:190},
				posicion14: {x:560, y:190},
				posicion15: {x:690, y:185},
				posicion16: {x:215, y:225},
				posicion17: {x:345, y:225},
				posicion18: {x:490, y:225},
				posicion19: {x:622, y:225},
				posicion20: {x:275, y:255},
				posicion21: {x:424, y:255},
				posicion22: {x:558, y:255},
				posicion23: {x:345, y:295},
				posicion24: {x:493, y:295},
				posicion25: {x:420, y:320}

			};

			this.posicion_canvas_2 = {
				posicion1: {x:424, y:20},
				posicion2: {x:350, y:60},
				posicion3: {x:495, y:60},
				posicion4: {x:280, y:95},
				posicion5: {x:424, y:90},
				posicion6: {x:560, y:92},
				posicion7: {x:215, y:125},
				posicion8: {x:350, y:125},
				posicion9: {x:495, y:125},
				posicion10: {x:622, y:125},
				posicion11: {x:140, y:160},
				posicion12: {x:280, y:160},
				posicion13: {x:424, y:160},
				posicion14: {x:560, y:160},
				posicion15: {x:690, y:155},
				posicion16: {x:215, y:195},
				posicion17: {x:345, y:195},
				posicion18: {x:490, y:195},
				posicion19: {x:622, y:195},
				posicion20: {x:275, y:225},
				posicion21: {x:424, y:225},
				posicion22: {x:558, y:225},
				posicion23: {x:345, y:265},
				posicion24: {x:493, y:265},
				posicion25: {x:420, y:290}
			}
			
			/*this.posicion_canvas.posicion1.x
			this.posicion_canvas["posicion1"].x
			this.posicion_canvas["posicion1"].y*/
			this.bosque_vacio.addEventListener('load', function(){
				forest.montar_bosque();
			});

		}

		plantamos(tipo){
			// tipo = arbol o arbusto
			console.log("vamos a plantar un "+tipo);
 
    		var num_aleatorio = Math.floor((Math.random() * 25) + 1);
    		console.log(num_aleatorio);

			while(this.posicion_usada.includes(num_aleatorio) == true){
				num_aleatorio = Math.floor((Math.random() * 25) + 1);
			}

			if (tipo == 'arbusto') {
				console.log("soy arbusto");
				this.context.drawImage(this.arbusto,this.posicion_canvas["posicion"+num_aleatorio].x, this.posicion_canvas["posicion"+num_aleatorio].y);
				datos.arbustos++;
				console.log(this.posicion_usada);

				}else{
					console.log('soy árbol');
					this.context.drawImage(this.arbol,this.posicion_canvas_2["posicion"+num_aleatorio].x, this.posicion_canvas_2["posicion"+num_aleatorio].y);
					datos.arboles++;
				}

			this.posicion_usada.push(num_aleatorio);

			console.log(this.posicion_usada);


		
		}
		
		montar_bosque(){

			this.context.drawImage(this.bosque_vacio, 100, 75);
	/*		this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion1.x, this.posicion_canvas_2.posicion1.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion2.x, this.posicion_canvas_2.posicion2.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion3.x, this.posicion_canvas_2.posicion3.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion4.x, this.posicion_canvas_2.posicion4.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion5.x, this.posicion_canvas_2.posicion5.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion6.x, this.posicion_canvas_2.posicion6.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion7.x, this.posicion_canvas_2.posicion7.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion8.x, this.posicion_canvas_2.posicion8.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion9.x, this.posicion_canvas_2.posicion9.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion10.x, this.posicion_canvas_2.posicion10.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion11.x, this.posicion_canvas_2.posicion11.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion12.x, this.posicion_canvas_2.posicion12.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion13.x, this.posicion_canvas_2.posicion13.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion14.x, this.posicion_canvas_2.posicion14.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion15.x, this.posicion_canvas_2.posicion15.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion16.x, this.posicion_canvas_2.posicion16.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion17.x, this.posicion_canvas_2.posicion17.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion18.x, this.posicion_canvas_2.posicion18.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion19.x, this.posicion_canvas_2.posicion19.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion20.x, this.posicion_canvas_2.posicion20.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion21.x, this.posicion_canvas_2.posicion21.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion22.x, this.posicion_canvas_2.posicion22.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion23.x, this.posicion_canvas_2.posicion23.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion24.x, this.posicion_canvas_2.posicion24.y);
			this.context.drawImage(this.arbol, this.posicion_canvas_2.posicion25.x, this.posicion_canvas_2.posicion25.y);
			*/

			
		}

		inicializar_bosque(json){
			// montar los arboles y los arbustos
		}

	}


	window.onload = function(){

	datos = new crea_arboles(50,70,1500,500);	
	contador = new Contador();
	forest = new Bosque();	

}

	









