//MÉTODOS DE PROPIEDAD
//crear 2 métodos dentro de un objeto
const reproductor={
    reproducr:function(id){
        console.log(`Reproduciendo canción ${id}`);
    },
    pausar:function(){
        console.log('pausando....');
    }
}

reproductor.reproducr(30);
reproductor.pausar();


reproductor.borrar=function(id){
    console.log(`Borrando canción ${id}`);
}

reproductor.borrar(30);

//Dejar como ejercicio que añadan dos métodos:
//Uno para crear una playlist junto con su nombre y otro para reproducir una playlist

reproductor.crearplay=function(nombre){
    console.log(`Creando playlist ${nombre}`);
}

reproductor.crearplay("Hola");

reproductor.reprplay=function(nombre){
    console.log(`Reproduciendo playlist ${nombre}`);
}
reproductor.reprplay("Hola");