var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var aside = document.querySelector("aside");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function recupererTextoArea() {
    var textoEncriptar = document.querySelector("textarea");
    return textoEncriptar.value;
}

function encriptar(){  
    ocultarAside();
    //alert("encriptar pulsado");
    //alert(recupererTextoArea());
    
    var caracteres = recupererTextoArea().split("");
    for (let index = 0; index < caracteres.length; index++) {
        const element = caracteres[index];
        if (element == "e") {
            caracteres[index] = "enter";
        }
        if (element == "i") {
            caracteres[index] = "imes";
        }
        if (element == "a") {
            caracteres[index] = "ai";
        }
        if (element == "o") {
            caracteres[index] = "ober";
        }
        if (element == "u") {
            caracteres[index] = "ufat";
        }
    }
    
    document.getElementById("parrafoEncriptado").innerHTML = caracteres.join("");
}

function desencriptar(){
    ocultarAside();

    var caracteres = recupererTextoArea().split("");
    var caracteresFinal = "";
    for (let index = 0; index < caracteres.length; index++) {
        const element = caracteres[index];
        if (element == "e") {
            caracteresFinal = caracteresFinal + "e";
            index = index + 4;
        }
        else if (element == "i") {
            caracteresFinal = caracteresFinal + "i";
            index = index + 3;
        }
        else if (element == "a") {
            caracteresFinal = caracteresFinal + "a";
            index = index + 1;
        }
        else if (element == "o") {
            caracteresFinal = caracteresFinal + "o";
            index = index + 3;
        }
        else if (element == "u") {
            caracteresFinal = caracteresFinal + "u";
            index = index + 3;
        }
        else {
            caracteresFinal = caracteresFinal + element
        }
    }
    document.getElementById("tituloEncriptado").innerHTML = "Mensaje Desencriptado";
    document.getElementById("parrafoEncriptado").innerHTML = caracteresFinal;
}

function ocultarAside(){
    const list = document.getElementById("contenidoAside");
    list.classList.add("ocultar");
    var resuelto = document.getElementById("contenidoAsideResuelto");
    resuelto.classList.remove("ocultar");
}

/* function ocultarTextoEncriptado(){
    const list = document.getElementById("contenidoAside");
    list.classList.remove("ocultar");
    const remove = document.getElementById("contenidoAsideResuelto");
    remove.classList.add("ocultar");
} */

function copiar(){
    var copyText = document.getElementById("parrafoEncriptado").innerHTML;
    navigator.clipboard.writeText(copyText);
    //alert("copiado" + copyText);
}
