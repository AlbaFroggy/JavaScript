//INCLUDES Y SOME
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Auriculares', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
]

//Comprobar si un valor existe en un array

meses.forEach(mes =>{
    if (mes==='Enero'){
        console.log('Enero existe');
    }
});

//Includes solo funciona en un array simple, no funciona en un array de objetos
//Devuelve verdadero o falso
const resultado=meses.includes('Enero');
console.log(resultado);
const resultado1=meses.includes('Agosto');

//.includes no sirve para el array de objetos, para eso se utiliza el .some !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//En un array de objetos
//devuelve verdadero o falso
const existe=carrito.some((producto)=>{
    return producto.nombre === 'Tablet'
})
console.log(existe);
//de forma directa:
const existe1=carrito.some(producto=>producto.nombre === 'Tablet');
//some también soporta array simples
const existe2=meses.some(meses=>mes==='Febrero');