console.log(1+1);
//ha encontrado esto
// hola(); //lo comentamos
//ha encontrado una función que no existe, por tanto se para
console.log(2+2);
//y esto no lo hace


try{
    hola(); //que no existe

}catch(error){
    console.log(error)
}

console.log(3+3);

//aparte de para errores, se suele utilizar para dar una segunda opción si algo falla
//pero que te de la opción de continuar
