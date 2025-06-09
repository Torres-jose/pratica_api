const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Importar y usar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/', usuarioRoutes); // Puedes cambiar '/' por '/api' si quieres agrupar rutas

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
