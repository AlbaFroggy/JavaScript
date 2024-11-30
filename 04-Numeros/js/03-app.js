//OPERACIONES MÁS UTILIZADAS

let resultado;
//Para almacenar el número pi
resultado=Math.PI;
console.log(resultado);

//Para redondear
resultado=Math.round(2.8); //devuelve un 3
console.log(resultado);
resultado=Math.round(2.2); //devuelve un 2
console.log(resultado);
resultado=Math.round(2.5); //devuelve un 3
console.log(resultado);

//Función techo: si estás entre 0 y 1 es 1, entre 1 y 2 es 2
//Función suelo: si estás entre 0 y 1 es 0, entre 1 y 2 es 1
resultado=Math.ceil(2.1); //techo
console.log(resultado);
resultado=Math.floor(2.3); //suelo
console.log(resultado);

//La raíz cuadrada
resultado=Math.sqrt(34);
console.log(resultado);

//El absoluto
resultado=Math.abs(-35);
console.log(resultado);

//potencia
resultado=Math.pow(2,4);
console.log(resultado);

//mínimo
resultado=Math.min(2,5,-1,7,-67);
console.log(resultado);
//máximo
resultado=Math.max(2,5,-1,7,-67);
console.log(resultado);

//random entre 0 y 10
resultado=Math.random();
resultado=Math.random()*10; 
//te puede devolver centésimas, a menos que hagas:
resultado=Math.floor(Math.random()*30); //entre 1 y 30 SIN DECIMALES

