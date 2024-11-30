const producto='Monitor 20 pulgadas';

const texto=' en promocion'.repeat(3);

//lo vamos hacer literal
const cadenaFinal=`${producto}${texto}!!!!!!!!!!!!!`;
console.log(cadenaFinal);

//permite dividir una cadena en funcion de un caracter o de varios caracteres
const actividad='Estoy esperando que me hagan la cena';
//nos va a devolver un array con tantos elementos tenga
const cadenaSplit=actividad.split(" ");
console.log(cadenaSplit);


var hobbies='Leer, escuchar musica, escribir diario, lavar';
cadenaHobbies=hobbies.split(",");

var cadena = "Pedro esta con sus amigos Pedro Maria y Pedro Luis";
var regex= /Pedro/g;
//dentro de la cadena, qué palabras encajan con la expresión regular !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//me devolverá un array con el número de veces que aparece esa expresión
total=cadena.match(regex);
console.log(total);
//que empiecen por e, por a, o por ea
//sin la g solo busca la primera que encuentre
//var regex= /[e,a]*/g;
//total=cadena.match(regex);
//console.log(total);

//para ponerlo todo en mayúsculas o minúsculas
var cadenaMay = producto.toUpperCase();
console.log(cadenaMay);
var cadenaMin = producto.toLowerCase();
console.log(cadenaMin);

//pasar a string
const precio = 200;
var precioStr = precio.toString;
console.log(precioStr);

