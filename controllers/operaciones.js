// Operaciones matemáticas básicas entre dos números
function operacionesMatematicas(x, y) {
    return {
        suma: x + y, // Suma de x e y
        resta: x - y, // Resta de x menos y
        multiplicacion: x * y, // Multiplicación de x por y
        division: y !== 0 ? x / y : 'No se puede dividir por 0', // División solo si y no es 0, de lo contrario devuelve mensaje
        potencia: x ** y // Eleva x a la potencia y (x^y)
    };
}

// Detecta el tipo de dato de una variable interpretada como cadena
function detectarTipo(variable) {
    if (!isNaN(variable)) { // Si la variable se puede convertir a número
        return variable.includes('.') ? 'number (decimal)' : 'number (entero)'; // Verifica si es decimal o entero
    } else if (variable.toLowerCase() === 'true' || variable.toLowerCase() === 'false') {
        return 'boolean'; // Si es "true" o "false" (sin importar mayúsculas), es booleano
    } else {
        return 'string'; // Si no cumple ninguna condición anterior, se considera cadena
    }
}

// Une dos cadenas y retorna el resultado
function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2; // Devuelve las dos cadenas unidas
}

// Suma cada elemento de un arreglo con su siguiente, el último se suma con el primero (circular)
function sumarArregloCircular(numeros) {
    const resultado = []; // Arreglo donde se guardarán las sumas

    for (let i = 0; i < numeros.length; i++) {
        const actual = Number(numeros[i]); // Convierte el número actual a tipo numérico
        const siguiente = Number(numeros[(i + 1) % numeros.length]); // Convierte el siguiente número, o el primero si está al final (comportamiento circular)
        resultado.push(actual + siguiente); // Agrega la suma al resultado
    }

    return resultado; // Devuelve el arreglo con los resultados
}

// Imprime cada elemento de un arreglo de cadenas en consola usando un bucle for
function imprimirCadenasConFor(cadenas) {
    for (let i = 0; i < cadenas.length; i++) {
        console.log(`Elemento ${i}: ${cadenas[i]}`); // Imprime en consola el índice y el valor correspondiente
    }
}

// Suma 2 a la variable "inicio" hasta que llegue o supere 100 usando un ciclo while
function sumarConWhile(inicio) {
    let contador = 0; // Lleva cuenta de cuántas veces se suma 2

    while (inicio < 100) { // Mientras el valor sea menor que 100
        inicio += 2; // Suma 2
        contador++; // Aumenta el contador de repeticiones
    }

    return contador; // Devuelve cuántas veces se sumó 2
}

// Detecta el tipo de dato (como string) usando estructura switch en base a condiciones booleanas
function detectarTipoSwitch(valor) {
    let tipo; // Variable que almacenará el tipo de dato

    switch (true) { // El switch evalúa condiciones que devuelven true
        case !isNaN(valor) && valor.includes('.'): // Si es número con punto decimal
            tipo = 'number (decimal)';
            break;
        case !isNaN(valor): // Si es un número sin punto (entero)
            tipo = 'number (entero)';
            break;
        case valor.toLowerCase() === 'true' || valor.toLowerCase() === 'false': // Si es un booleano representado como texto
            tipo = 'boolean';
            break;
        default:
            tipo = 'string'; // Si no cumple con ninguno de los anteriores, es string
            break;
    }

    return tipo; // Devuelve el tipo detectado
}

// Exporta todas las funciones para poder ser utilizadas desde otros archivos (por ejemplo, en routes.js)
module.exports = {
    operacionesMatematicas,
    detectarTipo,
    concatenarCadenas,
    sumarArregloCircular,
    imprimirCadenasConFor,
    sumarConWhile,
    detectarTipoSwitch
};
