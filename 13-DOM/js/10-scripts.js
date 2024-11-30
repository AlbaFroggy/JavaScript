//CREAR UN ELEMENTO Y AÑADÍRSELO AL DOM
//crear un enlae y le asignamos una función para que cuando pulsemos haga algo

const enlace = document.createElement('a');
//a este elemento le añadimos su texto
enlace.textContent='Nuevo enlace';
//ese texto aparece en el navbar
//le damos el atributo href
enlace.href='/nuevo-enlace';
//inicialmente lo ponemos en modo blank
enlace.target='_blank';
//le creamos un artículo personalizado
enlace.setAttribute('mi_atributo','nuevo-enlace');
//le podemos añadir una clase o varias
enlace.classList.add('mi_clase');
//como es un enlace, le vamos a asociar una función para cuando hagamos click sobre el enlace
enlace.onclick=miFuncion; //importante, sin () !!!!!!!!!!!!!!!!!!!!!!

function miFuncion() {
    alert("Has pulsado nuevo enlace");
}

//todavía no tiene una ubicación dentro del dom

//para ello, seleccionamos un elemento del dom donde aproximadamente lo queremos colocar
const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(enlace);
//esto hace que lo coloque AL FINAL

//navegacion.insertBefore(enlace, navegacion.children[1]);
//esto hace que lo coloque ANTES DEL PRIMERO



//EJEMPLO CREAR UNA TARJETA DE FORMA DINÁMICA
//primero, creamos el elemento (el nodo con todos los atributos que me hagan falta)
//luego tengo que localizar el sitio del dom donde la quiero añadir
//y después lo insertamos ahí

const parrafo1=document.createElement('p');
parrafo1.textContent='Concierto'; //lo que va a contener el párrafo
parrafo1.classList=('categoria','concierto'); //le damos 2 estilos
//como las tarjetas tienen 3 párrafos, hay que crear 3 párrafos:
const parrafo2=document.createElement('p');
parrafo2.textContent='Concierto de Rock'; 
parrafo2.classList=('titulo');

const parrafo3=document.createElement('p');
parrafo3.textContent='80€ por persona';
parrafo3.classList=('precio');

//creamos un div y vamos metiendo los elementos (como hay en las otras tarjetas):
const info = document.createElement('div'); //creamos un div
info.classList.add('info'); //le añadimos el estilo de info
//le añadimos como hijos los párrafos
info.appendChild(parrafo1); //NO LO PUEDES METER EN EL MISMO PARÉNTESIS, TIENES QUE CREAR 3
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//falta crear la imagen 
const imagen = document.createElement('img');
//le añadimos el atributo src
imagen.src='img/hacer2.jpg';

//creamos el div para la tarjeta
const card=document.createElement('div');
card.classList.add('card');
//creado, le añadimos los hijos que hay dentro de él
card.appendChild(imagen);
card.appendChild(info);

//hasta aquí lo hemos CREADO, pero hay que meterlo en el Dom para que tenga efecto en el renderizado
const contenedor=document.querySelector('.hacer .contenedor-cards')
//para que sea hijo de contenedor-cards
contenedor.appendChild(card);


//si lo queremos añadir en otro lado:
//contenedor.insertBefore(card,contenedor.children[0]);
