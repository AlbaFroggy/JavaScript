//1º Proteger
//El modulo del nuevo cliente va a importar del api.js y tambien va a tirar de funciones.js
//Para que no haya choque con el nombre de las variables con lo que estamos usando, hay que protegerlo

//tenemos que importar la funcion creada
import {validar,mostrarAlerta} from "./funciones.js"; //no puede haber espacios al principio y final de los {}
import {nuevoCliente} from "./API.js";
(function(){
    //recuperar lo que es el formulario
    const formulario=document.querySelector('#formulario');
    //cuando pulso submit valida si el formulario esta bien o no
    formulario.addEventListener('submit',validarCliente)

    function validarCliente(e){
        //como es un boton y por defecto tiene una funcion asiganada por defecto
        e.preventDefault();
        //recuperar del formulario cada uno de los datos
        const nombre=document.querySelector('#nombre').value
        const email=document.querySelector('#email').value
        const telefono=document.querySelector('#telefono').value
        const empresa=document.querySelector('#empresa').value
        //como hemos visto en el json es un objeto, dentro de el hay un array que contiene otros objetos
        //construir un objeto
        const cliente={ //lo vamos hacer por destructuring
            nombre,
            email,
            telefono,
            empresa
        }
        //ahora vamos a coger ese registro y comprobar que cada uno de los campos no esta vacio
        //creamos una funcion que va a comprobar si el formulario esta completo o no (validarformulario) dentro de funciones.js
        //ya estamos en disposicion de usar validar
        if (!validar(cliente)){
            mostrarAlerta('Todos los campos sob obligatorios');
            return;
        }
        //añadir el cliente a la base de datos dentro de api.js
        //llamamos al nuevo cliente
        nuevoCliente(cliente);
    }
})(); //todo lo que este dentro, se encuentre dentro y hace que no sea visible en otro sitio