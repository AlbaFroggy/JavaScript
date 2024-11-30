//El problema de trabajar con los callbacks
//se conoce como efecto hell
//se convierte ilegible el código

const paises=[];
function nuevoPais(pais, callback){

        paises.push(pais);
        console.log(`Agregando:${pais}`);
        callback(); //el que le pueda pasar función a otra función se llama programación funcional

}

function mostrarPaises(){
   console.log(paises);
}

function iniciarCallbackHell(){
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('España', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Lituania', mostrarPaises);
            }, 2000);
        }, 2000);
    }, 3000);

    //no puedes poner aquí otro porque no te aseguras cuál va a meter primero
}