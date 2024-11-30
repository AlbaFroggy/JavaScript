import { obtenerLibro, editarLibro } from "./API.js";
import {mostrarAlerta, validar} from "./funciones.js";

(function(){
    const titleInput=document.querySelector('#title');
    const authorInput=document.querySelector('#author');
    const idInput=document.querySelector('#id');
    
    //cómo se recogen los datos de la url:

    document.addEventListener('DOMContentLoaded', async()=>{
        //creamos la función dentro
        //esta instrucción nos hace leer el parámetro de la url
        const parametrosURL=new URLSearchParams(window.location.search);
        //esto ha cogido TODA LA URL ahora hay que sacar el parámetro solo
        const idLibro=parametrosURL.get('id');
        const libro=await obtenerLibro(idLibro);
        //te lo estás trayendo a la memoria
        mostrarLibro(libro);
        const formulario=document.querySelector('#add-book-form');
        formulario.addEventListener('submit', validarLibro);
    })

    function mostrarLibro(libro) {
        const { id, title, author } = libro;  // usa 'title' y 'author' como en la respuesta del servidor
        idInput.value = id;
        titleInput.value = title; // aquí debe ser 'title'
        authorInput.value = author; // aquí debe ser 'author'
       
    }
    

    function validarLibro(e){
        e.preventDefault();
        const libro={
            //le damos los valores al registro que vamos a modificar
            //todos los cambios que se hayan hecho se recogen aquí
            id:idInput.value,
            title:titleInput.value,
            author:authorInput.value,
            
        }
        if(!validar(libro)){
            mostrarAlerta('Todos los campos son obligatorios')
            return;
    }
    editarLibro(libro);
}
})();