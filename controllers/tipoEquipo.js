
const { request, response } = require('express');
const { TipoEquipo } = require('../models/tipoEquipo');

/**
 * Consulta todos los tipos de equipo
 */
const getTiposEquipo = async (req, res = response) => {
    const query = {};    
    const tiposEquipoBD = await TipoEquipo.find(query);
    res.json(tiposEquipoBD);
}

module.exports = { getTiposEquipo };