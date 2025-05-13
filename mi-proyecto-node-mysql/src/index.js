const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./bd/database');
const { User } = require('./models/user');

dotenv.config();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('[+] Conectado a la base de datos');

    await sequelize.sync({ force: false });

    const newUser = await User.create({
      name: 'Juan',
      email: 'juan@example.com',
    });

    console.log('[+] Usuario de prueba creado:', newUser.toJSON());
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

const app = express();
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
