//Dada la cadena "En un lugar de la mancha",
//almacenar cada palabra en una variable y visualizarla en orden contrario

const cadena1 = "En un lugar de la mancha";
const cadena2 = cadena1.slice(0,2);
const cadena3 = cadena1.slice(3,5);
const cadena4 = cadena1.slice(6,11);
const cadena5 = cadena1.slice(12,14);
const cadena6 = cadena1.slice(15,17);
const cadena7 = cadena1.slice(18,24);

console.log(`${cadena7} ${cadena6} ${cadena5} ${cadena4} ${cadena3} ${cadena2}`)

//Dada la cadena "En un lugar de la mancha", visualizar el número de espacios en blanco que tiene.
var cadena = "En un lugar de la mancha";
var regex= / /g;
total=cadena.match(regex);
console.log(total);


//Dadas las canenas "053771456F" "Ramón Albacete tiene Dni", formar una única cadena

var cadenanum = "053771456F";
var cadenanom = "Ramón Albacete tiene Dni";
var cadenaentera = (`${cadenanom} ${cadenanum}`);
console.log(cadenaentera);

//Con una combinación de varias instrucciones realizar
//la misma acción que realiza el método replace de un string
var saludo = "Hola Mundo";
var despedida = "Adiós";
var mundo = saludo.slice(5,10);
console.log((`${despedida} ${mundo}`))

//Dada la cadena "@profesor.sebastianrv@ies-azarquiel.es", extraer solo el dominio y visualizarlo

const cadenaprof = "@profesor.sebastianrv@ies-azarquiel.es";
var dominio = cadenaprof.slice(21,38);
console.log(dominio);

//Dada la cadena "Pedro está con su amigo Pedro María y con su primo Pedro José",
//contar las veces que aparece la palabra Pedro y en qué posiciones

var cadena = "Pedro está con su amigo Pedro María y con su primo Pedro José";
var regex= /Pedro/g;
total=cadena.match(regex);
console.log(total);
