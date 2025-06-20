const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//AQUI LAS RUTAS 
app.listen(PORT, () =>{
    console.log(`Servidor corriendo http://locahost:${PORT}`)
})