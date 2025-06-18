const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const rutaArchivo = path.join(__dirname, '../data/restaurante.json');

const verReserva = () =>{
    const data = fs.readFileSync(rutaArchivo, 'utf8');
    return JSON.parse(data);
};

const guardarReserva = (reserva) =>{
    fs.writeFileSync(rutaArchivo, JSON.stringify(reserva,null, 2));
};

module.exports = {
    verReserva,
    guardarReserva
};