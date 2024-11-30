const producto={
    //clave: valor, clave: valor
    //separado por comas
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
    //el último no tiene coma
}

console.log(producto);
producto.imagen="imagen.jpg";
//en tiempo de ejecución se pueden crear nuevos campos o propiedades dentro de ese objeto,
//sin acceder a la declaración, que es algo que no se puede hacer en java

console.log(producto);

//borrar una propiedad
delete producto.disponible;
console.log(producto);
