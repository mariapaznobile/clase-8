// 1
for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}

// 2
for (let i = 0; i < 10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
}

// 3. 
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 4.
for (let i = 5; i <= 250; i += 5) {
    console.log(i);
}

// 5. 
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

let base = 5;
let resultados = [];

for (let i = 1; i <= 10; i++) {
    resultados.push(base * i);
}

console.log(resultados);


let ganancias = [100, -50, 75, -25, 150, -100, 200, -150, 50, -75];
let suma = 0;

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}

console.log("La suma de las ganancias es:", suma);


let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

console.log("Lista de temas:");
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}

console.log("Lista de temas con número de orden:");
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(`${i + 1} ${healingIsDifficult[i]}`);
}


let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

for (let i = 0; i < got.length; i++) {
    let persona = got[i];
    let ciudad = persona.ciudad ? persona.ciudad : "desconocida";
    console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
    console.log(`Soy ${persona.nombre} ${persona.apellido} de la ciudad ${ciudad}`);
}
