const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://locahost:${PORT}`);
});