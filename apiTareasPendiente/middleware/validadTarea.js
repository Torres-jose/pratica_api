const validarTarea = (req, res, next) => {
    const {descripcion  } = req.body;

    if(!descripcion){
        return res.status(400).json({error: 'La descripcion es obligatorio'});
    };

    next();
};

module.exports = validarTarea;