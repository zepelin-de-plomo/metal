(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length &&
        !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
})

function
KeyboardListener() {

    // Properties.

    this.keychar = null;
    this.getPressed = function() {
        return this.keychar;
    };

    this.kLeft = function() {
        return String.fromCharCode(37);
    };

    this.kUp = function() {
        return String.fromCharCode(38);
    };

    this.kRight = function() {
        return String.fromCharCode(39);
    };

    this.kDown = function() {
        return String.fromCharCode(40);
    };
}
// tercer correo
// Methods.
this.listenKeydown = function(e) {
    var keynum;

    if (window.event) keynum = e.keyCode;
    // IE8 and earlier.
    else if (e.which) keynum = e.which;
    // IE9/Firefox/Chrome/Opera/Safari.

    this.keychar = String.fromCharCode(keynum);
    return true;
};

this.listenKeyup = function(e) {
    this.keychar = null;
    return true;
};
// tercer correo
// Class Character.
function
Character() {
    // Properties.
    this.image = new
    Image();
    this.image.src = "imagenes/bruno.jpeg";
    this.xPos = 50;
    this.yPos = 300;
    this.died = false;
    //Sigue el codigo
}
var canvas = document.getElementById('myCanvas');
contexto = canvas.getContext('2d');
indiceAnimacion = 0;

ultimoCuadro = new Date().getTime(),

    tiempoAcumulado = 0;



contexto.fillStyle = "blue";
contexto.fillRect(90, 100, 7, 30);
contexto.fillRect(100, 100, 50, 30);
//Iniciamos el dibujo del contorno
contexto.beginPath();
contexto.arc(150, 115, 15, 1, 5 * Math.PI, 0, 5 * Math.PI, false);
//Cerramos el contorno
contexto.closePath();
contexto.fill();
//Dibujamos la segunda bala
contexto.strokeStyle = "red";
contexto.strokeRect(190, 100, 7, 30);
contexto.strokeRect(200, 100, 50, 30);
contexto.beginPath();
contexto.arc(250, 115, 15, 1, 5 * Math.PI, 0, 5 * Math.PI, false);
contexto.closePath();
//Aplicamos el contorno
contexto.stroke();
var spriteSheet = new Image();
x = 10, y = 10;
spriteSheet.onload = function() {
    setInterval(actualizarJuego,
        1000 / 33);
}

function
actualizarJuego() {
    contexto.fillStyle = "white";
    contexto.fillRect(0, 0, 640, 480);
    contexto.drawImage(drawImage, 5, 6, 25, 16, x, y, 25, 16);
    x++;
}
spriteSheet.src = 'imagen/1942.png'
var posiciones = [{ x: 38, y: 6, ancho: 24, alto: 16 },
        { x: 101, y: 6, ancho: 24, alto: 16 },
        { x: 166, y: 6, ancho: 24, alto: 16 }
    ],
    indiceAnimacion = 0;