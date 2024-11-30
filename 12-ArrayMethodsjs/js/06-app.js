//EVERY


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Auriculares', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];

//Todos los elementos de un array deben cumplir la condición para que devuelva true
//va a devolver verdadero o falso si todos los elementos del array la cumplen!

let resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado) //devuelve verdadero
resultado = carrito.every(producto => producto.precio < 400);
console.log(resultado) //devuelve falso