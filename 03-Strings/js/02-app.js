//Extraer información de un String
const producto='Monitor 20 pulgadas';

console.log(producto.length);
//me devuelve la longitud de la cadena

console.log(producto.indexOf('Monitor')); //En qué posición de la cadena se encuentra esa palabra,
                                        // solo de la primera que encuentre, en este caso devuelve 0
console.log(producto.indexOf('pulgadas')); // Devolvería 11 porque está en la posición 11
console.log(producto.indexOf('tablet')); // Me va a devolver -1 porque no está

"Ballena Azul, Ballena Asesina".lastIndexOf("Ballena"); //devolvería la última prosición de ballena.
                                                    // NO ES CASE SENSITIVE

                                                    //recuerda que se empieza por 0

console.log(producto.includes('Tablet')); //devuelve verdadero o falso de si está en la cadena.
                                        // SÍ ES CASE SENSITIVE

const hello = "!Hola Mundo¡";
const hellolength=hello.length; //MUY ÚTIL, MUY USADO PONERLO EN UNA VARIABLE
//NO PODEMOS HACER COMO SI FUERA UN ARRAY. ej: hello[0]="L"; 
hello[1] //devuelve H
