window.addEventListener("load", () => {

let carrito = [];
const carritoContainer = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');

//todos los eventos
cargarEventListeners();

function cargarEventListeners() {
    //añadir al carrito
    agregarCarritoBtns.forEach(btn => {
        btn.addEventListener('click', agregarCurso);
    });

    //eliminar del carrito
    carritoContainer.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

//Función agregar curso
function agregarCurso(e) {
    e.preventDefault();
    const curso = e.target.parentElement.parentElement; //captura el card

    //crea un objeto con la información
    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1
    };

    //¿existe?:
    const existe = carrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        //sí: aumentar la cantidad
        const cursos = carrito.map(curso => { 
        /*!!!!!!!!!!!recordatorio: .map crea un nuevo array con los resultados de la llamada 
        a la función indicada aplicados a cada uno de sus elementos*/
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // devuelve curso actualizado
            } else {
                return curso; // devuelve los cursos que no son el mismo curso
            }
        });
        carrito = [...cursos];
    } else {
        //no: agregar al carrito
        carrito = [...carrito, infoCurso];
    }

    actualizarCarrito();
}

//Función eliminar curso
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        carrito = carrito.filter(curso => curso.id !== cursoId); //cogemos solo los de esa id para borrar
        actualizarCarrito(); //actualizar después de eliminar
    }
}

//Función vaciar carrito
function vaciarCarrito() {
    carrito = []; //resetea el carrito
    limpiarHTML(); //elimina todo el HTML
}

//Función actualizar HTML del carrito
function actualizarCarrito() {
    //limpiar el HTML anterior
    limpiarHTML();

    //recorrer el array carrito y generar el HTML
    carrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;

        //agregar el HTML del carrito en el tbody
        carritoContainer.appendChild(row);
    });
}

//limpiar los cursos del carrito en el HTML
function limpiarHTML() {
    while (carritoContainer.firstChild) {
        carritoContainer.removeChild(carritoContainer.firstChild);
    }
}

});





























