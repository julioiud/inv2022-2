const { request, response } = require('express');

const Usuario = require('../models/usuario');

const createUsuario = async (req = request, res = response) => {
    try{
        const body = req.body;

        const usuario = new Usuario( body )
    
        await usuario.save();
    
        res.json(usuario);
        
    }catch(e){
        return res.status(500).json({error: e});
    }

}

module.exports = { createUsuario };