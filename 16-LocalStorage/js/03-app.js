//para borrar
//le paso la clave y borro ese elemento
localStorage.removeItem('nombre');

//PARA ACTUALIZAR
//primero nos traemos la info
let mesesArray=JSON.parse(localStorage.getItem('meses'));
mesesArray=[...mesesArray,'abril']; //usando spread añadimos abril
localStorage.setItem('meses',JSON.stringify(mesesArray));
//lo subimos, cuando encuentre la clave que coincida con uno de ahí lo actualiza

//para limpiar el localStorage
localStorage.clear();