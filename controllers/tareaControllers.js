const {leerTarea, guardarTarea} = require('../models/tareaModels.js');

const obtenerTarea = (req, res) =>{
    res.json(leerTarea());
}

const crearTarea = (req, res) => {
    const Tarea = leerTarea();
    const {descripcion, completa} = req.body;

    const nuevaTarea = {
        id: Tarea.length > 0 ? Tarea[Tarea.length -1].id +1 : 1,
        descripcion,
        completa
    }

    Tarea.push(nuevaTarea);
    guardarTarea(Tarea);
    res.status(201).json(nuevaTarea);
};

const obtenerTareaCompleta = (req, res) =>{
    const Tarea = leerTarea();
    const Completa = req.params.completa === "true";
    const TareCompleta  = Tarea.filter(t =>t.completa === Completa );
    
    if(TareCompleta.length === 0){
        return res.status(400).json({error:"No hay libros completos"});
    }
    res.json(TareCompleta);
};

module.exports ={
    obtenerTareaCompleta,
    obtenerTarea,
    crearTarea
};