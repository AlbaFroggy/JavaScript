let elemento;
elemento=document;
//console.log(elemento);
elemento=document.head;
console.log(elemento);

//sacar otro elemento
let elemento1=document.body;
console.log(elemento1);
let elemento3=document.forms;
console.log(elemento3);

elemento=document.forms[0];
//extraer info de una etiqueta en concreto:
elemento=document.forms[0].id;
console.log(elemento);

elemento=document.forms[0].method;
//que me saque una lista de clases que tiene:
elemento=document.forms[0].classList;
console.log(elemento);

//array de enlaces:
elemento=document.links;
console.log(elemento);

//para devolver el 4 enlace
elemento=document.links[4];
//devolver las clases del 4 enlace
elemento=document.links[4].classList; //IMPORTANTE LA L MAYÚSCULA
console.log(elemento);

//sacar etiquetas que sean imágenes
elemento=document.images;
console.log(elemento);

//sacar etiquetas que sean scripts
elemento=document.scripts;
console.log(elemento);

//el objeto que devuelve es el array HTMLCollection !!!!!!!!!!!!

