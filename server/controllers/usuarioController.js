// Modelo para Usuario
//const Usuario = require('../models/Usuario');
const axios = require('axios');
let jsonData = require('../data/db.json');

// Listado de todos los usuarios
exports.obtenerUsuarios = async(req, res) => {
    try {
        let response = await axios.get('https://randomuser.me/api/?results=10');
        //console.log(response.data.results);
        //console.log(response.data.info);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error.');
    }
}