
//10 Crea el objeto estudiante1 con la siguiente información
console.log("EJERCICIO 10");
const estudiante1 = [
    { nombre: 'Luis' },
    { apellidos: 'Martin Rojas' },
    { edad: '22' },
    { nacionalidad: 'española' },
    { dni: '2484637K' }
];

// 11 Al objeto anterior añádele este otro objeto llamado matrícula
console.log("EJERCICIO 11");
const matricula = [
    {nie: '245887'},
    {ies: 'Azarquiel'},
    {estudios: 'DAW'},
    {curso: '24/25'}
];

//estudiante1.push(matricula);
console.table(estudiante1);

//12 ¿De que forma representarías la información de un estudiante que se ha matriculado
//en diferentes estudios a lo largo de 6 años?.
//estudiante1.shift(estudiante1);
//console.table(estudiante1);
console.log("EJERCICIO 12");
const matriculas = [];

const matricula1 = [
    {nie: '245887'},
    {ies: 'Azarquiel'},
    {estudios: 'ASR'},
    {curso: '23/24'}
];
const matricula2 = [
    {nie: '245887'},
    {ies: 'Azarquiel'},
    {estudios: 'RTS'},
    {curso: '22/23'}
];

const matricula3 = [
    {nie: '245887'},
    {ies: 'Azarquiel'},
    {estudios: 'TFS'},
    {curso: '21/22'}
];
const matricula4 = [
    {nie: '245887'},
    {ies: 'Azarquiel'},
    {estudios: 'YHS'},
    {curso: '20/21'}
];
const matricula5 = [
    {nie: '245887'},
    {ies: 'Azarquiel'},
    {estudios: 'LKS'},
    {curso: '19/20'}
];
matriculas.push(matricula);
matriculas.push(matricula1);
matriculas.push(matricula2);
matriculas.push(matricula3);
matriculas.push(matricula4);
matriculas.push(matricula5);


estudiante1.push(matriculas);
console.log(estudiante1);

//13 ¿Cómo representarías el expediente académico de un alumno, por cada año cursado?.
//LAS NOTAS QUE HA SACADO EL ALUMNO
console.log("EJERCICIO 13");
const expediente = [];
const notas = [
    {curso: '24/25'},
    {nota: '8,4'}
]
const notas1 = [
    {curso: '23/24'},
    {nota: '5,4'}
]
const notas2 = [
    {curso: '22/23'},
    {nota: '7,8'}
]
const notas3 = [
    {curso: '21/22'},
    {nota: '6,9'}
]
const notas4 = [
    {curso: '20/21'},
    {nota: '6,7'}
]
const notas5 = [
    {curso: '19/20'},
    {nota: '8,3'}
]

expediente.push(notas);
expediente.push(notas1);
expediente.push(notas2);
expediente.push(notas3);
expediente.push(notas4);
expediente.push(notas5);


estudiante1.push(expediente);
console.log(estudiante1);

//14 Usando destructuring almacena en las variables nombre, apellidos,dni,estudios,
//y muéstralos por pantalla en el siguiente formato “Luis Martín Rojas con dni 2484637K
//realiza los estudios de DAW”
console.log("EJERCICIO 14");

const nombre = estudiante1[0].nombre; // Accedemos directamente al nombre
const apellidos = estudiante1[1].apellidos; // Accedemos directamente a los apellidos
const dni = estudiante1[4].dni; // Accedemos directamente al dni

// Accedemos directamente a la última matrícula (la posición 2 dentro de la última matrícula corresponde a 'estudios')
const ultimaMatricula = matriculas[matriculas.length - 1]; // Obtenemos la última matrícula
const estudiosUltimaMatricula = ultimaMatricula[2].estudios; // Accedemos directamente a la posición del objeto que contiene 'estudios'

// Mostramos la información correctamente
console.log(`${nombre} ${apellidos} con dni ${dni} realiza los estudios de ${estudiosUltimaMatricula}`);


//15 Bloquee el objeto estudiante1 para que no pueda ser alterado por error.
// Bloquear el objeto estudiante1 ->no va
console.log("EJERCICIO 15");
"use strict"; 
Object.freeze(estudiante1);
console.log(Object.isFrozen(estudiante1));
estudiante1.nombre="Alba";
console.log(estudiante1);

//16.- Crea un nuevo objeto estudiante2 con otra información pero con la misma estructura.
//¿De que forma comprobarías si los dos objetos se trata de la misma persona?.
console.log("EJERCICIO 16");
const estudiante2 = [
    { nombre: 'Ana' },
    { apellidos: 'García López' },
    { edad: '22' },
    { nacionalidad: 'española' },
    { dni: '2484638K' }
];

if (
    estudiante1[0].nombre === estudiante2[0].nombre ||
    estudiante1[1].apellidos === estudiante2[1].apellidos ||
    estudiante1[4].dni === estudiante2[4].dni
) {
    console.log('Son la misma persona');
} else {
    console.log('No son la misma persona');
}

//17.- En una matriz cuadrada la traza se obtiene sumando los elementos de la diagonal principal.
//Calcula la traza de la siguiente matriz, haciendo referencia a sus elementos por la posición que ocupan
console.log("EJERCICIO 17");
const matriz = [
    [  1,  0,  2, -1,  3],
    [  0,  3,  0,  1, -2],
    [  2,  0, -2,  0,  0],
    [  1,  1, -3,  5,  1],
    [  0,  0,  1,  1,  1]
];
let traza = 0;
// Recorremos la matriz para sumar los elementos de la diagonal principal
for (let i = 0; i < matriz.length; i++) {
    traza += matriz[i][i]; // Sumamos el elemento en la posición (i, i)
}
console.log(`La traza de la matriz es: ${traza}`); 


//para mostrar un curso especifico
/*const curso="23/24";
console.log(\nExpediente Académico de ${alumno1.nombre +' '+ alumno1.apellidos} para el curso ${curso}:);
const expediente = alumno1.expediente.filter(item => item.curso === curso);
expediente.forEach(function(item) {
    console.log(NIE: ${item.nie}, IES: ${item.ies}, Estudios: ${item.estudios});
});
const notas = alumno1.nota.filter(item => item.curso === curso);
notas.forEach(function(item) {
    console.log(Asignaturas: ${JSON.stringify(item.asignaturas)});
});
console.log(notas);*/