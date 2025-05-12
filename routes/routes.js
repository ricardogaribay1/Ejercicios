const express = require('express'); // Importa el módulo de Express
const router = express.Router();    // Crea un objeto Router para definir rutas de forma modular
const operaciones = require('../controllers/operaciones'); // Importa el archivo de operaciones que contiene funciones reutilizables

// RUTA 1: POST /operaciones
router.post('/operaciones', (req, res) => { // Define una ruta POST en /operaciones
    try {
        const { x, y } = req.body; // Extrae x e y del cuerpo de la solicitud JSON

        // Verifica que x e y sean números
        if (typeof x !== 'number' || typeof y !== 'number') {
            return res.status(400).json({ // Si no son números, responde con error 400 (Bad Request)
                status: 400,
                message: 'x e y deben ser números'
            });
        }

        const resultado = operaciones.operacionesMatematicas(x, y); // Llama a la función importada para realizar operaciones

        res.status(200).json({ // Devuelve un estado 200 (OK) con los resultados
            status: 200,
            message: 'Operaciones realizadas correctamente',
            data: resultado
        });
    } catch (error) {
        console.log(error); // Si ocurre un error lo muestra en consola
        res.status(500).json({ // Devuelve un error 500 (Error Interno del Servidor)
            status: 500,
            message: 'Ocurrió un error en la ruta /operaciones'
        });
    }
});

// RUTA 2: GET /tipo
router.get('/tipo', (req, res) => { // Define una ruta GET en /tipo
    let variable = req.query.variable; // Obtiene el parámetro 'variable' del query string
    variable = String(variable); // Convierte cualquier entrada a string para analizarla correctamente

    const tipo = operaciones.detectarTipo(variable); // Llama a la función que detecta el tipo de la variable

    res.status(200).json({ // Responde con el tipo de la variable
        status: 200,
        message: `El tipo de la variable es: ${tipo}`
    });
});

// RUTA 3: POST /concatenar
router.post('/concatenar', (req, res) => { // Define una ruta POST en /concatenar
    const { cadena1, cadena2 } = req.body; // Extrae cadena1 y cadena2 del body

    // Verifica que ambas sean cadenas
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return res.status(400).json({ // Si no lo son, responde con error 400
            status: 400,
            message: 'Ambas variables deben ser cadenas'
        });
    }

    const resultado = operaciones.concatenarCadenas(cadena1, cadena2); // Llama a la función que concatena las cadenas

    res.status(200).json({ // Devuelve el resultado de la concatenación
        status: 200,
        message: 'Cadenas concatenadas correctamente',
        data: resultado
    });
});

// RUTA 4: POST /sumar-arreglo
router.post('/sumar-arreglo', (req, res) => { // Define una ruta POST en /sumar-arreglo
    const { numeros } = req.body; // Extrae el arreglo 'numeros' del body

    // Verifica que sea un arreglo
    if (!Array.isArray(numeros)) {
        return res.status(400).json({ // Si no es un arreglo, responde con error 400
            status: 400,
            message: 'Debes enviar un arreglo de números'
        });
    }

    const resultado = operaciones.sumarArregloCircular(numeros); // Llama a la función que suma cada elemento con el siguiente

    res.status(200).json({ // Devuelve el arreglo con los resultados
        status: 200,
        message: 'Suma circular realizada correctamente',
        data: resultado
    });
});

module.exports = router; // Exporta el router para que pueda ser usado en otros archivos
