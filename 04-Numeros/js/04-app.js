//ORDEN DE EJECUCIÓN DE LAS OPERACIONES

let resultado;

resultado=20+30*3; //la multiplicación tiene preferencia
resultado=(20+30)*3; //para que lo que está entre paréntesis tenga preferencia
resultado=(30+10+15)*0.3; //calcula el 30% de la suma
resultado=(30+10+15)*30/100; //lo mismo que el anterior

//CÁLCULO DEL IVA
resultado(30+10+15)*1.16; //aplica el iva del 16%
