//ELIMINAR ELEMENTOS, ETIQUETAS
//primero se selecciona la etiqueta y luego le decimos que la elimine

const primerEnlace=document.querySelector('a');
console.log(primerEnlace);
primerEnlace.remove();

//matar desde el padre
//buscamos navegación y decimos que elimine a un hijo suyo
const navegacion = document.querySelector('.navegacion');
navegacion.removeChild(navegacion.children[2]);