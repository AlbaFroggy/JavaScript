//Una función siempre devuelve algo
//En un procedimiento no hay nada que devolver (en java con void)

function InciarApp(){
    console.log("Iniciando App....");

    SegundaFuncion();
}

InciarApp();

function SegundaFuncion(){
    console.log("Desde la segunda funcion");
    UsuarioAutenticado('Angela')
}


function UsuarioAutenticado( nombre){
    console.log('Autenticando usuario....');
    console.log(`Usuario ${nombre} autenticado existosamente`);
}