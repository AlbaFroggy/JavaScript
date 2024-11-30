window.addEventListener("load", () => {
    const btnGenerar = document.querySelector('#generar-cita');
    const contenedorCita = document.querySelector('#cita');
    const urlCitas = 'JSON/citas.json'; // Ruta del archivo JSON

    let citas = [];
    let citasMostradas = []; // Array para llevar un seguimiento de las citas mostradas

    // Cargar las citas desde el archivo JSON
    async function cargarCitas() {
        try {
            const respuesta = await fetch(urlCitas);
            if (!respuesta.ok) {
                throw new Error(`Error al cargar citas: ${respuesta.status}`);
            }
            citas = await respuesta.json();
        } catch (error) {
            console.error(error);
            contenedorCita.textContent = "No se pudieron cargar las citas. Intenta de nuevo más tarde.";
        }
    }

    // Mostrar una cita al azar sin repetir
    function mostrarCita() {
        if (citas.length === 0) return;

        if (citasMostradas.length === citas.length) {
            contenedorCita.innerHTML = "<p>¡Ya no hay más citas!</p>";
            return;
        }

        // Seleccionar una cita no mostrada al azar
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * citas.length);
        } while (citasMostradas.includes(indiceAleatorio)); // Evitar repetir citas

        const citaSeleccionada = citas[indiceAleatorio];
        contenedorCita.innerHTML = `
            <p>"${citaSeleccionada.texto}"</p>
            <footer>– ${citaSeleccionada.autor}</footer>
        `;

        // Marcar esta cita como mostrada
        citasMostradas.push(indiceAleatorio);
    }

    // Registrar eventos
    btnGenerar.addEventListener('click', mostrarCita);

    // Cargar las citas al inicio
    cargarCitas();
});
