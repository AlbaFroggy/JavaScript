//Para prevenir los efectos no deseados del punto anterior usamos el DELEGATION

const cardDiv=document.querySelector('.card');
// solo hay un event listener y luego con el e.target.classList.contains('x') averiguamos a cuál se ha clickado
cardDiv.addEventListener('click', (e)=>{
    console.log(e.target.classList)
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en título')
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio')
    }
    if(e.target.nodeName==='IMG'){
        console.log('Diste click en la imagen')
    }
})