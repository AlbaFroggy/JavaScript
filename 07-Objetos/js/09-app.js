//dos objetos y los quiero unir

const producto={
    //clave: valor, clave: valor
    //separado por comas
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
    //el último no tiene coma
};

const medidas={
    peso: "1Kg",
    medida:"1m",
}

const resultado=Object.assign(producto,medidas);
console.log(resultado); //lo junta todo en uno llamado resultado

//Spread operator o Rest operator
//Se utiliza en los frameworks de JavaScript

const resultado2={...producto,...medidas}; //estás uniendo en resultado2 los dos objetos, usando spread
//se utiliza mucho en los arrays.

console.log(resultado2);