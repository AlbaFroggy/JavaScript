const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    unidades:4,
    información:{
        garantía:'1 año',
        seguro:60,
        medidas:{
            peso:'6kg',
            alto:'30cm'
        },
        fabricacion:{
            país:'China',
            year:'2022'
        }
    }
}
//DESTRUCTURING CUANDO HAY OBJETOS DENTRO DE OBJETOS !!!!!!!!!!!!
//Esta técnica permite extraer propiedades de objetos y asignarlas a variables de forma rápida y compacta
//const {nombre,información:{fabricacion}}=producto;
//console.log(nombre);// "Monitor 20 pulgadas"
//console.log(fabricacion);  // { país: 'China', year: '2022' }

//más:
// const {nombre,información, información:{fabricacion}}=producto;
// console.log(nombre);
// console.log(información);
// console.log(fabricacion);

// const{nombre, información, información:{fabricacion:{país}}}=producto;
//fabricación no la crea porque la usa solo de catapulta para conseguir país

//const{nombre, información, información:{fabricacion, fabricacion:{país}}}=producto;
//crea fabricación


//saca unidades, garantía, seguro, peso, year
const {unidades, información:{garantía}, información:{seguro}, información:{medidas:{peso}}, información:{fabricacion:{year}}}=producto;
console.log(unidades);
console.log(garantía);
console.log(seguro);
console.log(peso);
console.log(year);