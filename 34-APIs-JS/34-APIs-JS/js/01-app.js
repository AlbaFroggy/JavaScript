//Notificaciones
//buscar la zona donde vamos a meter notificaciones
//cuando pinchemos el boton notificar nos aparecera una notificacion

const notificarBtn=document.querySelector('#notificar');
//lo primero que tenemos que hacer es pedir permisos al usuario si quiere que a traves de la pagina web se le envien notificaciones
notificarBtn.addEventListener('click',()=>{
    Notification //esto es una promesa
    //solicitamos permisos y si es aceptado responde el request
    .requestPermission()
    .then (resultado=>{
        console.log('El resultado es', resultado);
    })
})

const verNotificacion=document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click',()=>{
    //si la notificacion ha sido aceptada
    if (Notification.permission==="granted"){
        const notificacion=new Notification('Esta es la notificacion',{
            icon:'img/logo2.png',
            body:'CURSO 2 DE DAW'
        })
        notificacion.onclick=function(){
            window.open('https://www.iesazarquiel.es');
        }
    }
})