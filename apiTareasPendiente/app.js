const express = require('express');
require('dotenv').config();
const app = express;
const PORT = process.env.PORT || 5000;

app.use(express.json());

//pendiente route
//const tareaRoutes =


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://locahost:${PORT}`);
})