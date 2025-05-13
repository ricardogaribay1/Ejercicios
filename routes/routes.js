const express = require('express'); // Importa el módulo Express, que es un framework para crear servidores en Node.js
const router = express.Router();    // Crea una instancia de Router que permite definir rutas de forma modular
const operaciones = require('../controllers/operaciones'); // Importa el archivo de operaciones con funciones auxiliares reutilizables

// RUTA 1: POST /operaciones
router.post('/operaciones', (req, res) => { // Define una ruta POST en la URL /operaciones
    try {
        const { x, y } = req.body; // Extrae los valores x e y del cuerpo (body) de la solicitud, esperando un JSON

        // Verifica si x o y no son números
        if (typeof x !== 'number' || typeof y !== 'number') {
            return res.status(400).json({ // Devuelve un error 400 si alguno no es número
                status: 400,
                message: 'x e y deben ser números'
            });
        }

        const resultado = operaciones.operacionesMatematicas(x, y); // Llama a la función que realiza operaciones matemáticas básicas

        res.status(200).json({ // Devuelve respuesta exitosa con los resultados
            status: 200,
            message: 'Operaciones realizadas correctamente',
            data: resultado
        });
    } catch (error) {
        console.log(error); // Muestra el error en consola si ocurre
        res.status(500).json({ // Devuelve un error 500 si ocurre una excepción inesperada
            status: 500,
            message: 'Ocurrió un error en la ruta /operaciones'
        });
    }
});

// RUTA 2: GET /tipo
router.get('/tipo', (req, res) => { // Define una ruta GET en la URL /tipo
    let variable = req.query.variable; // Obtiene el valor del parámetro "variable" desde la URL como query string
    variable = String(variable); // Asegura que sea una cadena, independientemente del tipo recibido

    const tipo = operaciones.detectarTipo(variable); // Llama a la función que determina el tipo de la variable

    res.status(200).json({ // Devuelve el tipo de variable como respuesta exitosa
        status: 200,
        message: `El tipo de la variable es: ${tipo}`
    });
});

// RUTA 3: POST /concatenar
router.post('/concatenar', (req, res) => { // Define una ruta POST en la URL /concatenar
    const { cadena1, cadena2 } = req.body; // Extrae cadena1 y cadena2 desde el cuerpo de la solicitud

    // Valida que ambas variables sean tipo string
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return res.status(400).json({ // Devuelve error 400 si alguna no es string
            status: 400,
            message: 'Ambas variables deben ser cadenas'
        });
    }

    const resultado = operaciones.concatenarCadenas(cadena1, cadena2); // Llama a la función que concatena las dos cadenas

    res.status(200).json({ // Responde con el resultado de la concatenación
        status: 200,
        message: 'Cadenas concatenadas correctamente',
        data: resultado
    });
});

// RUTA 4: POST /sumar-arreglo
router.post('/sumar-arreglo', (req, res) => { // Define una ruta POST en la URL /sumar-arreglo
    const { numeros } = req.body; // Extrae el arreglo "numeros" desde el cuerpo de la solicitud

    if (!Array.isArray(numeros)) { // Verifica si el contenido no es un arreglo
        return res.status(400).json({ // Devuelve error 400 si no es un arreglo
            status: 400,
            message: 'Debes enviar un arreglo de números'
        });
    }

    const resultado = operaciones.sumarArregloCircular(numeros); // Llama a la función que suma cada elemento con su siguiente de forma circular

    res.status(200).json({ // Devuelve el nuevo arreglo con las sumas
        status: 200,
        message: 'Suma circular realizada correctamente',
        data: resultado
    });
});

// RUTA 5: POST /for-cadenas
router.post('/for-cadenas', (req, res) => { // Ruta POST para imprimir un arreglo de cadenas con un ciclo for
    const { cadenas } = req.body; // Extrae el arreglo de cadenas del body

    if (!Array.isArray(cadenas)) { // Verifica que cadenas sea un arreglo
        return res.status(400).json({ // Devuelve error si no es un arreglo
            status: 400,
            message: 'Debes enviar un arreglo de cadenas'
        });
    }

    operaciones.imprimirCadenasConFor(cadenas); // Llama a la función que imprime cada elemento con un for en consola

    res.status(200).json({ // Devuelve mensaje de éxito
        status: 200,
        message: 'Elementos impresos correctamente en consola'
    });
});

// RUTA 6: GET /sumar-hasta
router.get('/sumar-hasta', (req, res) => { // Ruta GET para sumar una variable de 2 en 2 hasta llegar a 100
    let inicio = parseInt(req.query.inicio); // Obtiene el valor inicial desde query string y lo convierte a entero

    if (isNaN(inicio)) { // Verifica si la conversión a número fue inválida
        return res.status(400).json({ // Devuelve error si no se proporcionó número válido
            status: 400,
            message: 'Debes enviar un número válido como parámetro "inicio"'
        });
    }

    const repeticiones = operaciones.sumarConWhile(inicio); // Llama a la función que suma hasta llegar a 100 con while

    res.status(200).json({ // Devuelve cuántas veces se sumó 2
        status: 200,
        message: `La variable llegó a 100 o más sumando 2`,
        repeticiones: repeticiones
    });
});

// RUTA 7: GET /tipo-switch
router.get('/tipo-switch', (req, res) => { // Ruta GET para identificar el tipo de dato con switch
    const valor = req.query.valor; // Obtiene el valor de la query string llamado "valor"

    if (valor === undefined) { // Verifica que se haya enviado el valor
        return res.status(400).json({ // Devuelve error si no se envió
            status: 400,
            message: 'Debes enviar un valor en la query "valor"'
        });
    }

    const tipo = operaciones.detectarTipoSwitch(valor); // Llama a la función que detecta el tipo con switch

    res.status(200).json({ // Devuelve el tipo de dato identificado
        status: 200,
        message: `El tipo de dato detectado es: ${tipo}`
    });
});

module.exports = router; // Exporta el router para que pueda ser usado en el archivo principal (index.js)


