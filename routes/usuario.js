const { Router } = require('express');

const router = Router();

const { createUsuario } = require('../controllers/usuario');

/**
 * Obtiene todos los usuarios
 */
router.get('/', (req, res) => {
    res.json({"metodo": "obtener todos"});
});

/**
 * Obtiene un usuarios por id
 */
 router.get('/:id', (req, res) => {
    res.json({});
});

/**
 * Crear un usuario
 */
router.post('/', createUsuario);

/**
 * Actualiza un usuario por id
 */
router.put('/:id', (req, res) => {
    res.json({});
});

/**
 * Actualiza una parte del usuario
 */
router.patch('/:id', (req, res) => {
    res.json({});
});

/**
 * Borra un usuario por id
 */
 router.delete('/:id', (req, res) => {
    res.json({});
});

module.exports = router;