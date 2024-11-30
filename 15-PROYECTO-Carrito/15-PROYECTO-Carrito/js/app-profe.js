window.addEventListener("load", () => {
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const listaCursos = document.querySelector('#lista-cursos');

    let articulosCarrito = [];
    registrarEventListeners() //IMPORTANTE TENER LISTENERS CON S
    function registrarEventListeners() {
        listaCursos.addEventListener('click', agregarCurso);
        carrito.addEventListener('click', eliminarCurso); //si no los añades no suceden
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

        /* //También se podría poner directamente aquí:
        vaciarCarritoBtn.addEventListener('click', () => {
            articulosCarrito = []; // resetea el carrito
            limpiarHTML(); // elimina todo el HTML del carrito
        }); */
    }
    function agregarCurso(e) {
        //estoy haciendo click en la lista de cursos
        //pero nos interesa recuperarlo solo si hacemos click en el enlace-botón
        if (e.target.classList.contains('agregar-carrito')) {
            //estamos diciendo que si le das ahí, recuperas desde el abuelo, los datos
            const cursoSeleccionado = e.target.parentElement.parentElement; //captura el card
            leerDatosCurso(cursoSeleccionado); //hacer función para leer los datos del curso
        }

    }
    function leerDatosCurso(curso) {
        const infoCurso = { //GUARDAMOS LA INFO SELECCIONADA EN UN OBJETO
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1,
        };


        const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

        if (existe) {
            // Si ya existe, actualizamos la cantidad
            /*//así también valdría:
            const cursos=articulosCarrito.map(curso=> {
                articulosCarrito = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                    return curso;
                }
                return curso;
            }) articulosCarrito = [...cursos];
            } else {
            articulosCarrito = [...articulosCarrito, infoCurso]; }
            //estoy rellenando el array porque cojo lo que tenía antes + la info
        }*/
            articulosCarrito = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                    return curso;
                }
                return curso;
            })
        } else {
            // Si no existe, agregamos el curso al carrito
            articulosCarrito = [...articulosCarrito, infoCurso];
            //estoy rellenando el array porque cojo lo que tenía antes + la info
        }

        carritoHTML(); //que me inyecte en el tbody la información que tiene el array
    };

    function carritoHTML() {
        limpiarHTML(); //TIENE QUE IR AQUÍ SÍ O SÍ PORQUE GENERA OTRA VEZ TODO EL ARRAY

        articulosCarrito.forEach(curso => { //curso va a ser la variable temporal que va almacenando el recorrido

            //vamos a usar el destruction para hacerlo
            const { imagen, titulo, precio, cantidad, id } = curso;
            const row = document.createElement('tr');
            row.innerHTML = `<td><img src="${imagen}" width="100"></td>
                            <td>${titulo}</td>
                            <td>${precio}</td>
                            <td>${cantidad}</td>
                            <td>
                                <a href="#" class="borrar-curso" data-id="${id}">X</a>
                            </td>`; //usamos este acento
            contenedorCarrito.appendChild(row);
        })
    };

    //Eliminar los cursos del tbody, lo que afecta al html definitivo
    //para que no se pinten repetidos
    function limpiarHTML() {

        //contenedor.Carrito.innerHTML='';
        //ese es más costoso compatucionalmente
        //más memoria y más procesador
        //más rápido hacer un while:
        while (contenedorCarrito.firstChild) {
            //si es un número distinto de 0 va pasándolo
            contenedorCarrito.removeChild(contenedorCarrito.firstChild); //aquí vamos borrando hijos
        }
    }

    function eliminarCurso(e) {
        e.preventDefault();
        // Detectar si ha pinchado botón de eliminar curso
        if (e.target.classList.contains('borrar-curso')) {
            //primero hay que localizar el ID porque no sé en qué posición está
            const cursoId = e.target.getAttribute('data-id');
            // Eliminar del array de articulosCarrito filtrando por el data-id
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
            //si fuera === te borraría todos los que no has pinchado
            //borramos solo los que no coincidan
            //ahora tengo en el array aquellos que no coinciden
            carritoHTML(); // Actualizar el HTML después de eliminar
        }
    }

    //Función vaciar carrito
    function vaciarCarrito() {
        articulosCarrito = []; //resetea el carrito
        limpiarHTML(); //elimina todo el HTML
    }

});