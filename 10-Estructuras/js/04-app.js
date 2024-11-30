//SWITCH
//es una simplificación del IF
//es obligatorio poner el default
//dentro de cada case para romper la dinámica se puede poner "break", como en java
//se podría poner un continue hasta que se ponga el defaulta para que esté dentro del switch continuamente

const metodoPago='efectivo';

switch(metodoPago){
    case 'efectivo':
          console.log(`Pagaste con ${efectivo}`);
          break;
    case 'cheque ':
          console.log('Pagas con cheque');
          console.log('talonario');
          break;
    default:
          console.log('No has seleccionado ningún método');
          break;
}