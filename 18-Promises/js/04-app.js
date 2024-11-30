const paises=[];

const nuevoPais=(pais)=>new Promise((resolve)=>{
    //`para producir un retardod e un servidor
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`);
    }, 3000);
})

nuevoPais('España')
    .then((resultado)=>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then((resultado)=>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Italia');
    })
    .then((resultado)=>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Italia');
    })
    .then((resultado)=>{
        console.log(resultado);
    });