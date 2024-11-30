const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();//evitamos la acción por defecto que es POST
    console.log(e.target.method); //mostramos el método por defecto
    console.log(e.target.action); //mostramos la acción por defecto
});

//OTRA FORMA:

// formulario.addEventListener('submit', (validarformulario));
// function validarformulario(e) {
//     e.preventDefault();//evitamos la acción por defecto que es POST
//     console.log(e.target.method); //mostramos el método por defecto
//     console.log(e.target.action); //mostramos la acción por defecto
// };