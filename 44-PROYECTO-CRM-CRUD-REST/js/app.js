import { obtenerClientes, eliminarCliente} from "./API.js";
//importante poner .js o no funcionará
//declaramos el módulo de modo que se quede totalmente aislado

//(function(){})() //importante el último () o no hará nada

(function () {
    //cada cliente será una línea
    const listado = document.querySelector('#listado-clientes');
    //al cargarse la pag web, primero intentamos leer la base de datos
    document.addEventListener('DOMContentLoaded', mostrarClientes); //mostramos los clientes nada más se cargue la pag

    listado.addEventListener('click', confirmarEliminar); //sin ()

    //función asíncrona porque va a acceder a la base de datos
    async function mostrarClientes() {
        const clientes = await obtenerClientes();

        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id } = cliente;
            //creamos una etiqueta tr
            const row = document.createElement('TR');

            row.innerHTML += `<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>

                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>

                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">

                    <p class="text-gray-700">${telefono}</p>

                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    

                    <p class="text-gray-600">${empresa}</p>

                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">

                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>

                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>

                </td>

            `;
            //añadimos con appendchild

            listado.appendChild(row);

        });
    }
    function confirmarEliminar(e){
        //hay que adivinar el target donde ha hecho click
        if(e.target.classList.contains('eliminar')){
            const clienteId=parseInt(e.target.dataset.cliente); //si no, quitar el parseint
            //cada vez que inserto una fila le pongo un id
            //esto es un identificador dedicado o personal -> data-cliente="${id}" 
            //para luego preguntar
            const confirmar=confirm("¿Quieres eliminar este registro?");
            //es una ventana que ya tiene el navegaddor por defecto el confirm
            if(confirmar){
                //si confirmar es verdadero:
                eliminarCliente(clienteId);
            }
        
        }
    }


})()