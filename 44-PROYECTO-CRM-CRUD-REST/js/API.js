const url='http://localhost:4000/clientes';
//añadir el cliente a la base de datos 
export const nuevoCliente=async cliente=>{
    //meter datos a la base de datos
    try{
        await fetch (url,{
            method:'POST',
            body:JSON.stringify(cliente),
            headers:{
                'Content-type':'application/json'
            }
        });
        //si solo ponemos url entiende que es un get
        //pero si la operacion es diferente indicar la operacion que es
        window.location.href='index.html'
    }catch(error){
        console.log(error)
    }
}

export const eliminarCliente=async (id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}
//hay que procurar que si consultan a una base de datos o navegan por internet, que las funciones sean ASÍNCRONAS
export const obtenerClientes=async ()=>{
    try{
        const resultado=await fetch(url);
        //no hace falta declarar objeto porque la operación la lleva implícito
        //pero hay que pasárselo a un JSON
        const clientes=await resultado.json();
        return clientes;

    }catch(error){
    //el error que haya dado el navegador lo saacamos por consola
    console.log(error);
    }
}

export const obtenerCliente= async(id)=>{
    try{
        const resultado=await fetch(`${url}/${id}`);
        const cliente=await resultado.json();
        return cliente;
    }catch(error){
        console.log(error);
    }
}
//cuando va a guardar un dato que tiene el mismo identificador, lo que hace es reescribirlo, ero en oracle y en otros no es así
//leerlo, modificar en memoria y volver a escribir
    
export const editarCliente=async cliente=>{
    try{
        //va a sobreescribir
        await fetch(`${url}/${cliente.id}`, { //hay que darle cuál es el cliente que vamos a actualizar aparte de la url
            method:'PUT',
            body:JSON.stringify(cliente),
            headers:{
                'Content-Type':'application/json'
            }
        });
        //cuando hayamos terminado de modificar, volvemos a la ventana del indez
        window.location.href='index.html';
    
    }catch(error){
        console.log(error);
    }
} //ahora vamos a editar
//vamos a ver cómo se recuperan datos del url