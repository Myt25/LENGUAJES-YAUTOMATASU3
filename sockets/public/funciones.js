function cantidadpalabras(){
	//Obtenemos el texto del campo
	var texto = document.getElementById('texto').value;
	//Reemplazamos los saltos de linea por espacios
	texto = texto.replace (/\r?\n/g," ");
	//Reemplazamos los espacios seguidos por uno solo
	texto = texto.replace (/[ ]+/g," ");
	//Quitamos los espacios del principio y del final
	texto = texto.replace (/^ /,"");
	texto = texto.replace (/ $/,"");
	//Troceamos el texto por los espacios
	var textoTroceado = texto.split (" ");
	//Contamos todos los trozos de cadenas que existen
	var numeroPalabras = textoTroceado.length;
	//Mostramos el número de palabras
	document.getElementById('CantidadPalabra').innerHTML = numeroPalabras;
	


	var vocal = document.getElementById('texto').value;
var numeroVocales = (vocal.match(/[aeiou]/gi) == null)? 0 : vocal.match(/[aeiou]/gi).length;
document.getElementById('CantidadVocal').innerHTML = numeroVocales;
//document.getElementById('CVR').innerHTML = numeroVocales;


var mayuscula = document.getElementById('texto').value;
var numeromayuscula = mayuscula.match(/[A-Z]/gm).length;
document.getElementById('CantidadMayuscula').innerHTML = numeromayuscula;
//document.getElementById('CMR').innerHTML = numeromayuscula;
}

/*

function palabrasrecibidas(){
	//Obtenemos el texto del campo
	var texto2 = document.getElementById('messages').innerHTML;
	//Reemplazamos los saltos de linea por espacios
	texto2 = texto2.replace (/\r?\n/g," ");
	//Reemplazamos los espacios seguidos por uno solo
	texto2 = texto2.replace (/[ ]+/g," ");
	//Quitamos los espacios del principio y del final
	texto2 = texto2.replace (/^ /,"");
	texto2 = texto2.replace (/ $/,"");
	//Troceamos el texto por los espacios
	var textoTroceado2 = texto2.split (" ");
	//Contamos todos los trozos de cadenas que existen
	var numeroPalabras2 = textoTroceado2.length;
	//Mostramos el número de palabras
	document.getElementById('CPR').innerHTML = numeroPalabras2;

	var vocal2 = document.getElementById('messages').innerHTML;
var numeroVocales2 = (vocal2.match(/[aeiou]/gi) == null)? 0 : vocal2.match(/[aeiou]/gi).length;
document.getElementById('CVR').innerHTML = numeroVocales2;

var mayuscula2 = document.getElementById('messages').innerHTML;
var numeromayuscula2 = mayuscula2.match(/[A-Z]/gm).length;
document.getElementById('CMR').innerHTML = numeromayuscula2;
}
/*
function mititulo(){
var mitit = document.getElementById('miurl').value;
var mitit2 = mitit.match(/(?=[^<\s/title>])+(.*?)(?=<\/title>)/g);
document.getElementById('contenido').innerHTML = mitit2;
}
*/