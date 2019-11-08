
var socket = io.connect('192.168.43.98:1111', { 'forceNew': true });

socket.on('messages', function(data) {
    console.log(data);
    render(data);
})

var expresionvocal= / [aeiou|áéíóú]/ig;
var expresionmayuscula = /(\b[A-Z|ÁÉÍÓÚ])[a-z|áéíóú|A-Z|ÁÉÍÓÚ]*/g;

var expresionconsonante = / [a-záéíóúA-ZÁÉÍÓÚ]+([^aeiouáéíóú\?])\b/g;

function render(data) {
    var html = data.map(function(elem, index) {
        return (`<div>
            <em>Palabras enviadas: <strong>${elem.textos}</strong></em><br>
            <em>Vocales enviadas: <strong>${elem.vocal}</strong></em><br>
            <em>Mayusculas enviadas: <strong>${elem.mayus}</strong></em><br>
            <em>Sin vocal enviados: <strong>${elem.final}</strong></em><br>
            <em>Numeros enviados: <strong>${elem.num}</strong></em>
              <li><strong>${elem.author}</strong>:
              <em>${elem.text}</em></li>
              <hr>
              
            </div>`);
    }).join(" ");

    document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {

    var mensaje = document.getElementById('texto').value;//se toma lo que haya escrito el usuario

    //Sección para comparar números
    var pruebanumeros = mensaje.match(/[\d]/g);//Se almacenan
    try {
        pruebanumeros = pruebanumeros.length;//El tamaño de la lista es la cantidad de númeross encontrados
    } catch (error) {
        console.log("El mensaje no tiene ningún número. Colocando el valor de cero");//En caso de que no se encuentre ningún número, el tamaño de la lista será nulo. Para evitar errores, se asignará el valor de cero
        pruebanumeros = 0;
    }

    var message = {

        author: document.getElementById('username').value,
        text: document.getElementById('texto').value,
        //Reemplazamos los saltos de linea por espacios

    //Reemplazamos los espacios seguidos por uno solo

    //Quitamos los espacios del principio y del final

    //Troceamos el texto por los espacios con el split

    //Contamos todos los trozos de cadenas que existen
        textos: document.getElementById('texto').value.replace(/\r?\n/g," ").replace (/[ ]+/g," ").replace (/^ /,"").replace (/ $/,"").split (" ").length,
        vocal: document.getElementById('texto').value.match(/[aeiou]/ig).length,
        mayus: document.getElementById('texto').value.match(expresionmayuscula).length,
        final: document.getElementById('texto').value.match(expresionconsonante).length,
        num: pruebanumeros
    };

     

    socket.emit('new-message', message);
    return false;
}