//// VAR

// declara una variable global o en ambito de una funcion

var varGlobal = "valor inicial";
function name() {
  // ámbito de función
  console.log(varGlobal); // -> 'valor inicial'

  if (true) {
    // ámbito de bloque
    var varFuncion = "Estoy declarada en una función";
    console.log(varGlobal); // -> 'valor inicial'
    varGlobal = 'otro Valor';
    varFuncion = "sigo en la funcion";
  }

  console.log(varFuncion); // -> "sigo en la funcion"
}

//name();

//console.log(varGlobal); // -> 'otro Valor'
// console.log(varFuncion); // -> error no esta declarada


//// LET

// declara una variable en el ámbito de un bloque.

let letGlobal= 'valor inicial';

function name2() {
    // ámbito de función
    console.log(letGlobal); // -> 'valor inicial'

    if (true) {
        // ámbito de bloque
        // let letFuncion= 'Estoy declarada en una función?';
        console.log(letGlobal); // -> 'valor inicial'
        letGlobal = 'otro Valor';
    }

    // console.log(letFuncion); // -> error no esta declarada
    // let hace que la variable solo este disponible dentro de if 

}

// name2();
// console.log(letGlobal); // -> 'otro Valor'
// console.log(letFuncion); // -> error no esta declarada

//// CONST

// declara una constante en el ámbito de un bloque.

const constGlobal = 'valor inicial';

function name() {
    // ámbito de función
    console.log(constGlobal); // -> 'valor inicial'
    if (true) {
    // ámbito de bloque
    const constFuncion = 'Estoy declarada en una función?';
    console.log(constGlobal); // -> 'valor inicial'
    // constGlobal = 'otro Valor'; // error const no puede ser modificado 
    }

    // console.log(constFuncion); // -> error no esta declarada
    // const se comporta igual que let en cuanto alcance
}

console.log(constGlobal); // -> 'valor inicial'
// console.log(varFuncion); // -> error no esta declarada

//// TIPOS DE DATOS

let myVariable = 'Hello wold'; // es un string
let myVariable1 = 22; // es un number
let myVariable2 = false; // es un boolean
let myVariable3; // es un undefined
let myVariable4 = { nombre: 'mi nombre' } ; // es un objeto let
myVariable5 = null; // es un objeto (es un tipo de objeto especial) let
myVariable6 = function() { let doSomething; }; // es una function
// Se pueden comprobar estos tipos mediante el uso de typeof 
typeof myVariable // -> number

//// ESTRUCTURAS DE CONTROL

// IF
// permite ejecutar un bloque solo si se cumple una condición dada.

if (condicion) {
    // code...
}

// IF...ELSE
// Permite evaluar una condición y ejecutar un bloque de código u otro.

if (condicion) {
    // code if true
} else {
    // code if false
}

// SWITCH
// permite ejecutar diferentes acciones dependiendo del valor de una variable.

switch (variable) {
    case 1:
    // code if variable == 1;
    break;
    case 2:
    // code if variable == 2;
    break;
    default:
    // a ejecutar si no se cumple ninguna coincidencia anterior
    break;
}

//// BUCLES

// FOR
// permite ejecutar repetitivamente un bloque de código.

let n = 4;
for(var i = 0; i < n; i++) {
// código a ejecutar n veces (4)
}

/* 

SINTAXIS

for( inicial ; condición ; final ) { }

inicial: este código se ejecuta al iniciar el bucle por única vez,
comúnmente se declara una variable como se muestra en el
ejemplo.

condición: Por cada vez que termina el bloque de código
encerrado, se comprueba esta condición, si se vuelve
verdadera, el bucle finaliza y se continúa con el código
debajo.

final: Una acción a ejecutar por cada vez que se termine el bloque
a repetir, comúnmente se modifica la variable utilizada en la
condición.

*/


// WHILE
// su comportamiento es similar a un bucle 'for', pero elbloque seguirá ejecutando indefinidamente mientras la condición sea verdadera.

let n = 1;
while (n < 3) {
// código a ejecutar
}

/* 

SINTAXIS

while( condición ) { }

condición: condición a evaluar antes de cada ejecución del
bloque, si esta nunca se hace falsa, el bucle quedará corriendo
indefinidamente.

*/

// DO...WHILE

// Permite ejecutar un bloque de código mientras una condición sea verdadera. A diferencia de while la condición se evalúa al final de cada ejecución, esto se traduce en que el bloque encerrado se ejecuta al menos una vez.

do {
// código a ejecutar
} while (n < 3);