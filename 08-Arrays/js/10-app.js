const carrito=[
    {nombre:"Monitor 27 pulgadas", precio: 500},
    {nombre:"Televisión", precio: 100},
    {nombre:"Tablet", precio: 200},
    {nombre:"Auriculares", precio: 300},
    {nombre:"Teclado", precio: 100},
    {nombre:"Móvil", precio: 500}
];

carrito.forEach(function(producto){
    return`${producto.nombre}--Precio:${producto.precio}`;
})

carrito.map(function(producto){
    return`${producto.nombre}--Precio:${producto.precio}`;
})
//diferencia: en el primer caso, si se lo asignamos a una variable
console.log("---------------------------------------------")
const nuevoArray1= carrito.forEach(function(producto){
    return`${producto.nombre}--Precio:${producto.precio}`; //recorremos
})
console.log(nuevoArray1); //no devuelve nada

console.log("---------------------------------------------")
const nuevoArray2= carrito.map(function(producto){
    return`${producto.nombre}--Precio:${producto.precio}`; //recorremos
})
console.log(nuevoArray2); //esta sí devuelve