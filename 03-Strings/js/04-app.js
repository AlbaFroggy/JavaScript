//Strings- continuación

const producto='     Monitor 24 pulgadas     '
console.log(producto.length);
//método que elimina los espacios en blanco del principio:
console.log(producto.trimStart());
//método que elimina los espacios en blanco del final:
console.log(producto.trimEnd());
//método que elimina los espacios en blanco de delante y de detrás
console.log(producto.trimStart().trimEnd()); //PONER SIEMPRE EN TODOS ESTOS LOS ()

//INSTRUCCIÓN ANTIGUA:
console.log(producto.trim()); //solo existía esta antes

console.log(producto.trim().length); 
