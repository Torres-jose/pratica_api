const express = require('express');
const router = express.Router();

const {
    obtenerEstudiantes,
    registroEstudiante
} = require('../controllers/studentController');

router.get('/students',obtenerEstudiantes);
router.post('/students',registroEstudiante);



module.exports = router;