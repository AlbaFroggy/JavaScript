const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio'];

meses[0]='Enesto'; //para cambiar
meses[7]='Agosto'; //crea una nueva posición
//si intentamos crear una posición mucho más allá me va a dejar huecos
meses[10]='Diciembre'; //te dice que es la 10, pero no crea las posiciones que hay entre medias,
//por lo que sigue siendo la 8

console.table(meses);

