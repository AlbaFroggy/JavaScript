const navegacion=document.querySelector('.navegacion');

navegacion.addEventListener('click', ()=> {
    console.log('click en nav');
})

//cuando el ratón entra en la zona que he seleccionado
//ponemos a la espera al elemento, de que entre el ratón
//cuando entra cambia a rojo
navegacion.addEventListener('mouseenter', ()=> {
    console.log('Estás en la zona de navegación');
    navegacion.style.backgroundColor='red';
})
//cuando sale cambia a transparente
navegacion.addEventListener('mouseout', ()=> {
    console.log('Has salido en la zona de navegación');
    navegacion.style.backgroundColor='transparent';
})

//cuando sueltas el click
navegacion.addEventListener('mouseup', ()=> {
    console.log('Has soltado');
})

navegacion.addEventListener('dblclick', ()=> {
    console.log('Has hecho doble click');
})