//vamos a recuperar información del localstorage

const nombre=localStorage.getItem('nombre');
//le ponemos la clave nombre para obtener el valor
//si queremos obtener el producto, como es un string que antes era un objeto, se hace así:

const productoJSON=localStorage.getItem('producto');
//para cualquier cadena de string que tenga forma de objeto !!!!!!!!!
//generar el objeto:
console.log(JSON.parse(productoJSON));
//te genera un objeto, antes solo te sacaría un array

const meses=localStorage.getItem('meses');
console.log(JSON.parse(meses));
const mesesArray=JSON.parse(meses);