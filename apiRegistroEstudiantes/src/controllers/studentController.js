const { error } = require('console');
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname,'../data/students.json');

//funciones para el manejo de archivos

//para leer los estudiante desde el mismo archivo
const leerEstudiantes = () =>{
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
};

//guardar estudiantes en el archivo
const guardarStudiantes = (students) => {
    fs.writeFileSync(dataPath, JSON.stringify(students,null, 2))
};

//GET /students
const obtenerEstudiantes = (req, res) =>{
    const students = leerEstudiantes();
    res.json(students);
};

// POST /students
const registroEstudiante = (req, res) =>{
    const {nombre, edad, carrera} = req.body;

    //validaciones
    if(!nombre || !carrera){
        return res.status(400).json({error:"Nombre y carrera son obligatorios"})
    }

    if(!edad || isNaN(edad)){
        return res.status(400).json({error: "Edad debe ser un numero valido"});
    }

    //aqui se llama la funcion leer el json 

    const estudiantes = leerEstudiantes();

    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre,
        edad: parseInt(edad),
        carrera
    };

    estudiantes.push(nuevoEstudiante);
    guardarStudiantes(estudiantes);

    res.status(201).json(nuevoEstudiante);
}

module.exports = {
    obtenerEstudiantes,
    registroEstudiante
}

