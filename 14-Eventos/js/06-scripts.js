//PROPAGACIÓN

//la idea es que el click se suele propagar

//normalmente tenemos el objeto window, luego el objeto document y luego el header y el body
//dentro del body tengo un div donde tengo, por ejemplo, dos enlaces. Ambos tienen un botón.
//Uno de los botones tiene otro enlace y otro botón
//y tenemos capturado el click en kis enlaces y en los botones
//cada click hace una cosa
//si no le digo nada, a su vez va a hacer click en varios capturadores de click (de ahí hacia arriba),
//por tanto habrá hecho varias cosas
//por tanto, existe una propagación (hacia arriba) de los eventos de los clicks
//si no queremos que se propague hacia arriba, hay que hacérselo saber con e.stopPropagation


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log('click en card');
})

infoDiv.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log('click en info');
})

titulo.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log('click en titulo');
})