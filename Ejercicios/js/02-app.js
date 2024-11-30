const saludo = 'Hello' + 'World';
console.log("1 "+ saludo); //NO LO PONE SEPARADO PORQUE NO TIENE ESPACIO

const name = 'Amparo';
const apellido = 'García';
console.log("2 "+'Buenas tardes '+ name + ' '+ apellido);
console.log("3 "+`Buenas tardes ${name} ${apellido}`);

console.log("4 "+typeof name);

console.log("5 "+name.length);
console.log("6 "+name.includes('par'));
console.log("7 "+name.slice(3,6));  //ARO, NO PARO, PORQUE COGE A PARTIR DEL 3
console.log("8 "+name.replace('paro', 'plificador'));

const texto= "    algo que      quería    " 
console.log("9 "+texto.trim());

const geolocation = 'Paseo San Eugenio, 21, 45003, Toledo, Toledo, Spain';
console.log("10 "+geolocation.split(','));
