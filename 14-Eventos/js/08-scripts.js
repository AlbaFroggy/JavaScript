//queremos insertar un elemento más

//Evitar la propagación con contenido creado...
const parrafo1=document.createElement('P');
parrafo1.textContent='Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

//Segundo párrafo
const parrafo2=document.createElement('P');
parrafo2.textContent='Concierto de Rock';
parrafo2.classList.add('titulo');

//Tercer párrafo
const parrafo3=document.createElement('P');
parrafo3.textContent='80 euros por persona';
parrafo3.classList.add('precio');

//parrafo3.onclick=nuevaFuncion;
parrafo3.onclick=function(){
    nuevaFuncion(1);
}

//crear el div...
const info=document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//vamos a crear la imagen
const imagen=document.createElement('img');
imagen.src='img/hacer2.jpg';

//crear el card
const contenedorCard=document.createElement('div');
contenedorCard.classList.add('contenedorCard');

//vamos a asignar la imagen al card
contenedorCard.appendChild(imagen);

//y el info
contenedorCard.appendChild(info);

//Insertarlo en el HTML
const contenedor=Document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); //al inicio se pone info

function nuevaFunction(id){
    console.log("click en nuevo párrafo", id);
}