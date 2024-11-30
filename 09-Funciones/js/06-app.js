//si hago un return en mitad del código, en ese punto se saldrá de la función, devolviendo lo que tenga ahí

function Sumar (a,b) {
    return a+b;
}

let resultado=Sumar(2,3);


// Otro ejemplo

let total=0;
function AgregarCarrito(precio){

    return total+=precio;
}

function CalcularImpuesto(total){
   return total*1.12;
}

total=AgregarCarrito(300);
total=AgregarCarrito(100);

let totalPagar=CalcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar} `);