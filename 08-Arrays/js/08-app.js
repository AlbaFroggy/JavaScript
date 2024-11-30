
const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

//Destructuring

const {nombre}=producto; //varible con el contenido de producto
console.log(nombre);

const numeros=[10,20,30,40,50];
const[primero]=numeros;
//te crea una variable que se llama primero con el contenido de la posición 0 del array, o sea el 10
console.log(primero);

const [primer,segun,tercer]= numeros;

//quiero el cuarto sin pasar por todas las variables:
const [,,,cuarto]=numeros; //te devuelve el cuarto de números, saltando los demás
console.log(cuarto);

//para hacerlo de forma alterna
const [,segundo,,cuar]=numeros; //devuelve el segundo y el cuarto
const [pri,seg,...ter]=numeros; //ter tendrá el resto del array
console.log(ter);