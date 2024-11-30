let nombre = "Pepe";
let apellido = "Ramirez";
let nombre_completo=nombre+ ' '+ apellido;
console.log("1 "+nombre_completo);

//template literals
let curso='SDAW';
nombre_completo=`${nombre} ${apellido}`;
let saludo = `Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}`;
console.log("2 "+saludo);
//typeof
console.log("3 "+typeof saludo);
//.length
console.log("4 "+nombre.length);
//includes(subcadena) --> devuelve booleano que dice si esta o no una subcadena
console.log("5 "+saludo.includes('bien345534'));
//.slice (start, end)
console.log("6 "+saludo.slice(12,17));
//.replace("este texto", "por este otro")
console.log("7 "+saludo.replace('Pepe','Manolo'));
//.trim()
let cadena='        hola    mundo       ';
console.log("8 "+cadena.trim());