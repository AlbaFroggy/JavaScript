function descargarCliente(){
    return new Promise((resolve,reject)=>{
        //aquí ponemos lo que hace
        //en caso de que haya retraso o error
        const error=false;
        setTimeout(()=>{
            //simulamos un retrado
            if(!error){ //si no hay error
                resolve('El listado del cliente se descargó');
            }else{
                reject('Error en la conexión');
            }
        }, 3000) //el timeout
    })
}

async function ejecutar() {
    //le estamos diciendo que ejecute esto de forma asíncrona
    //y se quede a la espera de que devuelva algo descargar
    //se trata de que hasta que no estén los usuarios no pinte nada
    //ESTO ES DIFERENTE A UNA PROMESA, PORQUE LA PROMESA NO SE PARABA, YA VENDRÁN LOS DATOS, SEAN BUENOS O NO
    //AHORA NO- espérate y luego ya veremos lo que hacemos
    
    try{
        console.log(1+1);
        const respuesta=await descargarCliente();
        console.log(2+2);
    } catch{
        console.log(error);
    }
}

ejecutar();