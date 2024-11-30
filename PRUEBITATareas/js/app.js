window.addEventListener("load", () => {
    const formulario = document.querySelector('#formulario');
    const listaTareas = document.querySelector('#lista-tareas');
    const inputTarea = document.querySelector('#tarea');

    let tareas = [];

    // Registrar eventos
    function registrarEventos() {
        formulario.addEventListener('submit', agregarTarea);
        listaTareas.addEventListener('click', manejarTarea);
    }

    registrarEventos();

    function agregarTarea(e) {
        e.preventDefault(); // Evitar el envío del formulario

        const tarea = inputTarea.value.trim();
        if (tarea === '') {
            alert('Por favor, escribe una tarea');
            return;
        }

        const nuevaTarea = {
            id: Date.now(), // Generar un identificador único basado en el tiempo
            texto: tarea,
            completada: false,
        };

        tareas.push(nuevaTarea);
        inputTarea.value = ''; // Limpiar el input
        actualizarLista();
    }

    function manejarTarea(e) {
        const id = Number(e.target.getAttribute('data-id'));

        if (e.target.classList.contains('completar-tarea')) {
            tareas = tareas.map(tarea =>
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
            );
        } else if (e.target.classList.contains('eliminar-tarea')) {
            tareas = tareas.filter(tarea => tarea.id !== id);
        }

        actualizarLista();
    }

    function actualizarLista() {
        limpiarHTML();

        tareas.forEach(tarea => {
            const { id, texto, completada } = tarea;

            const li = document.createElement('li');
            li.classList.add('tarea');
            if (completada) {
                li.classList.add('completada');
            }

            li.innerHTML = `
                <span>${texto}</span>
                <button class="completar-tarea" data-id="${id}">
                    ${completada ? 'Desmarcar' : 'Completar'}
                </button>
                <button class="eliminar-tarea" data-id="${id}">Eliminar</button>
            `;

            listaTareas.appendChild(li);
        });
    }

    function limpiarHTML() {
        while (listaTareas.firstChild) {
            listaTareas.removeChild(listaTareas.firstChild);
        }
    }
});
