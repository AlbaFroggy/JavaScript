
const encabezado=document.querySelector('.contenido-hero h1');
//siguen funcionando todods los tipos de selectores que se usan en querySelector
console.log(encabezado.innerText); //si la etiqueta tiene el atributo visibility:hidden, no podemos ver el atributo.
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); //en tiempo de ejecución le puedo añadir partes html


const encabezado2=document.querySelector('.contenido-hero h1').textContent;
//el encabezado 2 tiene ese valor sin la necesidad de asignarlo a una variable

document.querySelector('.contenido-hero h1').textContent='NUEVO HEADING';

const addEncabezado="NUEVO ENCABEZADO";
//para cambiar 
document.querySelector('.contenido-hero h1').textContent=addEncabezado;
console.log(addEncabezado);

//traernos la etiqueta que tiene la imagen
const imagen=document.querySelector('.card img');
imagen.src='img/hacer2.jpg'; //cambiaría la imagen que hay
console.log(imagen);
