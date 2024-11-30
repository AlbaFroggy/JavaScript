//INCREMENTO Y DECREMENTO

let puntos = 5;
//puntos++; //incremento puntos
//console.log(puntos);

//en el primer caso es igual a
let punt=puntos++;
//let punt = puntos;
//punt=punt+1;

//++puntos; //también incremento puntos
//console.log(puntos);
//let punt= ++puntos;
//en este caso://puntos=puntos+1;
//punt=puntos;

let puntuax = 10;
let puntuay = 20;
// let puntuaz = ++puntuax*++puntuay; //primero incrementa y luego hace la operación
// console.log(puntuaz); //en esta da 231 y puntuax=11, puntuay=21
let puntuazz=puntuax++*puntuay++; //primero hace la operación y luego incrementa
console.log(puntuazz); // da 200 y puntuax=11 puntuay=21

puntos +=3 // puntos=puntos+3;
