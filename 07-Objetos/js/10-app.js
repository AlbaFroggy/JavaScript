const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
    mostrarInfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio} euros`) //hay que hacer referencia a que el elemento se refiere a x objeto
    }
};

const producto2={
    nombre:"Tablet",
    precio:250,
    disponible:true,
    unidades:10,
    mostrarInfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio} euros`) //hay que hacer referencia a que el elemento se refiere a x objeto
    }
};

//para llamarlo:
producto.mostrarInfo();
producto2.mostrarInfo();

