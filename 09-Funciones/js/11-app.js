//objeto hecho con arrow functions
const reproductor={
    reproducr: id => console.log(`Reproduciendo canción ${id}`),
    pausar:() => {
        console.log('pausando....'); //como no lleva parámetro me obliga a poner los paréntesis
     }
}

reproductor.reproducr(30);
reproductor.pausar();

//añadir un método de forma dinámica, igual que cuando se le añade una propiedad
//se puede hacer con arrow function también
reproductor.borrar=function(id){
    console.log(`Borrando canción ${id}`);
}

reproductor.borrar(30);


const reproductor1={
    cancion:' ',
    reproducr: id => console.log(`Reproduciendo canción ${id}`),
    pausar:() => {
        console.log('pausando....');
     },
     //setters y getters
    set nuevaCanción(cancion){ //cuando llamo a nuevaCanción hace lo de a continuación:
        this.cancion=cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
        return this.cancion;
    }
    //los getters y los setters no son tan habituales en javascript como en java
};

reproductor1.nuevaCanción='Cancion 1';
reproductor1.obtenerCancion;     // Como se trata del método get no es necesario el parentesis





