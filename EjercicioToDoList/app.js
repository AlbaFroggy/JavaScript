//si le das a agregar sale abajo
//si le das a v se tacha
//si le das a x se quita

// Seleccionar elementos necesarios
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#input");
const listaTareas = document.querySelector("#lista-tareas");
const template = document.querySelector("#temp").content;

// Agregar evento para el formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Verificar que el input no esté vacío
    if (input.value.trim() === "") {
        return;
    }

    // Clonar el template para una nueva tarea
    const nuevaTarea = template.cloneNode(true);
    nuevaTarea.querySelector("p").textContent = input.value; // Asignar el texto de la tarea
    listaTareas.appendChild(nuevaTarea); // Agregar la tarea a la lista

    // Limpiar el input
    input.value = "";

    // Agregar los eventos para los botones de esta nueva tarea
    agregarEventos(nuevaTarea);
});


// Función para agregar los eventos a los botones de check y delete
function agregarEventos(tarea) {
    const botonv = tarea.querySelector('.fa-check-circle');
    const botonx = tarea.querySelector('.fa-times-circle');

       
    listaTareas.addEventListener('click',(e) => {
        if (e.target.classList.contains('botonv')) {
            const textoTarea = tarea.querySelector('#temp div p');
            textoTarea.style.textDecoration === "line-through";

        }
        
        if (e.target.classList.contains('botonx')) {
            const textoTarea = tarea.querySelector('#temp div p');
            tarea.remove();
        }
    })
    
}