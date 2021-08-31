// Importamos Express
const express = require('express');
const router = express.Router();
// controlador para proyectos
const usuarioController = require('../controllers/usuarioController');

// Obtener todos los usuarios
router.get('/', 
    usuarioController.obtenerUsuarios
)

module.exports = router;