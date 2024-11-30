//vamos a iniciar toda la pagina web, es decir le vamos a cargar todos los datos que van hacer falta

//class form-select es una clase de bootstrap

//funcion iniciarApp
function iniciarApp() {
    //vamos a cargar ese trozo de html para insertar lo que hace falta
    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');

    if(selectCategorias){
        selectCategorias.addEventListener('change',selecionarCategorias);
        obtenerCategorias();
    }

    const favoritosDiv=document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }
    
    //nos hace falta recoger los cambios de categoria

    const modal = new bootstrap.Modal('#modal', {});

    //obtener las categorias
    obtenerCategorias(); //tenemos que ir al api para obtener informacion

    function obtenerCategorias() {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        //idCategory --> nos devuelve el id de la categoria
        //strCategory --> nos devuelve el nombre (este es el que nos hace falta)
        //strCategoryThumb --> nos devuelve la url de la imagen
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []) {
        console.log(categorias);
        categorias.forEach(categoria => {
            const elementOption = document.createElement('OPTION'); //OPTION EN MAYUSCULAS SIEMPRE
            elementOption.value = categoria.strCategory;
            elementOption.textContent = categoria.strCategory;
            selectCategorias.appendChild(elementOption);
        })

    }
    //tenemos que pasar el evento porque se produce un evento al seleccionarlo
    function selecionarCategorias(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        //idMeal --> devuelve el id
        //strMeal --> devuelve el nombre de la receta
        //strMealThumb --> devuelve la url de la imagen
        fetch(url)
            .then(respuesta => { return respuesta.json() })
            .then(resultado => mostrarRecetas(resultado.meals))
    }

    function mostrarRecetas(recetas = []) {
        limpiarHTML(resultado);
        const heading=document.createElement('H2');
        heading.classList.add('text-center','text-black','my-5');
        heading.textContent=recetas.length?'Resultados':'No hay resultados';
        resultado.appendChild(heading);
        console.log(recetas);
        recetas.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta;
            const recetaBoton = document.createElement('BUTTON');
            recetaBoton.classList.add('btn', 'btn-danger', 'w-100');
            recetaBoton.textContent = 'Ver Recetas';

            //ventana modal
            //bs y bsToggle son componentes de bootstrap
            recetaBoton.dataset.bsTarget = "#modal"; //le estamos diciendo que hay una zona en el html con el identificador modal
            recetaBoton.dataset.bsToggle = "modal";

            //IMPORTANTE diferencia entre recetaBoton.onclick=seleccionarReceta(idMeal); -> esta lo asigna a todo no solo a uno entonces todos tienen un mismo click
            recetaBoton.onclick = function () {
                seleccionarReceta(idMeal??receta.id);
            }

            //inyectar html !!!!!!!!!!!!!!!!!!!!!!!
            const contenedorRecetas = document.createElement('DIV');
            //le vamos a decir que del total de columnas que coja 4
            contenedorRecetas.classList.add('col-md-4');

            //vamos añadir otro div que es para la tarjeta
            const cardReceta = document.createElement('DIV');
            //va a tener dos estilos
            cardReceta.classList.add('card', 'mb-4');

            //creamos un nodo que sea una imagen
            const recetaImagen = document.createElement('IMG');
            //le vamos a dar una clase bootstrap
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal} ?? receta.titulo`;
            recetaImagen.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaBoton);
            cardReceta.appendChild(recetaImagen);
            cardReceta.appendChild(recetaCardBody);

            contenedorRecetas.appendChild(cardReceta);

            resultado.appendChild(contenedorRecetas);

        })

    }

    function seleccionarReceta(id) {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function mostrarRecetaModal(receta) {
        const { idMeal, strInstructions, strMeal, strMealThumb } = receta;
        const modalTitle = document.querySelector('.modal-title');
        const modalBody = document.querySelector('.modal-body');
        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
            <h3 class="my-3">Intrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y cantidades</h3>
        `
        //AGREGAR INGREDIENTES Y CANTIDADES

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');
        for (let i = 1; i <= 20; i++) {
            //vamos a preguntar si ese ingrediente tiene o no cosas
            if (receta[`strIngredient${i}`]) { //si no está vacío...
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                //hay que colocar en la card los ingredientes y cantidades
                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente}: ${cantidad}`;
                //se lo añadimos
                listGroup.appendChild(ingredienteLi)

                //console.log(${ingrediente}--${cantidad});
                //vemos las medidas y las cantidades
            }
        }
        modalBody.appendChild(listGroup);
        const modalFooter= document.querySelector('.modal-footer');
        limpiarHTML(modalFooter); //para que no repita los botones

        //AGREGAR BOTONES FAVORITOS Y CERRAR
        //lo mejor es crearlo de forma dinámica por si se cambian funciones o algo
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn','btn-danger','col'); //danger es rojo y col es para distribuir en el espacio
        //si hubiera uno ocupa todo, si dos, por la mitad, si tres, dimensiona los tres iguales
        //AÑADIR SU TEXTO:
        //btnFavorito.textContent='Guardar Favorito';
       
        

        const btnCerrar = document.createElement('BUTTON');
        btnCerrar.classList.add('btn','btn-secondary','col'); //secondary es para que lo saque grisáceo
        btnCerrar.textContent='Cerrar';

        btnFavorito.textContent=existeStorage(idMeal)?'Eliminar Favorito':'Guardar Favorito'; //si existe en el storage tal, si no, tal
        //uno es para cuando acabas de llegar y otro es para cuando le das
       
        btnCerrar.onclick = function() {
            modal.hide();
        };

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);
        //están agregados, pero tienen que hacer algo
        //FUNCIONALIDAD DE LOS BOTONES:

        //para favorito- cargar en el localstorage lo que tenemos en la tarjeta
        btnFavorito.onclick=function(){
            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent='Guardar Favorito';
                return; //no devuelve nada, no lo agrega
                //como es un return se SALE DE LA FUNCIÓN y no hace lo siguiente
            }
            
            agregarFavorito({
                //le pasamos un objeto
                id:idMeal,
                titulo:strMeal,
                img:strMealThumb,
            })
            btnFavorito.textContent='Eliminar Favorito';
        }

        console.log(receta);

        modal.show();
    }

    //este limpiador sirve para limpiar cualquier zona del html que nos interese
    function limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild)
        }
    }

    function agregarFavorito(receta){
        //vamos a extraer 
        const favoritos=JSON.parse(localStorage.getItem('favoritos')) ?? [];
        //en el caso de que el lado izq sea nulo, aplica el derecho
        //es decir, si no hay ningún favorito, crea un array
        localStorage.setItem('favoritos',JSON.stringify([...favoritos,receta])) //favoritos puede estar vacío, y se le añade la receta

    }    

    function existeStorage(id){
        const favoritos=JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito=>favorito.id===id); //IMPORTANTE PONER FAVORITO, EN VEZ DE FAVORITOS, SI NO SE AGREGA IGUAL
        //como devuelve verdadero si hay uno o más
    }

    
//     function existeStorage(id) {
//     const rawData = localStorage.getItem('favoritos');
//     console.log("Raw favoritos data:", rawData);
//     const favoritos = JSON.parse(rawData) || [];
//     if (!Array.isArray(favoritos)) {
//         console.error("Favoritos is not an array. Resetting...");
//         localStorage.setItem('favoritos', JSON.stringify([]));
//         return false;
//     }
//     return favoritos.some(favorito => favorito.id === id);
// }

// }

    //el texto del botón tiene que cambiar a quitar de favoritos cuando lo agreguemos
    //funcion si ya existe ese al que le ha dado favorito
    function eliminarFavorito(id){
        const favoritos=JSON.parse(localStorage.getItem('favoritos')) ?? [];
        //va a devolver favoritos si es distinto de null, si no, devolvería un array vacío
        const nuevosFavoritos=favoritos.filter(favorito=>favorito.id!==id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function obtenerFavoritos(){
        const favoritos=JSON.parse(localStorage.getItem('favoritos')??[]); //si no existe nada me devuelve un array vacío
        if (favoritos.length){
            mostrarRecetas(favoritos);
            return;
        }
        const noFavoritos=document.createElement('P');
        noFavoritos.textContent='No hay favortos disponibles';
        noFavoritos.classList.add('fs-4','text-center','font-bold','mt-5');
        favoritosDiv.appendChild(noFavoritos);
    }
}
document.addEventListener('DOMContentLoaded', iniciarApp);

//selecionarCategorias lo que hace es buscar todos los elementos que tiene esa categoria