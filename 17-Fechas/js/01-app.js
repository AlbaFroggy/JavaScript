//funciones dentro del método fecha
//nos ayudan a la hora de establecer los diferentes formatos de fecha

const diaHoy=new Date();
//hemos creado un objeto fecha
//sacamos los datos que ha creado y los vamos almacenando

let valor;
valor=diaHoy;
console.log(valor); //consulta la hora DEL SISTEMA, aunque esta esté mal

//otra forma de hacerlo:
const otroDia=new Date('10-24-1898'); //en formato mes-dia-año
console.log(otroDia);

//sacar el año
year=diaHoy.getFullYear();
console.log(year);

//sacar el mes
month=diaHoy.getMonth(); //empiezan en 0 los meses
console.log(month);
month=diaHoy.getMonth()+1; //para tener el mes normal
console.log(month);

//sacar la hora
time=diaHoy.getTime();
console.log(time); //devuelve los segundos transcurridos desde enero de 1970

fechaActual=Date.now();
console.log(fechaActual); //devuelve los segundos transcurridos desde enero de 1970

//LIBRERÍA PARA HORAS: CDN
//https://momentjs.com/
//aquí: https://cdnjs.com/libraries/moment.js
