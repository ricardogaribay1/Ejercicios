function operaciones(x, y) {
    const operaciones = {
        suma: x+y,
        resta: x - y,
        multiplicacion: x * y,
        division: y !== 0 ? x / y : 'No se puede dividir por 0',
        potencia: x ** y
    }
    return operaciones
}

module.exports = {
    operaciones
}