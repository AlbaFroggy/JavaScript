/*En localstorage: el almacenamiento local, aunque se cierre sesión, la información sigue ahí
El almacenamiento en sesión guarda el almacenamiento mientras tenemos la sesión abierta,
si la cerramos se pierde, y si cerramos el navegador igual
IndexedDB es una base de datos
*/

/*el localstorage SOLO ALMACENA STRINGS*/
localStorage.setItem('nombre','Pedro');

sessionStorage.setItem('nombre','Dolores');

const producto={
    nombre:"Monitor 24 pulgadas",
    precio:300,
}
//cómo pasamos un objeto
//hay que pasarlo a string

const productoString=JSON.stringify(producto);
console.log(productoString); //sale así: {"nombre":"Monitor 24 pulgadas","precio":300}

localStorage.setItem('producto',productoString); //clave producto, valor productoString


//cómo pasamos un array
const meses=['enero','febrero','marzo'];
const mesesString=JSON.stringify(meses);
console.log(mesesString); //sale así: {"nombre":"Monitor 24 pulgadas","precio":300}

localStorage.setItem('meses',mesesString); 
//se utiliza mucho para conservar productos en un carrito
//también para almacenar la cuenta de usuario y contraseña

