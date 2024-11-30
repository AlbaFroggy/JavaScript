//OPERADOR TERNARIO
//se usa mucho para el html y javascript
//consta de 3 partes: la parte que se evalúa, si es verdadero, se ejecuta lo que hay justo a continuación del ?
//si no, ejecuta lo que esté tras los dos puntos
const autenticado = true;
const puedePagar=true;

console.log(autenticado?'Si esta autenticado':'No esta autenticado');
console.log(autenticado && puedePagar?'Paga ':'No puedes pagar' );

//Si está autenticado, se evalúa puedePagar ?:
//Si puede pagar, se muestra 'Si puede pagar'.
//Si no puede pagar, se muestra 'No puede pagar'.
//Si no está autenticado, se muestra 'No está autenticado'

console.log(autenticado ? puedePagar ? 'Si puede pagar':'No puede pagar' :'No está autenticado');