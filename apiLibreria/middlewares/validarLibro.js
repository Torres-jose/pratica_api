const validarLibro = (req, res, next) => {
    const {titulo, autor, year} = req.body;

    if(!titulo || !autor || year){
        return res.status(400).json({error: ' Titulo, autor y año son obligatori'});
    };

    if(isNaN(year)){
        return res.status(400).josn({error: 'el año debe ser un numero'});
    };

    next();
};

module.exports  = validarLibro;