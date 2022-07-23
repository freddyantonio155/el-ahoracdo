var palabraOculta;
var fallos = 0;
var aciertos = 0;

var listaDePalabras = ["manzana", "pera", "limon", "helado", "chocolate", "gaseosa", "biscocho", "sebastian", "ricardo", "carolina", "abuelo", "venezuela", "argentina", "computadora", "celular", "televisor", "campera", "mikellino", "diamante", "azul", "dinosaurio", "vaso", "plato", "velocidad", "televisor", "telefono", "libro", "juguete", "playa", "dorado", "verde", "colorado", "pantalon", "plato", "casa", "edificio", "calle", "camioneta", "camion", "patineta", "patines", "lentes", "corazon", "pierna", "brazo", "heladera", "cuchillo", "cuchara", "triangulo", "cuadrado", "rectangulo", "paralelo", "sinonimo", "antonimo", "silaba", "docena", "cuarto", "habitacion","tecla", "programacion", "estudio", "matematica", "lengua", "arte", "escuadra", "taladro", "martillo"]

var imagen = document.getElementById("figura__imagen");
var teclaLetras = document.querySelectorAll(".letra");
var enter = document.getElementById("enter");


enter.addEventListener("click", iniciar);

function iniciar(event){
    imagen.src = "img/img0.png";
    enter.disabled = true;
    fallos = 0;
    aciertos = 0;

    var lineas = document.getElementById("palabra__oculta"); 
    lineas.innerHTML = "";

    var cantidadPalabras = listaDePalabras.length; 
    var valorAleatorio = Math.floor(Math.random() * cantidadPalabras); 

    palabraOculta = listaDePalabras[valorAleatorio];
    console.log(palabraOculta);
    var cantidadLetras = palabraOculta.length;
    
    document.getElementById("resultado").innerHTML = "";

    for(i = 0; i < teclaLetras.length; i++){
        teclaLetras[i].disabled = false;
    }

    for( let i = 0; i < cantidadLetras; i++ ){
        var span = document.createElement("span");
        lineas.appendChild(span);
    } 
}




for(i = 0; i < teclaLetras.length; i++){
    teclaLetras[i].addEventListener("click", presionarLetras);
}

function presionarLetras(event){
    var spans = document.querySelectorAll("#palabra__oculta span");
    var tecla = event.target;
    tecla.disabled = true;
    var letra = tecla.innerHTML.toUpperCase();
    var palabra = palabraOculta.toUpperCase();

    let atino = false;
    for(i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){
            spans[i].innerHTML = letra;
            aciertos++;
            atino = true;
        }
    }

    if(atino == false){
        fallos++;
        let nombreFoto = `img/img${fallos}.png`;
        imagen.src = nombreFoto;
        console.log(nombreFoto);
    }

    if(fallos == 6){
        document.getElementById("resultado").innerHTML = "PERDISTE!!!";
        gameOver();
    }else if(aciertos == palabra.length){
        document.getElementById("resultado").innerHTML = "GANASTE!!!";
        gameOver();
    }
}


function gameOver(){
    for(i = 0; i < teclaLetras.length; i++){
        teclaLetras[i].disabled = true;
    }
    enter.disabled = false;
}

gameOver();


