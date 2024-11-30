//https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD
//hay que hacer dos cargas: una inicial para el tipo de moneda, y otra para el tipo de criptomoneda
//dos selectores- en uno metes la moneda y en la otra la criptomoneda (como max 10)
//por un lado las 10 cript. principales, las hay que cargar en algún sitio
//y tienes el equivalente en los valores- lo más alto del día, lo más bajo, etc

//el precio más alto del día, el más bajo y la variación en las últimas 24 h, y la última actualización
function iniciarApp() {
    const selectMoneda = document.querySelector('#moneda');
    const selectCriptomoneda = document.querySelector('#criptomonedas');
    const resultadoDiv = document.querySelector('#resultado');
    const botonCotizar = document.querySelector('.button-primary');

    let monedaSeleccionada = '';
    let criptomonedaSeleccionada = '';

    // Evento para seleccionar la moneda (por ejemplo, USD)
    selectMoneda.addEventListener('change', (e) => {
        monedaSeleccionada = e.target.value;
        obtenerCriptomonedas(); // Obtener criptomonedas cuando se cambia la moneda
    });

    // Evento para seleccionar la criptomoneda
    selectCriptomoneda.addEventListener('change', (e) => {
        criptomonedaSeleccionada = e.target.value;
    });

    // Cargar criptomonedas
    obtenerCriptomonedas();

    // Obtener criptomonedas desde la API
    function obtenerCriptomonedas() {
        // Usar la moneda seleccionada para obtener las criptomonedas
        if (!monedaSeleccionada) return; // Si no hay moneda seleccionada, no hacer nada

        const criptomonedasURL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${monedaSeleccionada}`;
        //para que te coja de la moneda que sea

        fetch(criptomonedasURL)
            .then((respuesta) => respuesta.json())
            .then((resultado) => mostrarCriptomonedas(resultado.Data))
            .catch((error) => console.error('Error al obtener criptomonedas:', error));
    }

    // Mostrar las criptomonedas en el selector
    function mostrarCriptomonedas(criptomonedas) {
        selectCriptomoneda.innerHTML = ''; // Limpiar las opciones previas
        criptomonedas.forEach((criptomonedas) => {
            const { CoinInfo, DISPLAY } = criptomonedas;
            const option = document.createElement('OPTION');
            option.value = CoinInfo.Name;
            option.textContent = CoinInfo.FullName;

            // Agregar los datos relevantes al dataset del option, usando la moneda seleccionada
            option.dataset.price = DISPLAY[monedaSeleccionada].PRICE;
            option.dataset.upperprice = DISPLAY[monedaSeleccionada].HIGH24HOUR;
            option.dataset.lowerprice = DISPLAY[monedaSeleccionada].LOW24HOUR;
            option.dataset.percent = DISPLAY[monedaSeleccionada].CHANGEPCT24HOUR;
            option.dataset.lastupdate = DISPLAY[monedaSeleccionada].LASTUPDATE;

            selectCriptomoneda.appendChild(option);
        });
    }

    // Función que maneja la cotización y muestra los resultados
    function mostrarResultado() {
        // Si no se ha seleccionado alguno, no hacer nada
        if (!criptomonedaSeleccionada || !monedaSeleccionada) return;

        // Obtener la opción seleccionada
        const selectedOption = selectCriptomoneda.selectedOptions[0];
        const price = selectedOption.dataset.price;
        const upperprice = selectedOption.dataset.upperprice;
        const lowerprice = selectedOption.dataset.lowerprice;
        const percent = selectedOption.dataset.percent;
        const lastupdate = selectedOption.dataset.lastupdate;

        // Crear los elementos
        const cotizar = document.createElement('DIV');
        const precio = document.createElement('P');
        precio.textContent = `Precio: ${price}`;
        precio.classList.add('price-text');

        const info = document.createElement('P');
        info.innerHTML = ` 
            Precio más alto del día: ${upperprice} <br>
            Precio más bajo del día: ${lowerprice} <br>
            Variación últimas 24 horas: ${percent}% <br>
            Última actualización: ${lastupdate}
        `;
        info.classList.add('info-text');

        cotizar.appendChild(precio);
        cotizar.appendChild(info);

        resultadoDiv.innerHTML = ''; // Limpiar los resultados previos
        resultadoDiv.appendChild(cotizar);
    }

    // Evento para el botón de cotizar
    botonCotizar.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que la página se recargue o se envíe el formulario
        mostrarResultado(); // Mostrar los resultados
    });
}

document.addEventListener('DOMContentLoaded', iniciarApp);
