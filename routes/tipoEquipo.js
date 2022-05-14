const { Router } = require('express');
/*const { TipoEquipo } = require('../models/tipoEquipo');
const { Usuario } = require('../models/usuario');*/
const { getTiposEquipo } = require('../controllers/tipoEquipo');

const router = Router();

/**
 * Obtiene todos los tipos de equipos
 */
router.get('/', getTiposEquipo);
    /*const tiposEquipo =  [
        {
            ....
            usuario: adadadasdasdasd => true
        },
        {
            ....
            usuario: xxxxxxxxxxxxxxxd => false
        },
    ]   
   const resultado =  tiposEquipo.filter(t => {
        const queryUser = {_id: t.usuario}
        const usuario = Usuario.findOne(queryUser);
        if(usuario.estado){
            return true;
        }
        return false;
    })  */  

/**
 * Obtiene un tipos de equipos por id
 */
 router.get('/:id', (req, res) => {
    res.json({});
});

/**
 * Crear un tipos de equipos
 */
router.post('/', (req, res) => {
    res.json({});
});

/**
 * Actualiza un tipos de equipos por id
 */
router.put('/:id', (req, res) => {
    res.json({});
});

/**
 * Actualiza una parte del tipos de equipos
 */
router.patch('/:id', (req, res) => {
    res.json({});
});

/**
 * Borra un tipos de equipos por id
 */
 router.delete('/:id', (req, res) => {
    res.json({});
});

module.exports = router;