"use strict"
const producto={
    //clave: valor, clave: valor
    //separado por comas
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
    //el último no tiene coma
};


//Con el método seal no se puede agregar ni eliminar propiedades,
//solo se puede modificar el contenido de las propiedades
Object.seal(producto);
//a partir de ese instante podemos modificar el producto
producto.disponible=false;
//delete producto.precio;
console.log(Object.isSealed(producto));
console.log(producto)