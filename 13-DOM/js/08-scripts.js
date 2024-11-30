//SE LE CONOCE CON EL TÉRMINO DE: TRAVERSING THE DOM
//consiste en ir navegando por una jerarquía de una estructura en árbol pero con comandos de js
//una vez estés posicionado donde interese se hacen las modificaciones o lo que se tenga que hacer


//seleccionar la etiqueta nav y concretamente los elementos que tengan la clase navegación
const navegacion=document.querySelector('nav.navegacion');
//esta operación es equivalente a esta otra:
//const navegacion=document.querySelector('.navegacion');

console.log(navegacion);
//devuelve: 
/*<nav class="navegacion">
<a href="#">Vender</a>
<a href="#">Ayuda</a>
<a href="#">Registro</a>
<a href="#">Iniciar Sesión</a>
</nav>*/


//para que te devuelva el conjunto de nodos que derivan de forma directa de navegación (SUS HIJOS)
//console.log(navegacion.childNodes);
//ESTO SE REEMPLAZA POR:
console.log(navegacion.children);
//te devuelve los hijos *directos* de navegación
//además, puedes seleccionar uno en concreto porque te devuelve un array HTMLCollection
console.log(navegacion.children[2]);
//incluso puedes coger los atributos de ese elemento:
//el nombre del nodo
console.log(navegacion.children[2].nodeName);
//el tipo del nodo
console.log(navegacion.children[2].nodeType);
//si nos metemos a javascript, el de tipo 1 es de tipo elemento y el a es de enlace


//OTRO EJEMPLO:
//seleccionar las tarjetas
const card=document.querySelector('.card');
//elegimos
//recordamos que los arrays empiezan por 0
console.log(card.children[1].children);
//sacamos la información del hijo del hijo:
console.log(card.children[1].children[1].textContent)
//para modificar ese texto:
card.children[1].children[1].textContent='Rock sinfónico';
console.log(card.children[1].children[1].textContent)

//cambiar imágenes
card.children[0].src='img/hacer2.jpg';

//NOTA:
//cuando tenemos listas o tablas en html esto va a ser esencial, porque las listas son dinámicas


//NAVEGAR DE LOS HIJOS AL PADRE EN VEZ DEL PADRE A LOS HIJOS
//console.log(card.parentNode);
//más cómodo:
console.log(card.parentElement);
console.log(card.parentElement.parentElement.parentElement);

//HERMANOS (mismo padre)
console.log(card.nextElementSibling); //el siguiente hermano del que hayamos seleccionado
//horizontalmente el que tenga inmediatamente a la derecha
console.log(card.nextElementSibling.nextElementSibling); //el hermano del hermano

//ir directamente al primer hijo o al último hijo:
const navegacion2 = document.querySelector('.navegacion')
console.log(navegacion2.firstElementChild);
console.log(navegacion2.lastElementChild);