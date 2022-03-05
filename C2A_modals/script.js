// VENTANAS DE DIALOGO

alert("ALERTA!!");

// CAPTURA DE DATOS

confirm("¿Está seguro de que desea refrescar la página? Los cambios podrían no guardarse.");

console.log(confirm("¿Está seguro de que desea refrescar la página? Los cambios podrían no guardarse."));

let confirma = confirm("¿Está seguro de que desea refrescar la página? Los cambios podrían no guardarse.");

function confirmacion() {
    if (confirma) {
        console.log("SE REFRESCA LA PAGINA")
    } else {
        console.log("NO SE REFRESCA LA PAGINA")
    }
}

console.log(confirmacion());

prompt("Por favor, ingrese su edad:");

console.log(prompt("Por favor, ingrese su edad:"));

let edad = prompt("Por favor, ingrese su edad:");

function ingresoEdad() {
    if (edad =! null) {
        console.log(edad)
    } else {
        console.log("NO INGRESO EDAD")
    }
}

// MANIPULACION DE DATOS

let edadInt = parseInt(prompt("Por favor, ingrese su edad:"));
console.log("SU EDAD MAS 20 AÑOS ES: ", edadInt + 20);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MATH

let pi = Math.PI;
let aleatorio = Math.random(); // --> entre 0 y 1
let redondeo = Math.round(aleatorio); 
let mayor = Math.max(10, 20, 30, 40);

console.log(pi);
console.log(aleatorio);
console.log(redondeo);
console.log(mayor);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BUCLES ESPECIFICOS

let persona = {
    nombre: "María Belén",
    apellido: "Carrere",
    edad: 21
}

for (let caracteristica in persona) {
    console.log(caracteristica);
}

for (let caracteristica in persona) {
    console.log(persona[caracteristica]);
}

let ciudades = ["Rafaela", "Buenos Aires", "Cordoba"];

for (let ciudad of ciudades) {
    console.log(ciudad);
}




