console.warn("Esto es un aviso");
// aunque en javascript no es necesario el ; es buena práctica porque en typesript es obligatorio
console.error("Esto es un error");
console.log("Esto es un mensaje");

console.time("INICIO");
console.warn("CUIDAAAAAAAAO");
console.warn("CUIDAAAAAAAAO");
console.warn("CUIDAAAAAAAAO");
console.timeEnd("INICIO");
// ME DA EL TIEMPO DE EJECUCIÓN DE ESOS WARNS
// Hay que poner la misma palabra que en .time

// DECLARACIÓN DE VARIABLES:
// No hay que definirles tipos, la variable lo coge en el momento de la asignación de la variable
//Con typescript sí se tipea

var producto="Monitor de 14 pulgadas";
producto="Ordenador de 32 gigabytes" //lo coge igual
producto=13; //Producto cambia el tipo en tiempo de ejecución

//Otra forma también usada:
var ordenador="PC",
    pantalla="14 pulgadas",
    teclado="Numérico";

//no se puede empezar una variable por un número: ej: var 01_variable

//Métodos de nombres de variables
//CAMEL CASE
var nombreProductoNuevo;
//en las funciones también se empieza con mayúscula

//SNAKE CASE
var nombre_producto_nuevo;