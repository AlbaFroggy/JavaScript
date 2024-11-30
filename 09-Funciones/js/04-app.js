//PARÁMETROS Y ARGUMENTOS
//Parámetros: se declaran en la función
//No hay tipo, lo que le pase es lo que coge

function Sumar(a,b){ //parámetros
    console.log(a+b);
}

Sumar(2,3); //argumentos


function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Enrique","Galindo");

//Parámetros por default !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//por defecto él pone 1 si no le pasamos parámetros


function saludar2(nombre='Desconocido', apellido='No tiene apellido'){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar2("Pedro");

