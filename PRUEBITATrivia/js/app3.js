window.addEventListener("load", () => {
    const btnGenerar = document.querySelector('#generar-trivia');
    const contenedorTrivia = document.querySelector('#trivia');
    const resultado = document.querySelector('#resultado');
    const contador = document.querySelector('#contador');
    const urlTrivia = 'JSON/trivia.json'; // Ruta del archivo JSON

    let trivia = [];
    let preguntaActual = null;
    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;
    const maxErrores = 10; // Número máximo de errores permitidos
    const maxAciertos = 10;

    // Cargar las preguntas desde el archivo JSON
    async function cargarTrivia() {
        try {
            const respuesta = await fetch(urlTrivia);
            if (!respuesta.ok) {
                throw new Error(`Error al cargar trivia: ${respuesta.status}`);
            }
            trivia = await respuesta.json();
        } catch (error) {
            console.error(error);
            contenedorTrivia.textContent = "No se pudieron cargar las preguntas. Intenta de nuevo más tarde.";
        }
    }

    // Mostrar una pregunta al azar
    function mostrarPregunta() {
        if (trivia.length === 0) return;

        const indiceAleatorio = Math.floor(Math.random() * trivia.length);
        preguntaActual = trivia[indiceAleatorio];

        const opcionesHTML = preguntaActual.opciones
            .map(opcion => `<button class="opcion">${opcion}</button>`)
            .join('');

        contenedorTrivia.innerHTML = `
            <p>${preguntaActual.pregunta}</p>
            <div>${opcionesHTML}</div>
        `;
    }

    // Manejar la respuesta del usuario
    function verificarRespuesta(e) {
        if (e.target.classList.contains('opcion')) {
            const respuestaUsuario = e.target.textContent;
            if (respuestaUsuario === preguntaActual.respuesta) {
                resultado.textContent = "¡Correcto! 🎉";
                resultado.style.color = "green";
                respuestasCorrectas++;
            } else {
                resultado.textContent = `Incorrecto. La respuesta correcta es: ${preguntaActual.respuesta}`;
                resultado.style.color = "red";
                respuestasIncorrectas++;
            }

            // Actualizar el contador
            actualizarContador();

            // Verificar si ha alcanzado el límite de errores
            if (respuestasIncorrectas >= maxErrores) {
                terminarJuegoMal();
                return;
            }
            if (respuestasCorrectas >= maxErrores) {
                terminarJuegoBien();
                return;
            }

            // Mostrar una nueva pregunta después de 3 segundos
            setTimeout(() => {
                resultado.textContent = "";
                mostrarPregunta();
            }, 1000);
        }
    }

    // Actualizar el contador en el HTML
    function actualizarContador() {
        contador.innerHTML = `
            <p>Respuestas Correctas: ${respuestasCorrectas}</p>
            <p>Respuestas Incorrectas: ${respuestasIncorrectas}</p>
        `;
    }

    // Finalizar el juego si el usuario pierde
    function terminarJuegoMal() {
        contenedorTrivia.innerHTML = `
            <p>¡Has perdido! Alcanzaste el límite de 10 errores.</p>
        `;
        contenedorTrivia.style.color = "red";
        resultado.textContent = "";
        btnGenerar.disabled = true; // Desactivar el botón para generar preguntas
    }
    function terminarJuegoBien() {
        contenedorTrivia.innerHTML = `
            <p>¡Has ganado! Alcanzaste los 10 aciertos.</p>
        `;
        contenedorTrivia.style.color = "green";
        resultado.textContent = "";
        btnGenerar.disabled = true; // Desactivar el botón para generar preguntas
    }

    // Registrar eventos
    btnGenerar.addEventListener('click', mostrarPregunta);
    contenedorTrivia.addEventListener('click', verificarRespuesta);

    // Cargar las preguntas al inicio
    cargarTrivia();
});
