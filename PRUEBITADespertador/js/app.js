// Función para actualizar el reloj
function actualizarReloj() {
    const reloj = document.getElementById("reloj");
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // Formatear hora, minuto y segundo con 2 dígitos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Mostrar la hora en el div
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

// Función para activar la alarma
let alarmaActivada = false;
let horaAlarma = "";

document.getElementById("activar-alarma").addEventListener("click", function () {
    const horaInput = document.getElementById("hora").value;
    if (horaInput) {
        horaAlarma = horaInput;
        alarmaActivada = true;
        document.getElementById("mensaje").textContent = `¡Alarma activada para las ${horaAlarma}!`;
    }
});

// Función para comprobar si la alarma debe sonar
function comprobarAlarma() {
    if (alarmaActivada) {
        const fecha = new Date();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();

        // Formatear hora y minuto con 2 dígitos
        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;

        // Si la hora actual es igual a la hora de la alarma, suena
        if (`${horas}:${minutos}` === horaAlarma) {
            document.getElementById("mensaje").textContent = "¡Es hora de despertar!";
            activarSonido();
            alarmaActivada = false; // Desactivar alarma después de sonar
        }
    }
}

// Función para activar el sonido de la alarma
function activarSonido() {
    const audio = new Audio('./audio/intercom-in-83962.mp3');
    audio.play();
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Comprobar la alarma cada minuto
setInterval(comprobarAlarma, 60000);