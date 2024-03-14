console.log('Hola Mundo');



let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];





function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[0][i]
            );
        }
    }
    return fraseEncriptada;
}