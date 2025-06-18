const {verReserva, guardarReserva} = require('../models/restaModels');

/**
 * Implementa una API en Express que gestione reservas. Cada reserva tiene: id, nombre_cliente, personas, fecha.
Debes permitir:
- Ver todas las reservas (GET /reservas)*
- Crear una nueva reserva (POST /reservas)*
- Validar que el número de personas sea mayor que 0
- Devolver error si falta algún dato obligatorio
 * **/

const obtnerReserva = (req, res)=>{
    res.json(verReserva());
};

const crearReserva = (req, res) =>{
    const reservas = verReserva();
    const {nombre_cliente, personas, fecha} = req.body;

    const nuevaReserva = {
        id: reservas.length ? reservas[reservas.length-1].id +1 : 1,
        nombre_cliente,
        personas,
        fecha
    };

    reservas.push(nuevaReserva);
    guardarReserva(reservas);
    res.status(202).json(nuevaReserva)
    

}
