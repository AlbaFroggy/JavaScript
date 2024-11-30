//con viaje.html
//que cuando llegue a la clase premium me saque el mensaje

document.addEventListener('DOMContentLoaded',()=>{
    const observer=new IntersectionObserver((entries) => {
        //IntersectionObserver es un objeto que permite ejecutar una función de callback 
        //cuando un elemento observado entra o sale del área visible del usuario
        
        //ese observador se va a quedar esperando a que ocurra lo que le indicquemos
        //eso devuelve un elemento muy grande (entries) y solo nos interesa para nuestro caso 
        //el intersect
        console.log(entries[0]);
        //entries es un array de objetos que contienen
        //información sobre los elementos que están siendo observados 

        if(entries[0].isIntersecting){
            console.log("Estás en la zona Premium")
        }
        //cuando llegues a la zona premium te sale
    })
    
    observer.observe(document.querySelector('.premium'));
    //el método observe() le indica al IntersectionObserver
    //que empiece a observar el primer elemento que tenga la clase .premium.
    //Este es el elemento que desencadenará el mensaje cuando se haga visible en el viewport
})