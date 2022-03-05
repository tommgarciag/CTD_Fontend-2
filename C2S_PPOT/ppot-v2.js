// 1 TIJERA - 2 PAPEL - 3 PIEDRA

function jugar() {
  alert("Piedra, papel o tijera");

  let rondas = 0;
  while (rondas < 3) {
    let seleccion = parseInt(
      prompt("Seleccione un movimiento. 1 TIJERA - 2 PAPEL - 3 PIEDRA")
    );
    let numRandom = parseInt(Math.random() * 3 + 1);

    if (isNaN(seleccion)) {
      console.log("LA SELECCION NO ES VALIDA");
    } else if (seleccion > 3) {
      console.log("LA SELECCION NO ES VALIDA");
    } else {
      // caso empate
      if (seleccion == numRandom) {
        console.log("EMPATE");
      }
      // jugador gana
      if (
        (seleccion == 1 && numRandom == 2) ||
        (seleccion == 2 && numRandom == 3) ||
        (seleccion == 3 && numRandom == 1)
      ) {
        console.log("GANASTE");
        rondas +=1;
      }
      // jugador pierde
      if (
        (seleccion == 1 && numRandom == 3) ||
        (seleccion == 2 && numRandom == 1) ||
        (seleccion == 3 && numRandom == 2)
      ) {
        console.log("PERDISTE");
        rondas +=1;
      }
    }
  }
}


jugar();