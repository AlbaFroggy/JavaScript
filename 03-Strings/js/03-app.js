// Concatenar cadenas
const producto='Monitor 20 pulgadas';
const precio='70 euros'

var mivar=producto.concat(precio);
console.log(mivar); //sacaría la concatenación
mivar=producto.concat('20% de descuento'); //le hemos puesto directamente el literal
console.log(mivar);

//CONCATENACIONES
//VERSIÓN ANTIGUA DE CONCATENAR
console.log(producto+" con un precio de "+precio); //concatenar entre medias
console.log(producto," con un precio de ",precio); //TAMBIÉN SE PUEDE CON UNA COMA EN VEZ DE CON +

//VERSIÓN ECMASCRIPT 6 - la actual
console.log(`El producto ${producto} tiene un precio ${precio}`);
