"use strict";
//no deja asignar un valor a un valor sin previamente declararlo

const producto={
    //clave: valor, clave: valor
    //separado por comas
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
    //el último no tiene coma
}

//para no dejar modificar
Object.freeze(producto);


console.log(Object.isFrozen(producto));
producto.imagen="jpg"; //no va a dejar
delete producto.precio; //no va a dejar
producto.precio=100; //no va a dejar