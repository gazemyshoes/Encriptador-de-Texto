let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let botonLimpiar = document.querySelector(".btn-limpiar");
let fraseEncriptada = document.querySelector(".text-area");
let munieco = document.querySelector(".contenedormunieco");
let parrafo = document.querySelector(".parrafo");
let resultado = document.querySelector(".texto-salida");

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




function encriptar (fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
    
}






