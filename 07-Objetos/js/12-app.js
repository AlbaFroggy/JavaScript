const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
};
//Hay 2 métodos de objetos que sirven para inspeccionar el tipo de objeto que es
console.log(Object.keys(producto)); //Devuelve las claves - nombres de las variables
claves = Object.keys(producto);
console.log(claves); //Devuelve un array

//Retorna los valores que contiene el objeto
console.log(Object.values(producto));

//Devuelve un array que contiene otro array con los valores clave-valor (el nombre de la propiedad y su valor)
console.log(Object.entries(producto)); //Devuelve todo lo que contiene el producto