const numeros=[10,10,20,30,50];
const numeros2D=[10,10,20,30,50,[10,11,12,13]];
console.table(numeros); //el array se refleja como una tabla en la consola
console.table(numeros2D); //sale más ancho

//el acceso a los elementos del array es igual a java
console.log(numeros[2]); //imprime 20
console.log(numeros2D[5][3]); //Imprime 13