//https://momentjs.com/

//fecha formato europeo
const fechaFormatoEU=new Date().toLocaleDateString(); //lo almacena con el formato de la zona
console.log(fechaFormatoEU);

//hora formato europeo
const horaFormatoEU=new Date().toLocaleTimeString();
console.log(horaFormatoEU);

moment.locale('es'); //biblioteca a la que estamos accediendo
console.log(moment().format('MMMM D YYYY')); //octubre 28 2024
console.log(moment().format('MMMM D YYYY hh:mm:ss')); //octubre 28 2024 04:11:05
console.log(moment().format('DD MM YYYY')); //28 10 2024

//otros:
console.log(moment().format("MMM Do YY")); //oct. 28º 24
console.log(moment().format('dddd')); //lunes
console.log(moment().format()); //2024-10-28T16:11:58+01:00