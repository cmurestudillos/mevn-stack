// Modelo para Usuario
const axios = require('axios');
// Resultado de validacion de usuarios
const { validationResult } = require('express-validator');

// Listado de todos los usuarios
exports.getUsuarios = async(req, res) => {
    try {
        let response = await axios.get('https://reqres.in/api/users');
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error al intentar obtener los datos.');
    }
}

// Listado de todos los usuarios
exports.getUsuariosbyId = async(req, res) => {
    try {
        // revisar el ID 
        let usuarioId = req.params.id;
        let response = await axios.get(`https://reqres.in/api/users/${usuarioId}`);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error al obtener los datos del registro.');
    }
}

// Añadir nuevo usuario
exports.agregarUsuario = async(req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    try {
        // Crear un nuevo usuario
        let payload = { 
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        };

        // Peticion para crear el usuario
        let response = await axios.post(`https://reqres.in/api/users`, payload)
        res.send(response.data)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error.');
    }
}

// Eliminar usuario
exports.eliminarUsuarios = async(req, res) => {
    try {
        // revisar el ID 
        let usuarioId = req.params.id;

        // si el proyecto existe o no
        if(!usuarioId) {
            return res.status(404).json({msg: 'Usuario no encontrado.'})
        }

        // Eliminar el Proyecto
        await axios.delete(`https://reqres.in/api/users/${usuarioId}`);
        res.json({ msg: 'Usuario eliminado.'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor.')
    }
}