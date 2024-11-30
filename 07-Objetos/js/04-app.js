const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    unidades:4,
    información:{
        garantía:'1 año',
        seguro:60
    }
}
//la forma de extraerlo:
console.log(producto.información.seguro);
console.log(producto.información); //sacaría el objeto