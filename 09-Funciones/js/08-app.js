//ARROW FUNCTION
//(funciones flecha)

const aprendiendo =function(){
    console.log('Aprendiendo JavaScript 1');
}

const aprendiendo2 = ()=>{
    console.log('Aprendiendo JavaScript 2');
}

//Cuando la función sólo tiene un línea se puede hacer de esta forma, está implícito el return
//no hace falta encerrarlo entre llaves
const aprendiendo3 = () => console.log('Aprendiendo JavaScrip 3');
console.timeLog(aprendiendo3());

// Más corto aún, también está implícito el return
const aprendiendo4 =() => 'Aprendiendo JavaScript 4';
console.log(aprendiendo4());