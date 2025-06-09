const fs = require('fs');
const path = require('path');

const rutaAchivo = path.join(__dirname, '../data/books.json');

const leeLibros = () =>{
    const data = fs.readFileSync(rutaAchivo, 'utf8');
    return JSON.parse(data);
};

const guardarLibro = (Libros) =>{
    fs.writeFileSync(rutaAchivo, JSON.stringify(Libros, null, 2));
};

module.exports = {
    leeLibros,
    guardarLibro
};
