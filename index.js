const express = require('express'); // Importa el framework Express
const app = express();              // Crea una instancia de la app Express
const PORT = 3000;                  // Define el puerto en el que correrá la app

app.use(express.json()); // Middleware para que Express entienda JSON en los body de las peticiones

const rutas = require('./routes/routes.js')

app.use('/ejercicio1', rutas);

// Arranca el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
