const producto='Monitor 20 pulgadas';
//método que me permite reemplazar una letra por algo
var nuevacadena=producto.replace('pulgadas','"');
console.log(nuevacadena); //para comprobar la salida
nuevacadena=producto.replace('Monitor','Monitor curvo');
console.log(nuevacadena);

//devolver los 10 primeros porque lo "partes":
nuevacadena=producto.slice(0,10);
console.log(nuevacadena);
//devolver desde el 8 hasta el final
nuevacadena=producto.slice(8);
console.log(nuevacadena);

//Alternativa al slice:
nuevacadena=producto.substring(0,10);
console.log(nuevacadena);

//Extraer un caracter solo:
const usuario='Rodrigo';
charCadena=usuario.charAt(0); //devuelve la "r"
console.log(nuevacadena);

const cadenaOriginal='Brave new world';
cadenaNueva=cadenaOriginal.charAt(14).concat(cadenaOriginal.charAt(13).concat(cadenaOriginal.charAt(13).concat(cadenaOriginal.charAt(12).concat(cadenaOriginal.charAt(11).concat(cadenaOriginal.charAt(10).concat(cadenaOriginal.charAt(9).concat(cadenaOriginal.charAt(8).concat(cadenaOriginal.charAt(7).concat(cadenaOriginal.charAt(6).concat(cadenaOriginal.charAt(5).concat(cadenaOriginal.charAt(4).concat(cadenaOriginal.charAt(3).concat(cadenaOriginal.charAt(2).concat(cadenaOriginal.charAt(1).concat(cadenaOriginal.charAt(0))))))))))))))));
console.log(cadenaNueva);

//también se podría:
//cadenaNueva=cadenaOriginal.charAt(cadenaOriginal.length).concat(cadenaOriginal.length-1) ... 