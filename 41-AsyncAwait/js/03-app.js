//otra forma de hacerlo: con una función-expresión:

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

const ejecutar=async()=> {
    //lleva el async detrás
    
    try{
        console.log(1+1);
        const respuesta=await descargarCliente();
        console.log(2+2);
    } catch{
        console.log(error);
    }
}

ejecutar();