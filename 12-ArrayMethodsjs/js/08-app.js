const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Auriculares', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];

let meses2=[...meses,'Agosto']; //lo colocas en la última posición
let meses3=['Septiembre',...meses]; //lo colocas en la 1era posición

//Esto no modifica el array original !!!!!!!!!!!!!!!!!!!!!!
console.log(meses2);
console.log(meses3);

meses.push('Septiembre');
//Este sí modifica el array original

let producto ={
    nombre:'Disco duro',precio:300
}

const carrito2 = [...carrito,producto];

console.log(carrito2);