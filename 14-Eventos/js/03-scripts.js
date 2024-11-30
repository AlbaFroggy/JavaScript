//EVENTOS DEL TECLADO

const busqueda = document.querySelector('.busqueda');

//pulsamos en el botón de búsqueda
//esto lo usaremos al validar formularios

//AL PULSAR LA TECLA
// busqueda.addEventListener('keydown',()=> {
//     console.log("Escribiendo...");
// })

//AL SOLTAR LA TECLA
// busqueda.addEventListener('keyup',()=> {
//     console.log("Escribiendo...");
// })

//CUANDO PIERDE EL FOCO
//al clicar fuera o hacer escape o lo que sea
// busqueda.addEventListener('blur',()=> {
//     console.log("Has perdido el foco");
// })

//AL SELECCIONAR ALGO DONDE HAYAMOS PUESTO EL QUERY, PULSAR CONTROL + C
// busqueda.addEventListener('copy',()=> {
//     console.log("Has copiado");
// })


//AL SELECCIONAR ALGO DONDE HAYAMOS PUESTO EL QUERY, PULSAR CONTROL + V
// busqueda.addEventListener('paste',()=> {
//     console.log("Has pegado");
// })

//AL SELECCIONAR ALGO DONDE HAYAMOS PUESTO EL QUERY, PULSAR CONTROL + x
// busqueda.addEventListener('cut',()=> {
//     console.log("Has cortado");
// })


//cuando usas CUALQUIERA de los eventos anteriores MENOS EL BLUR y EL COPY:
//SE UTILIZA MUCHO:
// busqueda.addEventListener('input',()=> {
//     console.log("Has hecho algo");
// })

//A la función anónima le pasamos como parámetro el evento que está sucediendo

busqueda.addEventListener('input',(e)=> {
    console.log(e);
    console.log(e.type); //sobre qué tipo de elemento estoy escribiendo
    console.log(e.target);
    console.log(e.target.value);

//te devuelve lo de InputEvent

    if(e.target.value === ''){
    console.log('falló la validación')}

})
