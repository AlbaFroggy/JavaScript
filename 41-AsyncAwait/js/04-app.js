//otra forma de hacerlo: con una función-expresión:

function descargarNuevoCliente(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                resolve('El listado del cliente se descargó');
            
        }, 5000)
    })
}


function descargarNuevoPedidos(){
    return new Promise((resolve)=>{
       
        setTimeout(()=>{

                resolve('El listado del pedido se descargó');
            
        }, 3000)
    })
}

// const app=async()=>{
//     try{

//         //se te podría ocurrir
//         const clientes=await descargarNuevoCliente();
//         console.log('clientes');

//         //o se te podría ocurrir
//         const pedidos=await descargarNuevoPedidos();
//         console.log('pedidos');

//         //pero esto estaría mal porque tarda más de lo necesario
//         //8 segundos en vez de 3
//     }catch{
//         console.log(error)
//     }
// }


//la solución sería:         !!!!!!!!!!!!!
const app=async()=>{
    try{
        const respuesta=await Promise.all([descargarNuevoCliente(), descargarNuevoPedidos()]) 
        //en un array dentro ponemos todas las peticiones externas que hagamos
        console.log(respuesta[0]); //la respuesta de la primera
        console.log(respuesta[1]); //la respuesta de la segunda

    
    }catch{
        console.log(error);
    }
}