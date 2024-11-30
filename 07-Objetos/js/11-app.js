//constructor:
//OBJECT CONSTRUCTOR !!!!!!!!!!!!!!!!!!!!!!!!!!!

//se crea un objeto literal llamado producto con las siguientes propiedades
const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
    
};

//función constructor Producto para crear objetos de manera más dinámica, con propiedades personalizables
function Producto(nombre,precio, unidades){
    this.nombre=nombre; //el objeto me lo crea aquí con estos valores
    this.precio=precio; // asigna el valor pasado como argumento a la propiedad nombre del objeto
    this.disponible=true; // establece la propiedad disponible siempre en true por defecto
    this.unidades=unidades;
}
const producto2 = new Producto ("Tablet", 2000, 5);
console.log(producto2);
const producto3 = new Producto ("Portátil 15 pulgadas", 1000, 8);
console.log(producto3);