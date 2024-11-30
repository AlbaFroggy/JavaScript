const pendientes=['Limpiar la cocina','Estudiar JavaScript','Trabajo HTML','Hacer la cama'];

pendientes.forEach((pendiente)=>{
     console.log(pendiente);
})

//COMO SÓLO TIENE UNA LÍNEA SE PUEDE PONER DE ESTA FORMA
pendientes.forEach((pendiente)=>console.log(pendiente))
//COMO SÓLO TIENE UN PARÁMETRO SE PUEDE PONER DE ESTA FORMA
pendientes.forEach(pendiente=>console.log(pendiente))

//El foreach va a devolver en indice, el valor del indice del array
//MUY MUY IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Cuando tratamos una pag html de forma dinámica, estamos cargando muchos datos que posiblemente vienen de un array
//el html y el javascript tiene que estar en consonancia, que se hará así:

pendientes.forEach((pendiente,indice)=>console.log(`${indice}:${pendiente}`))
//pendiente es el valor temporal que va recogiendo cada valor del array y índice es el índice del array
//él automáticamente va poniendo en índice el índice por donde está
const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Auriculares', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];

carrito.forEach(producto => console.log(producto.nombre));

carrito.map(producto=>console.log(producto.nombre));

const nuevoArray=carrito.forEach(producto => producto.nombre);
const nuevoArray2=carrito.map(producto=>producto.nombre);

