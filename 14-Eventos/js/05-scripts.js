//CUANDO HAGO UN SCROLL, Y LLEGO A UNA ZONA Y AHÍ HACE X

window.addEventListener('scroll', () =>{
    const scrollPX=window.scrollY;
    console.log(scrollPX);

    const premium=document.querySelector('.premium');
    //Entre otra información, devuelve las coordenadas del elemento premium
    const ubicacion=premium.getBoundingClientRect();
    console.log(ubicacion);

        if(ubicacion.top<675){ //no es exacto, porque depende del monitor...
            console.log("El elemento está ya visible") //podemos añadir una clase
        } else {
            console.log("El elemento NO ESTÁ")
        }
})