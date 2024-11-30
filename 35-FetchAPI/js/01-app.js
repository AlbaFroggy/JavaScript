const cargarTxtBtn=document.querySelector('#cargarTxt');
//vamos a mostrar la info por consola

cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    //primero declaramos la url, de dónde vamos a atacar los datos, si locales o fuera
    const url='data/datos.txt';

    //fetch es un promise
    fetch(url)
        .then(respuesta=>{
            //esta es la info que se suele utilizar más
            console.log(respuesta);
            console.log(respuesta.status); //el estado de la petición- si no la encuentra te sale un 404
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text(); //va a devolver un fichero de texto plano
            //hay que ponerle que es un texto plano si es texto!!!!!!!!!!
        })
        //ahora saca por consola lo que ha leído del fichero
        .then(datos => {
            console.log(datos);
        })
        .catch(error=>{
            console.log(error);
        })
}