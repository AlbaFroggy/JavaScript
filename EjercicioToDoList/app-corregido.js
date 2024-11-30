//añadir la tarea y que tenga dos botones para confirmar o tachar la tarea
//to do list
window.addEventListener("load", () => {
    const formulario = document.getElementById("formulario");
    const listaTareas = document.getElementById("lista-tareas");
    const input = document.getElementById("input");
    const plantilla = document.getElementById("temp").content;

    let tareas = {};

    formulario.addEventListener("submit", (e) => {//capturamos el botón
        e.preventDefault();//le hacemos preventdefault porque tiene submit
        setTarea();//se lo asignamos al objeto tarea
    });

    listaTareas.addEventListener("click", (e) => {
        btnAccion(e); 
    });

    function setTarea() {
        //coger el contenido del input y rellenarlo si se cqueda algún blanco
        if (input.value.trim() === "") {
            console.log("No hay valor");
            return;
        }

        const tarea = {
            id: Date.now(),
            texto: input.value.trim(),
            completada: false
        };
        
        //coincide el índice con el id
        //para controlarlo
        tareas[tarea.id] = tarea;
        input.value = "";
        pintarTareas();
    }

    function pintarTareas() {
        //para poder inyectar un código html en una línea
        //lo que inyectamos es la plantilla, pero hay que rellenarla primero
        //esto es en vez de un appendchild
        listaTareas.innerHTML = ""; 
        //un fragmento va a ser una zona de memoria donde vamos a componer todo nuestro nodo
        //para luego cogerlo e inyectarlo en el nodo
        const fragment = document.createDocumentFragment();
        
        Object.values(tareas).forEach((tarea) => {
            const clon = plantilla.cloneNode(true);
            //modificamos la plantilla insertando el texto donde corresponda
            clon.querySelector("p").textContent = tarea.texto;
            //guardo el id en el dataset de los elementos i que hacen las veces de btones
            //se crean identificadores EN EL DOM y le pone ese número
            clon.querySelector(".fa-check-circle").dataset.id = tarea.id;
            clon.querySelector(".fa-times-circle").dataset.id = tarea.id;

            if (tarea.completada) {
                clon.querySelector(".alert").classList.replace("alert-warning", "alert-info");
                clon.querySelector(".fa-check-circle").classList.replace("fa-check-circle", "fa-undo-alt");
                clon.querySelector("p").style.textDecoration = "line-through";
            }
            //anexamos el clon al fragmento
            fragment.appendChild(clon);
        });
        //anexamos el fragmento al div listatareas
        listaTareas.appendChild(fragment);
    }

    function btnAccion(e) {
        const id = e.target.dataset.id;
        //él solo puso e.target;
        //si es el botón del check el de completar  
        if (e.target.classList.contains("fa-check-circle")) {
            tareas[id].completada = true;
             //si no, si es el botón de eliminar tarea
        } else if (e.target.classList.contains("fa-times-circle")) {
            delete tareas[id];
             //si no, marcar como no completada
        } else if (e.target.classList.contains("fa-undo-alt")) {
            tareas[id].completada = false;
        }

        pintarTareas();
    }
});