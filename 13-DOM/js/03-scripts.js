//PODEMOS BUSCAR POR EL ID EN VEZ DE POR LA CLASE:
//NUNCA SE PUEDE PONER EL MISMO ID PORQUE CADA VEZ TE COGERÁ UNO

const formulario = document.getElementById('formulario');
//si hay dos, va a coger el primero que encuentre, pero no sabes cuál te vendrá antes

console.log(formulario);

//si no existe no devuelve nada:
const noExiste = document.getElementById('noexiste');
console.log(noExiste);