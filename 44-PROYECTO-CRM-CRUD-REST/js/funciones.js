//vamos a ver que cuando creamos un modulo hay dos formas de exportar
//creamos una funcion que va a comprobar si el formulario esta completo o no
export function validar(obj){
    //esta funcion validar la van a usar varios
    return Object.values(obj).every(input=>input!==''); //lo que vamos a comprobar si estan los campos vacios
    //o no devuelve true o false
}

//funcion para mostrar alerta
export function mostrarAlerta(mensaje){
    const alerta=document.querySelector('.bg-red-100'); //es una clase de tailwind
    if(!alerta){
        const alerta=document.createElement('P');

        //dar estilos al parrafo
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center');
        alerta.innerHTML=`
            <strong class="font-blod">Error</strong>
            <span class="block sm:inline">${mensaje}</span>
        `

        const formulario=document.querySelector('#formulario');
        formulario.appendChild(alerta);

        //la alerta se visualiza durante 3 segundos y luego desaparece
        setTimeout(()=>{
            alerta.remove()
        },3000)
    }

}