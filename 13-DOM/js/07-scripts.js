//CAMBIAR ESRTILOS EN TIEMPO DE EJECUCIÓN, DE FORMA DINÁMICA

//visualizar estilos
const encabezado = document.querySelector('h1');
console.log(encabezado.style);

//lo que antes había como guion, ejemplo: btn-flotante, ahora se pone junto
//las mismas propiedades que tenemos en el css, están en el API de javascript,
//pero se les quita el guion

//transformar estilos del encabezado:
encabezado.style.backgroundColor='green';
encabezado.style.fontFamily='Arial';
encabezado.style.textTransform='uppercase';

//podemos dinámicamente decir que añada o quite una clase

const card=document.querySelector('.card');
card.classList.add('nueva-clase');
//como no está nueva-clase, si no la añadiéramos no tendría efecto

//también se puede:
//card.classlist.add('nueva-clase','segunda-clase');

//también se puede quitar una clase:
card.classList.remove('.card');