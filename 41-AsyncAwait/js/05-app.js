const url='https://picsum.photos/list';
document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){
    fetch(url)
        .then(respuesta=>respuesta.json()) //para obtener los datos
        .then(resultado=>console.log(resultado)) //para sacar algo por consola
        .catch(error=>console.log(error))
}


async function obtenerDatos() {
    try{
        const respuesta=await fetch(url);
        const resultado=await respuesta.json();
        console.log(resultado)
    } catch(error) {
        console.log(error);
    }
}