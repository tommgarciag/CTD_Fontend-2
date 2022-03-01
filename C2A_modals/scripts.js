// alert("Esto es un alerta!");
// console.log(alert("Esto es un alerta!")); // -> undefined

// alert no retorna un valor que nos pueda servir a futuro

//confirm("Estas seguro de continuar?");
//console.log(confirm("Estas seguro de continuar?")); // -> devuelve true o false

// el valor de retorno que tiene un confirm es un valor booleano, esto puede ser util para ejecutar condicionales segun la eleccion del usuario. true si pulsamos Aceptar y false si elegimos Cancelar

// let confirmacion = confirm("Estas seguro de continuar?");

// console.log(confirmacion);

let nombreUsuario = prompt("Ingresa tu nombre: ");
console.log(nombreUsuario);

// si se cancela el prompt el valor de retorno sera null

// si se acepta sin completar nada, nos retorna un string vacio

// el valor de retorno siempre sera un string

// esto tambien nos podria servir como condicion para ejectuar cierto bloque de codigo