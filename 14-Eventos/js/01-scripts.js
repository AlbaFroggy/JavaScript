//para que no puedas interaccionar con el html hasta que se cargue entero


console.log('1');
document.addEventListener('DOMContentLoaded', () => {
    console.log("Cargo todo el documento");
    console.log('2');
})
console.log('3');

// 1, 3, CARGO TODO EL DOCUMENTO, 2