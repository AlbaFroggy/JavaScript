//aparte del getbyid y el getbyclassname tenemos:
//querySelector devuelve a lo máximo un elemento !!!!!!!!!
//Puede seleccionar elementos por clase y por id.

//CUANDO HAGO REFERENCIA A UNA CLASE LA IDENTIFICAMOS CON EL PUNTO
const card=document.querySelector('.card');
console.log(card);
//devolverá la primera que encuentre con la clase card

//hay un div padre que tiene la clase "contenedor-cards premium" y tiene un hijo "info"
//que lo puedo localizar a través del padre
const info=document.querySelector('.premium .info');
console.log(info);

//si no dejas el espacio en blanco estás diciendo que tenga las 2 clases:..
const info2=document.querySelector('.premium.info');

//si quiero seleccionar uno en concreto, como me devuelve el 
const segundoCard=document.querySelector('.hospedaje .fcard:nth-child.2');

//devuele el segundo solamente


//si quiero seleccionar un id con queryselector:
//CON LA ALMOHADILLA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const formulario=document.querySelector('#formulario');
console.log(formulario);

//elegir elementos por su etiqueta
const navegacion=docuement.querySelector('nav');

