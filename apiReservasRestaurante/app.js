const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 7000;


app.use(express.json());

//exportar ruta 

app.use('/api/restauran');

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://locahost:${PORT}`);
})