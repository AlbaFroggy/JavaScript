//1 Crea una variable que represente la siguiente matriz M5X4,
//que representa las provincias limítrofes con Castilla-La Mancha
console.log("EJERCICIO 1");

const M5X4=[['Albacete','Toledo','Cuenca','Guadalajara'],['Ciudad Real','Ávila','Soria','Segovia'],['Jaén','Granada','Córdoba','Zaragoza'],['Teruel','Alicante','Valencia','Murcia'],['Cáceres','Badajoz','Madrid','CLM']];

console.table(M5X4);

//2  Dado M5X4 visualiza el contenido del elemento (3,2) y el elemento (2,3).
//Usando literals visualiza el mensaje “La ciudad (3,2) es …”, “La ciudad (2,3) es …”
console.log("EJERCICIO 2");

console.log(M5X4[3][2]);
console.log(M5X4[2][3]);
console.log(`La ciudad (3,2) es ${M5X4[3][2]}`);
console.log(`La ciudad (2,3) es ${M5X4[2][3]}`);

//3 Muestra sólo los elementos que estén en las posiciones (i,j) donde i=j, es decir (1,1),(2,2), etc.
console.log("EJERCICIO 3");
for (let i = 0; i < M5X4.length; i++) {
    for (let j = 0; j < M5X4[i].length; j++) {
        if (i === j) {
            console.log(M5X4[i][j]);
        }
    }
}

//4 Recorre la matriz visualizando el nombre de la provincia junto su posición en la matriz. 
//Debes usar foreach.
console.log("EJERCICIO 4");
M5X4.forEach((fila, i) => {
    fila.forEach((M5X4, j) => {
        console.log(`Provincia: ${M5X4} -Posición: (${i},${j})`);
    });
});

// 5 Haz lo mismo que el ejercicio anterior pero usando for()
console.log("EJERCICIO 5");
for (let i = 0; i < M5X4.length; i++) {
    for (let j = 0; j < M5X4[i].length; j++) {
        console.log(`Provincia: ${M5X4[i][j]} -Posición: (${i},${j})`);
    }
}

// 6 Usando destructuring asigna a la variable fila2 la segunda fila de la matriz dada
console.log("EJERCICIO 6");
const [, fila2] = M5X4;
console.log(fila2);

//7 Usando destructuring extraer las provincias de Jaén, Granada, Córdoba, Zaragoza
console.log("EJERCICIO 7");
const [, , fila3] = M5X4;
console.log(fila3);

//8 Almacena en una variable, usando map, las provincias de la comunidad Andalucía.
console.log("EJERCICIO 8");
const provinciasAndalucia = M5X4[2].map(function(provincia, index){
    if (index === 0) return `${M5X4[2][0]}`;
    if (index === 1) return `${M5X4[2][1]}`;
    if (index === 2) return `${M5X4[2][2]}`;
    if (index === 3) return ` `;
});

console.log(provinciasAndalucia); 
//9 Haz lo mismo que el anterior pero con la comunidad de Castilla-Leon.
console.log("EJERCICIO 9");
const provinciasCL = M5X4[1].map(function(provincia, index) {
    if (index === 0) return ` `;
    if (index === 1) return `${M5X4[1][1]}`;
    if (index === 2) return `${M5X4[1][2]}`;
    if (index === 3) return `${M5X4[1][3]}`;
});

console.log(provinciasCL); 
