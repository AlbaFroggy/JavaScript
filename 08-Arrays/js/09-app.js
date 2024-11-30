//RECORRER ARRAYS
//hacemos un array de objetos
const carrito=[
    {nombre:"Monitor 27 pulgadas", precio: 500},
    {nombre:"Televisión", precio: 100},
    {nombre:"Tablet", precio: 200},
    {nombre:"Auriculares", precio: 300},
    {nombre:"Teclado", precio: 100},
    {nombre:"Móvil", precio: 500}
];
//forma de recorrerlo: con for !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

for(let i=0;i<carrito.length;i++){
    console.log(carrito[i].nombre);
    console.log(`${carrito[i].nombre} Precio ${carrito[i].precio}`);
}

//otra forma más utilizada si quieres recorrerlo todo
//la otra es mejor si quieres ir alternando (por ej, divisible entre dos)
console.log("---------------------------------------------")
carrito.forEach(function(producto){
    console.log(`${producto.nombre}--Precio:${producto.precio}`);
})