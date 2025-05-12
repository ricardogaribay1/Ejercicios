// Operaciones matemáticas básicas
function operacionesMatematicas(x, y) {
    return {
        suma: x + y, // Suma los dos números
        resta: x - y, // Resta el segundo número al primero
        multiplicacion: x * y, // Multiplica los dos números
        division: y !== 0 ? x / y : 'No se puede dividir por 0', // Divide solo si y no es 0
        potencia: x ** y // Calcula x elevado a la potencia de y
    };
}

// Detección del tipo de una variable (como string)
function detectarTipo(variable) {
    if (!isNaN(variable)) { // Verifica si la variable es un número (aunque sea string)
        return variable.includes('.') ? 'number (decimal)' : 'number (entero)'; // Si tiene punto es decimal, si no, entero
    } else if (variable.toLowerCase() === 'true' || variable.toLowerCase() === 'false') {
        return 'boolean'; // Si es "true" o "false", es booleano
    } else {
        return 'string'; // En cualquier otro caso, es una cadena
    }
}

// Concatenación de dos cadenas
function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2; // Retorna la concatenación de ambas cadenas
}

// Suma circular de un arreglo
function sumarArregloCircular(numeros) {
    const resultado = []; // Arreglo que almacenará los resultados

    for (let i = 0; i < numeros.length; i++) { // Recorre cada elemento del arreglo
        const actual = Number(numeros[i]); // Convierte el número actual a tipo Number
        const siguiente = Number(numeros[(i + 1) % numeros.length]); // Toma el siguiente número, con ciclo circular usando %
        resultado.push(actual + siguiente); // Suma el actual y el siguiente, y lo guarda en el arreglo resultado
    }

    return resultado; // Retorna el nuevo arreglo con las sumas
}

// Exporta todas las funciones para que puedan ser usadas en otros archivos
module.exports = {
    operacionesMatematicas,
    detectarTipo,
    concatenarCadenas,
    sumarArregloCircular
};
