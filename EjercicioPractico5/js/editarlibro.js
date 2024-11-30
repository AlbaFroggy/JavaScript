import { obtenerLibro, editarLibro } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function () {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const idInput = document.querySelector('#id');
    
    // Cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idLibro = parametrosURL.get('id');
        const libro = await obtenerLibro(idLibro);

        if (!libro) {
            mostrarAlerta('El libro no fue encontrado');
            return;
        }

        mostrarLibro(libro);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarLibro);
    });

    // Mostrar los datos del libro en el formulario
    function mostrarLibro(libro) {
        const { id , title, author} = libro;
        idInput.value = id;  // El ID está oculto en el formulario
        titleInput.value = title;
        authorInput.value = author;
       
    }

    // Validar los datos y enviar la actualización del libro
    function validarLibro(e) {
        e.preventDefault();

        const libro = {
            id: idInput.value,
            title: titleInput.value,
            author: authorInput.value,
        };

        if (!validar(libro)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarLibro(libro);  // Llamada a la función para editar el libro
    }
})();
