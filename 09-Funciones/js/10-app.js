const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Auriculares', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];

//El foreach es un arrow function
const nuevoArray1=carrito.forEach((producto)=>{
    //en el nuevoArray1 recordar que el return con el foreach no devuelve a nuevoArray1 nada,
    //a diferencia del map, que construye un array con el resultado de los returns que devuelve en cada vuelta
    return `${producto.nombre}-Precio:${producto.precio}`;    

} );  //No Crea la variable por lo que nuevoArray1 estará vacio !!

const nuevoArray2=carrito.map((producto)=>{
    return `${producto.nombre}-Precio:${producto.precio}`;    

} );       //Map crea un nuevo array donde mete el resultado !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log(nuevoArray1);
console.log(nuevoArray2);


//Podemos quitar los paréntesis porque sólo hay un parámetro

const nuevoArray3=carrito.map(producto=>{
    return `${producto.nombre}-Precio:${producto.precio}`;    

} ); 

console.log(nuevoArray3);

//Cuando sólo hay una línea puedo quitar las llaves

const nuevoArray4=carrito.map( producto=>`${producto.nombre}-Precio:${producto.precio}`);
console.log(nuevoArray4); 