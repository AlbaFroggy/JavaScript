const numero3 = 30;
const numero1 = 20;
const numero2 = "20";

//curiosidad de javascript

console.log(numero1 == numero3); //false
console.log(numero1 == numero2); //true, aun siendo de diferente tipo
console.log(numero1 === numero2); //false, porque los tres = , además de comparar si el contenido es igual,
//compara también el tipo

console.log(numero1===parseInt(numero2)); //true porque hemos convertido el número2 en entero

const password1="admin";
const password2="Admin";

console.log(password1!=password2); // true porque sí son distintos
console.log(numero1!=numero2); //false porque no son distintos
console.log(numero1!==numero2); //true porque SÍ SON DISTINTOS EN TIPOS