let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let botonLimpiar = document.querySelector(".btn-limpiar");
let botonCopiar = document.querySelector(".btn-copiar");
let campo_texto = document.querySelector(".text-area");
let resultado = document.querySelector(".texto-salida");
let dibujoTexto = document.querySelector(".imagenParrafo");

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

/*Botones*/

botonLimpiar.onclick = limpiarArea;
botonEncriptar.onclick = btnencriptar;
botonDesencriptar.onclick = btnDesencriptar;
botonCopiar.onclick = btncopiar;

/*Botón Copiar*/

function limpiarArea() {
    document.getElementsByClassName("text-area")[0].value = "";
    document.getElementsByClassName("texto-salida")[0].value = "";
    dibujoTexto.style.visibility = "inherit";
}

/*Encriptar*/

function btnencriptar(){
    const texto = encriptar(campo_texto.value);
    resultado.value = texto;
    dibujoTexto.style.visibility = "hidden";
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada
}

/*Desencriptar*/

function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    resultado.value = texto;
    dibujoTexto.style.visibility = "hidden";
}

function desencriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada
}

/*Botón Copiar*/

function btncopiar(){
    let textoCopiado = document.querySelector(".texto-salida");
    textoCopiado.select();
    document.execCommand("copy");
    alert("¡Texto Copiado!")
}




