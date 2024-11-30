const producto={
    //clave: valor, clave: valor
    //separado por comas
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
    //el último no tiene coma
}

console.log(producto.nombre);

//esto era la parte anterior del ECMAScript v6, a partir de eso, se utiliza:
//DESTRUCTURING

const {nombre}=producto;
//me ha creado una constante que se llama nombre cuyo contenido es el contenido de nombre del producto
console.log(nombre);

const {precio}=producto;
console.log(precio);
//coge el precio

//si pongo uno que no existe
const {imagen}=producto;
//va a devolver undefined
console.log(imagen);

const{disponible,unidades}=producto;
//me crea dos variables cuyo contenido tiene los valores que tenían en producto
