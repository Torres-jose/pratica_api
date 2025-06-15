const fs = require('fs');
const path = require('path');

const rutaArchivo = path.join(__dirname, '../data/tareaData.json')

const leerTarea = ()=>{
    const data = fs.readFileSync(rutaArchivo, 'utf8');
    return JSON.parse(data);
};

const guardarTarea = (tarea) =>{
    fs.writeFileSync(rutaArchivo, JSON.stringify(tarea, null, 2));

};

module.exports = {
    leerTarea,
    guardarTarea
};