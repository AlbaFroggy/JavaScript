
//si el objeto lo declaramos como una variable, las propiedades no se pueden cambiar !!!!!
//con const sí se pueden cambiar

let estudiante = {
    nombre:"Pablo",
    apellidos: "Nogales Puebla",
    edad: 28,
    estado: soltero
}

const producto={
    //clave: valor, clave: valor
    //separado por comas
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
    //el último no tiene coma
}

//borrar
delete producto.precio;
delete estudiante.edad; // se puede hacer pero no se puede cambiar el valor de las variables
