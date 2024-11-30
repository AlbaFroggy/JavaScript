const cargarAPIBtn=document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click',obtenerDatos);
function obtenerDatos(){
    //ahora definimos la url
    const url='https://picsum.photos/list'; //va a devolver un array con nombres de usuarios y fotos
    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado=>mostrarHTML(resultado));

}

function mostrarHTML(datos){
    const contenido=document.querySelector('.contenido');
    let html='';
    //lo dejamos en blanco para rellenarlo con un forEach
    datos.forEach(perfil => {
        const { author, post_url}=perfil; //hay muchos datos, pero solo vamos a sacar estos
        html+=`
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Ver imagen</a>        
        `
        //lo último es una url para ver la imagen
    });
    contenido.innerHTML=html;
}