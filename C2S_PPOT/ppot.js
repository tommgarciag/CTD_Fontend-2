// 1 TIJERA - 2 PAPEL - 3 PIEDRA

let seleccion = parseInt(prompt("Seleccione un movimiento. 1 TIJERA - 2 PAPEL - 3 PIEDRA"));
let numRandom = parseInt(Math.random()*3+1);

if (isNaN(seleccion)) {
    console.log("LA SELECCION NO ES VALIDA");
} if (seleccion > 3) {
    console.log("LA SELECCION NO ES VALIDA");
}
else {
    if (seleccion == numRandom) {
        console.log("EMPATE");
    }
    
    if (seleccion == 1 && numRandom == 2) {
        console.log("GANASTE");
    }
    
    if (seleccion == 1 && numRandom == 3) {
        console.log("PERDISTE");
    }
    
    if (seleccion == 2 && numRandom == 1) {
        console.log("PERDISTE");
    }
    
    if (seleccion == 2 && numRandom == 3) {
        console.log("GANASTE");
    }
    
    if (seleccion == 3 && numRandom == 1) {
        console.log("GANASTE");
    }
    
    if (seleccion == 3 && numRandom == 2) {
        console.log("PERDISTE");
    }
    
    
}

