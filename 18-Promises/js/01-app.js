//Promesas
//el código que ejecutamos en javascript es secuencial
//el código está en el cliente (navegador)
//tenemos al otro lado un servidor (que hará lo que tenga que hacer)
//si en un punto del código hago una petición al servidor, en teoría sigue ejecutando hacia abajo
//puede pasar que aunque siga ejecutando, no haya conexión, por ejemplo
//da un error

//antes no había forma de detectar este error,
//pero: UNA PROMESA es un trozo de código que hace una solicitud donde sea y te promete que te va a devolver algo:
//o un error, o datos

//vamos a usar settimeout para simular que estamos accediendo a un sitio mediante petición y hay un retardo en la respuesta

//las promesas se utilizan mucho en singleway y fetch


//CALLBACK- la parte que usa las promesas
const paises=['Francia','España','Portugal','Italia'];

function nuevoPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais);
        callback(); //el que le pueda pasar función a otra función se llama programación funcional
    },3000)
}

function mostrarPaises(){
    setTimeout(()=>{
        paises.forEach(pais=>{
            console.log(pais);
        })
    },4000)
    console.log("Esperando...");
}
//le estamos diciendo que cuando llame a mostrar, se va a producir un retardo de cuatro segundo
//javascript de mientras continúa y pasado ese tiempo lo ejecuta
//estamos simulando asincronía


//mostrarPaises();

nuevoPais('Alemania', mostrarPaises); //sale después de los 3 segundos + 4 segundos=7 segundos
//qué pasaría si no estuviese sincronizado? mientras estoy metiendo datos en un array, el otro como va a destiempo,
//va a mostrar lo que tenía, no lo que estoy introduciendo
