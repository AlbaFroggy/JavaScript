//en este caso vamos a cargar un json

//hacemos un const para cargar el botón
const cargarJSONBtn=document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

//función para cargar los datos y otra para mostrarlos

function obtenerDatos(){ //va sin parámetros
    const url='data/empleado.json'; //donde se da la ruta donde se encuentra la info

    //ahora hacemos el fetch
    fetch(url) //es una promesa así que lleva aparejado thens
        .then(respuesta=>respuesta.json()) //SI NO PONES () NO VA
        //le estamos diciendo que lo que ha obtenido es respuesta y lo vamos a pasar a modo json
        .then(resultado=>mostrarHTML(resultado));

}

function mostrarHTML({empresa,id,nombre,trabajo}){
    //esto lo hace porque sabe cómo es la estructura del JSON
    //es importante saberlo para hacer un spread
    const content=document.querySelector('.contenido');
    //AHORA LO QUE LE VAMOS A INSERTAR:
    contenido.innerHTML=`
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    
    
    `
}