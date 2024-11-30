//reexplicación 05-app.js

const carrito=[];
const producto={
    nombre:"lentejas 300g",
    precio:2
}
const producto1={
    nombre:"tomates 1Kg",
    precio:3
}
const producto2={
    nombre:"lata de atun",
    precio:1
}

//en cola
//va metiendo por detrás con push y va sacando por delante con shift

//en pila
//unshift es la operación de ir poniendo en una pila desde arriba
//pop es el que quita desde arriba también

//FUNCIONAMIENTO COLA
console.log("COLA");
carrito.push(producto);
carrito.push(producto1);
console.table(carrito); //lentejas en 0, tomates en 1

carrito.push(producto2); //lentejas en 0, tomates en 1, atún en 3
console.table(carrito);

carrito.shift();
console.table(carrito); //quita las lentejas
carrito.shift();
console.table(carrito); //quita los tomates y solo nos queda el atún
carrito.shift();
console.table(carrito); //vacío

console.log("PILA");
//FUNCIONAMIENTO PILA
carrito.unshift(producto);
console.table(carrito);
carrito.unshift(producto1);
console.table(carrito); //pone los tomates en el 0 y traslada las lentejas al 1
carrito.unshift(producto2);
console.table(carrito);

carrito.pop(); //quitas el de la última posición, que es el primero que hemos metido
console.table(carrito);