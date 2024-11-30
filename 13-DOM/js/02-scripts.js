//VAMOS A SELECCIONAR ELEMENTOS DE HTML POR SU CLASE
//ESTO ES LO MÁS HABITUAL

//Hay diferentes tipos de selectores en js
//el primero es seleccionar un elemento según su clase:

const myHeader = document.getElementsByClassName('header');
console.log(myHeader);

const myHero = document.getElementsByClassName('hero');
console.log(myHero);

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//si la clase no existe, no devuelve nada:
const noexist = document.getElementsByClassName('noexiste');
console.log(noexist);