const express = require('express');
const app = express();
const PORT = 3000;


//Middleware para JSON
app.use(express.json());

//Importar rutas
const studentRoutes = require('./src/routes/studentRoutes');
app.use('/api',studentRoutes);

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});