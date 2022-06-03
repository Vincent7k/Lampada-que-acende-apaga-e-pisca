/** 
* JS - Aula8: Lâmpada
* @author Bruno Santos
*/
function on(){
	document.getElementById("lamp").src = "acessa.png";
}

function off(){
	document.getElementById("lamp").src = "desligada.png";
}

function blink(){
	var intervalo = 0;
	var contador = 0;
	while (contador < 10){
		intervalo+=300;
		setTimeout("document.getElementById('lamp').src='acessa.png';",intervalo);
		intervalo+=300;
		setTimeout("document.getElementById('lamp').src='desligada.png';",intervalo);
		contador++
	}
}