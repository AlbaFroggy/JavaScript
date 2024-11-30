//FOR

for(let i=0; i<10;i++){
    console.log(`Número:${i}`);
}

for(let i=0; i<10;i+=2){
    console.log(`Número:${i}`);
}

for(let i=0; i<10;i++){
    if(i%2==0){ //si par
        console.log(`Número:${i} es par`);
    }else{
        console.log(`Es impar ${i}`);
    }
       
}
//array de objetos
const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Auriculares', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];

for(let i=0; i<carrito.length;i++){
    console.log(carrito[i]);
}