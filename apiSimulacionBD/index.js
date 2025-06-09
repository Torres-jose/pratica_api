const express = require('express');
const app = express();
const PORT = 3001;

//Middleware para aceptar JSON en las peticiones
app.use(express.json());

//Importar las rutas
const usuariosRoutes = require("./routes/usuariosRoutes");

//usar rutas
app.use('/', usuariosRoutes);

// Iniciar el servidor
app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});