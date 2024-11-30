//api para resolver si hay o no conexión a internet

//Nos indica si hay conexion a internet o no
window.addEventListener('online',actualizarEstado); //cuando haya internet
window.addEventListener('offline',actualizarEstado); //cuando no haya internet


function actualizarEstado(){
    if (navigator.onLine) console.log('Estas conectado');
    else console.log('No estas conectado');
}