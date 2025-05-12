const express = require('express'); // Importa el framework Express que facilita crear servidores web con Node.js
const app = express();              // Crea una instancia de la aplicación de Express. Esta instancia representa nuestra aplicación.
const PORT = 3000;                  // Define el puerto donde se ejecutará el servidor. En este caso, el puerto 3000.

app.use(express.json()); // Usa el middleware de Express para que pueda entender y procesar datos en formato JSON en el cuerpo (body) de las solicitudes HTTP.

const rutas = require('./routes/routes.js'); // Importa el archivo de rutas ubicado en la carpeta 'routes', y lo guarda en la constante 'rutas'.

app.use('/ejercicio1', rutas); // Define que todas las rutas definidas en el archivo 'routes.js' estarán bajo el prefijo '/ejercicio1' en la URL.

app.listen(PORT, () => { // Inicia el servidor web y lo pone a escuchar en el puerto definido anteriormente (3000).
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Muestra un mensaje en la consola indicando que el servidor está en funcionamiento.
});
