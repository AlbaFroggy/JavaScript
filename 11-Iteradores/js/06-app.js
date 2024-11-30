// FOR OF !!!!!!!!!!

const pendientes=['Limpiar la cocina','Estudiar JavaScript','Trabajo HTML','Hacer la cama'];

const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Auriculares', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];

//El for of itera sobre arrays
for (let pendiente of pendientes){
    console.log(pendiente);
}

for (let producto of carrito){
    console.log(producto.nombre);
} //no itera sobre arrays complejos