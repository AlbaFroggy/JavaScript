import { obtenerLibros, eliminarLibro, nuevoLibro } from "./API.js";

(function () {
    const listado = document.querySelector('#book-list');
    const formulario = document.querySelector('#add-book-form');

    document.addEventListener('DOMContentLoaded', mostrarLibros);
    formulario.addEventListener('submit', agregarLibro);

    listado.addEventListener('click', confirmarEliminar);

    async function mostrarLibros() {
        const libros = await obtenerLibros();

        listado.innerHTML = ''; // Limpiar la lista previa

        libros.forEach(libro => {
            const { title, author, id } = libro; // Ajustamos para coincidir con db.json
            const row = document.createElement('TR');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${title}</p>
                    <p class="text-sm leading-10 text-gray-700">${author}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-libro.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-libro="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        if (e.target.classList.contains('eliminar')) {
            const libroId = parseInt(e.target.dataset.libro);
            const confirmar = confirm("¿Quieres eliminar este registro?");
            if (confirmar) {
                eliminarLibro(libroId);
            }
        }
    }

    async function agregarLibro(e) {
        e.preventDefault();

        const title = document.querySelector('#title').value.trim();
        const author = document.querySelector('#author').value.trim();

        if (title === '' || author === '') {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        const libro = { title, author };
        await nuevoLibro(libro);

        formulario.reset(); // Limpiar formulario
        mostrarLibros(); // Recargar la lista de libros
    }
})();
