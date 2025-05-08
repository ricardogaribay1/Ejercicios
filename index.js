const express = require('express'); // Importa el framework Express
const app = express();              // Crea una instancia de la app Express
const PORT = 3000;                  // Define el puerto en el que correrá la app

app.use(express.json()); // Middleware para que Express entienda JSON en los body de las peticiones

// RUTA 1: POST /operaciones
app.post('/operaciones', (req, res) => {
    const { x, y } = req.body; // Extrae x e y del cuerpo (body) de la petición

    if (typeof x !== 'number' || typeof y !== 'number') {
        return res.status(400).send('x e y deben ser números'); // Validación
    }

    const resultado = {
        suma: x + y,
        resta: x - y,
        multiplicacion: x * y,
        division: y !== 0 ? x / y : 'No se puede dividir por 0',
        potencia: x ** y
    };

    res.json(resultado); // Devuelve los resultados en formato JSON
});

// RUTA 2: GET /tipo/:variable
app.post('/tipo', (req, res) => {
    const { variable } = req.body; // Extrae 'variable' del cuerpo de la solicitud

    let tipo;
    if (!isNaN(variable)) {
        tipo = variable.includes('.') ? 'number (decimal)' : 'number (entero)';
    } else if (String(variable).toLowerCase() === 'true' || String(variable).toLowerCase() === 'false') {
        tipo = 'boolean';
    } else {
        tipo = 'string';
    }

    res.send(`El tipo de la variable es: ${tipo}`);
});


// RUTA 3: POST /concatenar
app.post('/concatenar', (req, res) => {
    const { cadena1, cadena2 } = req.body; // Extrae las cadenas del body

    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return res.status(400).send('Ambas variables deben ser cadenas');
    }

    res.send(cadena1 + cadena2); // Devuelve las cadenas unidas
});

// RUTA 4: POST /sumar-arreglo
app.post('/sumar-arreglo', (req, res) => {
    const { numeros } = req.body; // Extrae el arreglo del body

    if (!Array.isArray(numeros)) {
        return res.status(400).send('Debes enviar un arreglo de números');
    }

    const resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        let suma = numeros[i] + numeros[(i + 1) % numeros.length]; // Suma con el siguiente (y el último con el primero)
        resultado.push(suma);
    }

    res.json(resultado); // Devuelve el nuevo arreglo
});

// Arranca el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

