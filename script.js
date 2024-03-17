let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let botonLimpiar = document.querySelector(".btn-limpiar");
let campo_texto = document.querySelector(".text-area");
let resultado = document.querySelector(".texto-salida");
let munieco = document.querySelector(".contenedormunieco");
let parrafo = document.querySelector(".parrafo");

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

botonEncriptar.onclick = encriptar;
botonLimpiar.onclick = limpiarArea;



function limpiarArea() {
    document.getElementsByClassName("text-area")[0].value = "";
}




function encriptar (){
    const texto = campo_texto.value;
    console.log(texto)
    
}






