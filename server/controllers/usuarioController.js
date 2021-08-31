// Modelo para Usuario
//const Usuario = require('../models/Usuario');
const axios = require('axios');

// Listado de todos los usuarios
exports.getUsuarios = async(req, res) => {
    try {
        let response = await axios.get('https://reqres.in/api/users');
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error.');
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
        res.status(500).send('Ha ocurrido un error.');
    }
}