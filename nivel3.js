window.addEventListener("load", function(event) {
    var canvas = document.querySelector('canvas'),
        contexto = canvas.getContext('2d');
    var fondo, blucledeljuego, sprite;

    function bucledeljuego() {
        console.log("ejecutando");

    }

    fondo = new Image();
    fondo.onload = function() {
        setInterval(bucledeljuego, 1000 / 24);
        contexto.drawImage(fondo, 0, 0, 640, 640);
    }
    fondo.src = "imagenes/lab.jpg";

    function actualizarJuego() {

        contexto.fillstyle = "white";
        contexto.drawImage(fondo, 0, 0, 640, 640);

    }
});