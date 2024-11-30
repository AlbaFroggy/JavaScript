//VAMOS A HACER que cuando le demos al botón "idioma y moneda", aparezca el footer

//primero hay que seleccionar el botón y el footer
const btnFlotante=document.querySelector('.btn-flotante');
const footer=document.querySelector('.footer');

//hacemos que esa etiqueta se quede a la escucha de algo
//en concreto,de que el usuario haga click en esa etiqueta html 

//aquí, de ejemplo, le asignamos una arrow function anónima

// btnFlotante.addEventListener('click', ()=> {
//     console.log('¡Hiciste click!');
// })

//en vez de directamente poner la función anónima, llamamos a una función, lo que se llama TOGGLE
btnFlotante.addEventListener('click', mostrarOcultarFooter);

//definimos la función:
function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        this.textContent='Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent='X CERRAR';
    }
    
    //al borrar el estilo activo, como tengo debajo el footer, pues aparece el footer
}
//ESTO MISMO SE PODRÍA HACER TAMBIÉN CON UN OPERADOR TERNARIO