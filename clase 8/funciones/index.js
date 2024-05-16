// Función rectangulo
function rectangulo(alto, ancho) {
    return alto * ancho;
}
console.log(rectangulo(5, 10));

// Función triángulo
function triangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(triangulo(4, 6)); 

// Función longitud de un array
function largoDelArray(array) {
    return array.length;
}
console.log(largoDelArray([1, 2, 3, 4, 5]));

// Función cantidad de letras en una palabra
function cantidadDeLetras(palabra) {
    return palabra.length;
}
console.log(cantidadDeLetras("hola"));

// Función convertir pesos argentinos a dólares estadounidenses
function dolarHoy(pesos) {
    // Suponiendo que 1 dólar equivale a 100 pesos argentinos
    return pesos / 100;
}
console.log(dolarHoy(5000));

// Función calcular el precio final con IVA incluido
function precioFinal(precio) {
    const iva = 0.21; // 21%
    return precio * (1 + iva);
}
console.log(precioFinal(100));

// Función calcular la mitad de un número
function mitad(numero) {
    return numero / 2;
}
console.log(mitad(10));

// Función para obtener el día de la semana según un número
function diaSegunNumero(array, numero) {
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    return array[numero - 1];
}
console.log(diaSegunNumero(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], 3));

