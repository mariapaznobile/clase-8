// Ejercicio 1
const misDatos = {
    nombre: "Paz",
    apellido: "Nobile",
    dni: "12345678",
    comidasFavoritas: ["helado", "pizza", "empanadas"] 
};
console.log(misDatos);

// Ejercicio 2
misDatos.saludar = function() {
    const nombreCompleto = `${this.nombre} ${this.apellido}`;
    const edad = 18; 
    const primeraComida = this.comidasFavoritas[0];
    return `Hola mi nombre es ${nombreCompleto} y tengo ${edad} años. Mi primera comida favorita es ${primeraComida}.`;
};

console.log(misDatos.saludar());

// Ejercicio 3
const auto = {
    marca: "Fiat",
    modelo: "500",
    anio: 2015,
    color: "Negro",
    posicion: 0,
    avanzar(n) {
        this.posicion += n;
    },
    retroceder(n) {
        this.posicion -= n;
    }
};

auto.avanzar(5);
auto.retroceder(2);
auto.avanzar(3);
console.log("La posición final del auto es:", auto.posicion);

// Ejercicio 4
const nuevoAuto = {
    marca: "Ford",
    modelo: "Focus",
    anio: 2023,
    color: "Negro",
    posicion: 0,
    moverse(n) {
        this.posicion += n; 
    }
};

nuevoAuto.moverse(7);
nuevoAuto.moverse(-2);
console.log("La posición final del nuevo auto es:", nuevoAuto.posicion);
