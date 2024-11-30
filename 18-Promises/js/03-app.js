const aplicarDescuento = new Promise((resolve, reject) => {
    //const descuento=true;
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else { reject('no se puede aplicar descuento') };
});
//dos métodos de la promesa: resolve y reject
// en el reject te devuelve lo que le digas que vdevuelva, como en el catch de java

console.log(aplicarDescuento);

//CON MENOS CÓFIGO
aplicarDescuento
    .then(resultado => {
        descuento(resultado);
    })
    .catch(error => {
        console.log(error);
    })
    function descuento(resultado){
        console.log(resultado);
    }

//si es sorrecto, que ejecute una función que hva a ser descuentomensaje

