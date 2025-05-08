const express = require('express');
const router = express();              // Crea una instancia de la app Express
const operaciones = require('../controllers/operaciones');

// RUTA 1: POST /operaciones
router.post('/operaciones', (req, res) => {
    try{
    const { x, y } = req.body; // Extrae x e y del cuerpo (body) de la petición

    if (typeof x !== 'number' || typeof y !== 'number') {
        return res.status(400).send('x e y deben ser números'); // Validación
    }

    const resultado = operaciones.operaciones(x, y);

    res.json(resultado); // Devuelve los resultados en formato JSON
    }catch(error){
        console.log(error);
        res.status(500).json("ocurrio un error en la ruta operaciones")
    }
});

// RUTA 2: GET /tipo/
router.post('/tipo-joni', (req, res) => {
    const { variable } = req.body; // Extrae 'variable' del cuerpo de la solicitud

    let tipo;
    if (!isNaN(variable)) {
        tipo = 'number';
        if(typeof variable === 'string'){
            tipo = variable.includes('.') ? 'number (decimal)' : 'number (entero)';
        }else{
            if(Number.isFinite(variable)){
                tipo = ' flotante'
            }
        }
    } else if (String(variable).toLowerCase() === 'true' || String(variable).toLowerCase() === 'false') {
        tipo = 'boolean';
    } else {
        tipo = 'string';
    }

    res.status(200).json(
        {
            status:200,
            message:`El tipo de la variable es: ${tipo}`
        });
});

app.get('/tipo', (req, res) => {
    const variable = req.query.variable; // Extrae 'variable' desde la query string

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
router.post('/concatenar', (req, res) => {
    const { cadena1, cadena2 } = req.body; // Extrae las cadenas del body

    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return res.status(400).send('Ambas variables deben ser cadenas');
    }

    res.send(cadena1 + cadena2); // Devuelve las cadenas unidas
});

// RUTA 4: POST /sumar-arreglo
router.post('/sumar-arreglo', (req, res) => {
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

/*
rutas: for, while, if usando arreglos
ruta1 Post(for):
Crear un arreglo de cadenas(definidas por el usuario atraves de una ruta post), imprime en consola, cada elemento con un for y devuelve al usuario un exito
ruta2 get(while)
Crear una variable le vas a sumar 2 hasta que llegue a 100 , la variable inicial sera una que defina el usuario a traves de get y devuelve al usuario cuantas veces se sumo 2
ruta3:
Crear ruta para distinguir tipo de dato con un swicth
*/ 

module.exports = router;