window.addEventListener("load", function(event) {
    //establecemos el contexto del canvas
    var canvas = document.querySelector('canvas'),
        contexto = canvas.getContext('2d');
    var fondo, blucledeljuego, sprite;

    function bucledeljuego() {
        console.log("ejecutando");
    }
    //carga la imagen de fondo 
    fondo = new Image();
    fondo.onload = function() {
        setInterval(bucledeljuego, 1000 / 24);
        contexto.drawImage(fondo, 0, 0, 640, 640);
    }
    fondo.src = "imagenes/Pueblo_Escaso.png"; //busca la fuente de la imagen
    //carga el sprite
    var sprite = new Image();
    posx = 200, posy = 300; //iniciamos el sprite en esta posicion
    sprite.onload = function() {
        setInterval(bucledeljuego, 1000 / 24);
        contexto.drawImage(sprite, 0, 0, 15, 22, posx, posy, 40, 60); //seleccionamos la posicion de la imagen y el tamaño que queremos cargar de esta 
    }
    sprite.src = "imagenes/widy.png"; //busca la fuente del sprite

    function actualizarJuego() {
        contexto.fillstyle = "white";
        contexto.drawImage(fondo, 0, 0, 640, 640);
    }
});