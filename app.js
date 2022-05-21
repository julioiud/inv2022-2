const express = require('express');

const app = express();

const usuarios = require('./routes/usuario');
const tiposEquipo = require('./routes/tipoEquipo');
const estados = require('./routes/estado');
const marcas = require('./routes/marca');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/usuarios', usuarios);
app.use('/api/tiposequipo', tiposEquipo);
app.use('/api/estados', estados);
app.use('/api/marcas', marcas);

module.exports = app;