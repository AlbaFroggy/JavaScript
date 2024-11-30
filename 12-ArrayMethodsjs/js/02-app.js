//FIND INDEX !!!!!!

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Auriculares', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];

meses.forEach((mes,index)=>{
    if(mes==='Abril'){
        console.log(`Encontrado en el indice ${index}`);
    }
});

//Hay un método para resolver la situación anterior

const indice = meses.findIndex(mes=>mes==='Abril');
console.log(indice);
//Si el elemento a buscar no existe devuelve un -1

//Encontrar un indice de un array de objeto

const indice2 =carrito.findIndex(producto => producto.precio===100);
//Devuelve el indice del primer elemento que encuentra, aunque lo cumplan más elementos.
console.log(indice2);

