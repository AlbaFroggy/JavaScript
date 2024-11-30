//REDUCE

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Auriculares', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];


let total=0;
carrito.forEach(producto =>total+=producto.precio);

console.log(total);

//para calcular valores de forma más rápida sin usar foreach con ifs
let resultado=carrito.reduce((total,producto)=>total+producto.precio,0);
//TOTAL SE INICIA A CERO, QUE SE CORRESPONDE CON EL ÚLTIMO PARÁMETRO
console.log(resultado);
let resultado2=carrito.reduce((total,producto)=>total+producto.precio,200);
//Total se inicia a 200
console.log(resultado2);


