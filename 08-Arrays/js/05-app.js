//Estructura pila
//4         
//3         3
//2         2       2
//1         1       1
// Pila (Stack): Una estructura de datos que sigue el principio LIFO (Last In, First Out)

//pero no te tiene que dejar quitar el 3 al principio

//Estructura cola
//Cola (Queue): La cola sigue el principio FIFO (First In, First Out)
//como la cola del pan, la tiene y se va a su casa
//no saca uno del medio y despacharlo o cambiar el orden

const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio'];
//crear un nuevo valor en el array y ponerlo al final:
meses.push('Julio');
//Se tiene un array de meses, y usando el método push(), se agrega un nuevo elemento ('Julio') al final
//Esto sigue el comportamiento de cola, porque se inserta al final,
//como cuando alguien se pone al final de la fila.
console.table(meses);


const carrito=[]; //inicializa a 0, vacío
const producto={
    nombre:"tortilla de patata",
    precio:2
}

carrito.push(producto); //le mete producto a carrito
console.table(carrito);

//producto.nombre="Aceite 1L";
//producto.precio=4;
//carrito.push(producto);
//Si agregas el mismo objeto (sin crear uno nuevo), estás trabajando con la misma instancia del objeto en memoria.
//el carrito mostraría el mismo producto modificado dos veces, en lugar de agregar un nuevo producto
//console.table(carrito);

//tienes un array que solo tiene 1 elemento
//le añades otro producto- es el mismo push porque ya estaba apuntando, es la misma instancia


const producto1={
    nombre:"Aceite 1L",
    precio:4
}
carrito.push(producto1); //encola el elemento
console.table(carrito);
//si queremos desencolar:
carrito.unshift(producto1); //apila el elemento, así que lo deja también al principio del todo
//y lo dejamos en esa variable el producto 2 // me disminuye los elementos de aquí
console.table(carrito);