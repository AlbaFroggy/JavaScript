//MÉTODOS PARA RECONVERTIR DATOS

const numero1 = "20"; //string
const numero2 = "20.2"; //string
const numero3 = "uno"; //string
const numero4 = 20; //entero

//tenemos un método que nos identifica el tipo

console.log(typeof numero1); //para decirte el tipo

//podemos convertir la variable a lo que queramos
console.log(Number.parseInt(numero1)); //lo convierto en un entero
var mivar=Number.parseInt(numero1); //mi var coge automáticamente que es un entero
console.log(Number.parseInt(numero2)); //lo convierte en entero (le quita la coma)
console.log(Number.parseFloat(numero2)); //convierte en coma flotante (le deja la coma)
console.log(Number.parseInt(numero3)) //aquí me devolvería un tipo que se ha inventado javascript: devuelve NaN (not a number)

console.log(Number.isInteger(numero4)); //devuelve true
console.log(Number.isInteger(numero3)); //devuelve false

console.log(Number.parseFloat(numero2).toFixed(2)); //lo corta a dos decimales

