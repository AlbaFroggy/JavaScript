window.addEventListener("load", () => {
    const listaOpciones = document.querySelector('#lista-opciones');
    const contenedorResultados = document.querySelector('#resultados');
    const reiniciarBtn = document.querySelector('#reiniciar');

    let votos = [];

    function registrarEventos() {
        listaOpciones.addEventListener('click', registrarVoto);
        reiniciarBtn.addEventListener('click', reiniciarVotaciones);
    }

    registrarEventos();

    function registrarVoto(e) {
        if (e.target.classList.contains('votar')) {
            const opcion = e.target.getAttribute('data-opcion');
            const votoExistente = votos.find(voto => voto.opcion === opcion);

            if (votoExistente) {
                votoExistente.cantidad++;
            } else {
                votos.push({ opcion, cantidad: 1 });
            }

            actualizarResultados();
        }
    }

    function actualizarResultados() {
        limpiarResultados();

        votos.forEach(voto => {
            const { opcion, cantidad } = voto;
            const resultado = document.createElement('div');
            resultado.classList.add('resultado');
            resultado.innerHTML = `
                <h4>${opcion}</h4>
                <p>Votos: ${cantidad}</p>
            `;
            contenedorResultados.appendChild(resultado);
        });
    }

    function reiniciarVotaciones() {
        votos = [];
        limpiarResultados();
    }

    function limpiarResultados() {
        while (contenedorResultados.firstChild) {
            contenedorResultados.removeChild(contenedorResultados.firstChild);
        }
    }
});
