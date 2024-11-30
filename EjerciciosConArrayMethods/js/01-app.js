//1.- Crea dos funciones una llamada pushK, shiftK, se le pasa un array como parámetro,
//de modo que utilizando el operador spread en arrays simule las funciones push y shift,

const meses = ['Enero', 'Febrero', 'Marzo'];

function pushK(array, element) {
    return [...array, element];  //añadido al final
}

function shiftK(array, element) {
    return [element, ...array];  //añadido al principio
}

// Llamada a las funciones
let nuevoMeses = pushK(meses, 'Septiembre');
console.log(nuevoMeses);

nuevoMeses = shiftK(nuevoMeses, 'Octubre');
console.log(nuevoMeses);

//2.- Haz lo mismo pero para las operaciones unshift y pop.
function unshiftK(array, element) {
    return [element, ...array];  // Añade el nuevo elemento al principio
}

function popK(array) {
    return [...array.slice(0, -1)]; // copiar todos los elementos excepto el último
}

// Llamada a las funciones
nuevoMeses = shiftK(nuevoMeses, 'Abril');
console.log(nuevoMeses);

nuevoMeses = pushK(meses, 'Mayo');
console.log(nuevoMeses);

//3.-Crea una función flecha al que se le pase una matriz, y devuelva si la matriz es cuadrada.
//Recuerda que las matrices cuadradas son aquellas que tienen el mismo número de filas que de columnas
const m1= [[1,2,3], [4,5,6],[7,8,9]];
const m2= [[1,2,3], [4,5,6]];

const esCuadrada = (matriz) => {
    // Verificar si todas las filas tienen la misma longitud que el número de filas (matriz.length)
    return matriz.every(fila => fila.length === matriz.length);
};

console.log(esCuadrada(m1));  // true 
console.log(esCuadrada(m2));  // false

//4.- Crea una Arrow function al que se le pase dos parámetros, que debe ser dos matrices cuadradas,
//y devuelva la suma de las matrices. SOLO SI TIENEN LAS MISMAS FILAS Y COLUMNAS
//Deberá devolver undefined si los parámetros no son matrices cuadradas.
const m3= [[5,2,1], [4,2,7],[5,9,3]];

const sumaMatriz = (matriz1, matriz2) => {
    // Verificar si ambas matrices son cuadradas y tienen las mismas dimensiones
    if (!esCuadrada(matriz1) || !esCuadrada(matriz2) || matriz1.length !== matriz2.length) {
        return undefined; // Si no son cuadradas o no tienen el mismo tamaño, devolver undefined
    }

// Crear una nueva matriz para almacenar la suma
let matrizSuma = [];
// Iterar por cada fila y columna para sumar los elementos correspondientes
for (let i = 0; i < matriz1.length; i++) {
    let filaSuma = [];
    for (let j = 0; j < matriz1[i].length; j++) {
        filaSuma.push(matriz1[i][j] + matriz2[i][j]);
    }
    matrizSuma.push(filaSuma); // Añadir la fila sumada a la matrizSuma
}
return matrizSuma;
};

console.log(sumaMatriz(m1,m3));
console.log(sumaMatriz(m1,m2));

//5.- Dada la siguiente matriz, utiliza el método include para comprobar si esta el elemento Soria,
//y que devuelva el índice de su posición. Una forma de hacerlo es utilizando una función.

const ciudades = [
    ["Albacete", "Ávila", "Córdoba", "Murcia"],
    ["Toledo", "Soria", "Zaragoza", "Cáceres"],
    ["Cuenca", "Segovia", "Teruel", "Badajoz"],
    ["Guadalajara", "Jaén", "Alicante", "Madrid"],
    ["Ciudad Real", "Granada", "Valencia", "CLM"]
];

const buscarCiudad = (matriz, ciudad) => {
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i].includes(ciudad)) {
            return { fila: i, columna: matriz[i].indexOf(ciudad) };
        }
    }
    return null; // Devuelve null si no encuentra la ciudad
};

const resultado = buscarCiudad(ciudades, 'Soria');
if (resultado) {
    console.log(`Soria se encuentra en la fila ${resultado.fila} y la columna ${resultado.columna}`);
} else {
    console.log('Soria no está en la matriz');
}

//6.- Configura un array llamado horarioProfesor donde cada día de la semana es un objeto con los siguientes campos:
 //- día (lunes, martes, miércoles, jueves, viernes), 
 //-horainicio, 
 //-horafin, 
// -asignatura(módulo), 
// -aula. 
// Según el horario de un profesor de 5 días, utiliza el arrayMethods
//comprobar si el profesor imparte la asignatura ASO
const horarioProfesor = [
    {
        dia: "lunes",
        horaInicio: "16:35",
        horaFin: "17:30",
        asignatura: "DWEC",
        aula: "Aula 100"
    },
    {
        dia: "martes",
        horaInicio: "17:30",
        horaFin: "18:25",
        asignatura: "PMV",
        aula: "Aula 123"
    },
    {
        dia: "miércoles",
        horaInicio: "16:35",
        horaFin: "17:30",
        asignatura: "GUARDIA",
        aula: "Aula 100"
    },
    {
        dia: "jueves",
        horaInicio: "16:35",
        horaFin: "17:30",
        asignatura: "ASO",
        aula: "Aula 104"
    },
    {
        dia: "viernes",
        horaInicio: "17:30",
        horaFin: "18:25",
        asignatura: "GUARDIA",
        aula: "Aula 132"
    }
];

const existeASO = horarioProfesor.some(horario => horario.asignatura === 'ASO');
console.log(existeASO); // true

// 7.- Extraer los días que no tiene GUARDIA
const noGuardia = horarioProfesor.filter(horario => horario.asignatura !== 'GUARDIA');
console.log('Días sin guardia:', noGuardia);

// 8.- Extraer los días que tiene GUARDIA
const guardia = horarioProfesor.filter(horario => horario.asignatura === 'GUARDIA');
console.log('Días con guardia:', guardia);

//9.- Usando every, comprobar si imparte la asignatura PRIA.


let sipria = horarioProfesor.every(horario => horario.asignatura === 'PRIA');
console.log('¿Se imparte la asignatura PRIA?', sipria);