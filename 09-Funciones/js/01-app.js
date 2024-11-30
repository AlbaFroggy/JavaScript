//Declarar a la vieja usanza

function Sumar(){
    console.log(2+2);
}

Sumar();

//Nueva forma:
//Declaraciónn de una funcion como una expresión
//Es obligatorio poner const

const sumar2=function(){
    console.log(3+3);
}

sumar2();