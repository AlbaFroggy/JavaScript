//FIND

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Auriculares', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];
//devolvemos el elemento y el índice
let resultado='';
carrito.forEach((producto,index)=>{
    if(producto.nombre==='Tablet'){
        resultado=carrito[index];
    }
});

//Con el find obtenemos el mismo resultado que el anterior,
//pero sólo devuelve el primer elemento que cumple la condición. !!!!
let resultado2=carrito.find( producto=>producto.nombre ==='Tablet');
console.log(resultado2);