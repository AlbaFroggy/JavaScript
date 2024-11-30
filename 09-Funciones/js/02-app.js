//Por regla general no es posible llamar una hasta que no ha sido definida

Sumar(); //Devuelve 4
function Sumar(){
    console.log(2+2);
}

sumar2();  //No devuelve nada
const sumar2=function(){
    console.log(3+3);
}
