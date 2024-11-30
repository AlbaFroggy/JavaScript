const url='http://localhost:4000/books'; //aquí lo que ponga en el dbjson
//añadir el libro a la base de datos 
export const nuevoLibro = async (libro) => {
    try {
        // Obtener todos los libros existentes
        const libros = await obtenerLibros();

        // Determinar el último ID y generar el siguiente
        let nuevoId = 1; // Valor predeterminado en caso de que no haya libros
        if (libros.length > 0) {
            // Obtener el último libro y calcular el nuevo ID
            const ultimoLibro = libros[libros.length - 1];
            nuevoId = parseInt(ultimoLibro.id) + 1; // Incrementar el ID
        }

        // Asignar el nuevo ID al libro como una cadena (string)
        libro.id = String(nuevoId); // Asegurarse de que el ID sea un string

        // Insertar el libro con el ID generado
        await fetch('http://localhost:4000/books', {
            method: 'POST',
            body: JSON.stringify(libro),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Redirigir al índice una vez insertado el libro
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
};


export const eliminarLibro = async (id) => {
    try {
        // Primero, intenta obtener el libro para asegurarte de que existe
        const libro = await obtenerLibro(id);
        if (!libro) {
            console.log('Libro no encontrado');
            return; // Si no lo encuentras, no intentas eliminarlo
        }

        // Si el libro existe, procede a eliminarlo
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`Libro con id ${id} eliminado`);
        } else {
            console.error('Error al eliminar el libro:', response.statusText);
        }

    } catch (error) {
        console.log(error);
    }
};

//hay que procurar que si consultan a una base de datos o navegan por internet, que las funciones sean ASÍNCRONAS
export const obtenerLibros=async ()=>{
    try{
        const resultado=await fetch(url);
        //no hace falta declarar objeto porque la operación la lleva implícito
        //pero hay que pasárselo a un JSON
        const libros=await resultado.json();
        return libros;

    }catch(error){
    //el error que haya dado el navegador lo saacamos por consola
    console.log(error);
    }
}

export const obtenerLibro= async(id)=>{
    try{
        const resultado=await fetch(`${url}/${id}`);
        const libro=await resultado.json();
        return libro;
    }catch(error){
        console.log(error);
    }
}
//cuando va a guardar un dato que tiene el mismo identificador, lo que hace es reescribirlo, ero en oracle y en otros no es así
//leerlo, modificar en memoria y volver a escribir
    
export const editarLibro=async libro=>{
    try{
        //va a sobreescribir
        await fetch(`${url}/${libro.id}`, { //hay que darle cuál es el libro que vamos a actualizar aparte de la url
            method:'PUT',
            body:JSON.stringify(libro),
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