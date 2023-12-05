let letras = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    ñ: 15,
    o: 16,
    p: 17,
    q: 18,
    r: 19,
    s: 20,
    t: 21,
    u: 22,
    v: 23,
    w: 24,
    x: 25,
    y: 26,
    z: 27
}

let entrada = document.getElementById('entrada');
let arregloEntrada = [];

function mostrarPuntos() {
    let puntuacion = 0;
    let valorEntrada = entrada.value;
    let entradaMinuscula = valorEntrada.toLowerCase();
    let lista = document.getElementById('lista');
    let elementoLista = document.createElement('li');

    if(entradaMinuscula != "") {
        for(let letra in entradaMinuscula) {
            arregloEntrada.push(entradaMinuscula[letra]);
        }
    
        for(let letra in arregloEntrada) {
            for(let punto in letras) {
                if(arregloEntrada[letra] == punto) {
                    puntuacion += letras[punto];
                }
            }
        }
    
        elementoLista.innerText = entradaMinuscula + ": " + puntuacion + " puntos";
        lista.appendChild(elementoLista);
        if(puntuacion >= 100) {
            alert("Felicidades, conseguiste una palabra con un valor igual o mayor a 100 puntos!");
        } 
        
        entrada.value = "";
        puntuacion = 0;
        arregloEntrada = [];
        
    } else {
        alert("Ingresa una palabra!");
    }
}