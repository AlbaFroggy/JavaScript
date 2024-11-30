//Declaraciones de constantes
const producto1="Monitor 20 pulgadas";
const producto2=String('Monitor 24 pulgadas');
const producto3=new String('Teclado');

console.log(producto1);
console.log(producto2);
console.log(producto3);

//como son los 2 string puedo hacer intercambios entre ellos
producto1=String('Monitor 24');
producto2="Monitor 20 \"";
//  con el \ le quitamos el significado por defecto que tiene el símbolo y dibuja las 2 comillas          !!!!!!!!!
// no se podría hacer producto1=producto2 porque son constantes
