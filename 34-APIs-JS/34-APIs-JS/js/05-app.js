const salida=document.querySelector('#salida');
const microfono=document.querySelector('#microfono');
//no lo soportan todos los navegadores (chrome y edge sí, safari no)

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition=webkitSpeechRecognition;

    //creamos el elemento:
    const recognition=new SpeechRecognition();
    //cuando dejas de hablar, se para

    recognition.start(); 

    recognition.onstart=function(){
        salida.classList.add('mostrar');
        //va a mostrar lo que has hablado en un sitio del código
        salida.textContent='Escuchando...';
    }

    recognition.onspeechend=function(){
        salida.textContent='Se dejó de grabar';
        recognition.stop();
    }

    //todo se ha dejado en una zona interna del navegador
    //lo transcribe del español, inglés y alemán
    recognition.onresult=function(e){ //e es el elemento que hemos recogido de la grabación
        //cogemos dos valores del objeto que devuelve y hacemos un spread
        const {confidence,transcript}=e.results[0][0];//confidence: valor entre 0 y 1 y te dice la fiabilidad de la transcripción
        const speech=document.createElement('p'); //creamos un párrafo
        speech.innerHTML=`Grabado: ${transcript}`; //ahí metemos la transcripción que ha hecho
        
        const seguridad=document.createElement('p');
        seguridad.innerHTML=`Confianza de la transcripción: ${parseInt(confidence*100)}%`;

        //ahora lo añadimos
        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
}