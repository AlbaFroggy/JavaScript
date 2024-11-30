window.addEventListener("load", () => {
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const listaCursos = document.querySelector('#lista-cursos');

    let articulosCarrito = [];
    registrarEventListeners();//para registrar todos los eventos
    function registrarEventListeners() {
        listaCursos.addEventListener('click', agregarCurso);

        // Evento para eliminar curso del carrito
        carrito.addEventListener('click', eliminarCurso);

        // Evento para vaciar el carrito
        vaciarCarritoBtn.addEventListener('click', () => {
            articulosCarrito = []; // resetea el carrito
            limpiarHTML(); // elimina todo el HTML del carrito
        });
    }

    function agregarCurso(e) {
         //estoy haciendo click en la lista de cursos
        //pero nos interesa recuperarlo solo si hacemos click en el enlace-botón
        if (e.target.classList.contains('agregar-carrito')) {
            const cursoSeleccionado = e.target.parentElement.parentElement; //captura el card
            //estamos diciendo que si le das ahí, recuperas desde el abuelo, los datos
            leerDatosCurso(cursoSeleccionado); // leer los datos del curso
        }
    }

    function leerDatosCurso(curso) {
        //obtenemos los datos del curso seleccionado
        const infoCurso = { //GUARDAMOS LA INFO SELECCIONADA EN UN OBJETO
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1,
        };

        // Verificar si el curso ya existe en el carrito
        const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

        if (existe) {
            // Si ya existe, actualizamos la cantidad
            articulosCarrito = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                }
                return curso;
            });
        } else {
            // Si no existe, agregamos el curso al carrito
            articulosCarrito = [...articulosCarrito, infoCurso]; 
            //estoy rellenando el array porque cojo lo que tenía antes + la info
        }

        carritoHTML(); // actualizar el carrito en el HTML
        //que me inyecte en el tbody la información que tiene el array
    }

    function carritoHTML() {
        // Limpiar el HTML previo
        limpiarHTML();

        // Recorrer el carrito y generar el HTML
        articulosCarrito.forEach(curso => {
            //curso va a ser la variable temporal que va almacenando el recorrido
            const { imagen, titulo, precio, cantidad, id } = curso;
            const row = document.createElement('tr');
            //vamos a usar el destruction para hacerlo
            row.innerHTML = `
                <td><img src="${imagen}" width="100"></td>
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>
                    <a href="#" class="borrar-curso" data-id="${id}">X</a>
                </td>
            `;//usamos este acento

            // Agregar el HTML del carrito en el tbody
            contenedorCarrito.appendChild(row);
        });
    }

    function eliminarCurso(e) {
        //detectar el botón de eliminar curso
        if (e.target.classList.contains('borrar-curso')) {
            const cursoId = e.target.getAttribute('data-id');

            //eliminar del array de articulosCarrito por el data-id
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

            carritoHTML(); //actualizar el HTML después de eliminar
        }
    }

    //para que no se pinten repetidos
    function limpiarHTML() {
        // Limpiar el contenido del tbody
        while (contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        }
    }
});
