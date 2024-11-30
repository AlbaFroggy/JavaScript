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

//ESTO SE CONOCE COMO SPREAD
let resultado;
resultado=[...carrito,producto];
resultado=[...carrito,producto1];//para meter otro producto en el carrito
resultado=[producto2,...resultado];
console.log(resultado);