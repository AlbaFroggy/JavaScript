import { obtenerCliente, editarCliente } from "./API.js";
import {mostrarAlerta, validar} from "./funciones.js";

(function(){
    const nombreInput=document.querySelector('#nombre');
    const emailInput=document.querySelector('#email');
    const empresaInput=document.querySelector('#empresa');
    const telefonoInput=document.querySelector('#telefono');
    const idInput=document.querySelector('#id');
    
    //cómo se recogen los datos de la url:

    document.addEventListener('DOMContentLoaded', async()=>{
        //creamos la función dentro
        //esta instrucción nos hace leer el parámetro de la url
        const parametrosURL=new URLSearchParams(window.location.search);
        //esto ha cogido TODA LA URL ahora hay que sacar el parámetro solo
        const idCliente=parametrosURL.get('id');
        const cliente=await obtenerCliente(idCliente);
        //te lo estás trayendo a la memoria
        mostrarCliente(cliente);
        const formulario=document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })

    function mostrarCliente(cliente){
        const {nombre,empresa,email,telefono,id}=cliente;
        nombreInput.value=nombre;
        empresaInput.value=empresa;
        emailInput.value=email;
        telefonoInput.value=telefono;
        idInput.value=id; //el id está oculto
    }

    function validarCliente(e){
        e.preventDefault();
        const cliente={
            //le damos los valores al registro que vamos a modificar
            //todos los cambios que se hayan hecho se recogen aquí
            nombre:nombreInput.value,
            empresa:empresaInput.value,
            email:emailInput.value,
            telefono:telefonoInput.value,
            id:idInput.value,
        }
        if(!validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios')
            return;
    }
    editarCliente(cliente);
}
})();