//en este caso vamos a cargar un array json

//hacemos un const para cargar el botón
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

//función para cargar los datos y otra para mostrarlos

function obtenerDatos() { //va sin parámetros
    const url = 'data/empleados.json'; //donde se da la ruta donde se encuentra la info

    //ahora hacemos el fetch
    fetch(url) //es una promesa así que lleva aparejado thens
        .then(respuesta => respuesta.json()) //SI NO PONES () NO VA
        //le estamos diciendo que lo que ha obtenido es respuesta y lo vamos a pasar a modo json
        .then(resultado => mostrarHTML(resultado));

}
//AHORA HAY QUE RECORRERLO
//AQUÍ ES DONDE CAMBIA RESPECTO AL 02-APP.JS
function mostrarHTML(empleados) {
    //esto lo hace porque sabe cómo es la estructura del JSON
    //es importante saberlo para hacer un spread
    const content = document.querySelector('.contenido');
    let html='';
    empleados.forEach(empleado => {
        //aquí componemos el HTML
        //para cada empleado hacemos un spread
        const { id, nombre, empresa, trabajo } = empleado;
        //por cada uno que va cogiendo, va metiendo en estas variables el resultado de cada una de ellas
        html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;
    });

    content.innerHTML=html;
}