const express = require('express');

const app = express();

const usuarios = require('./routes/usuario');
const tiposEquipo = require('./routes/tipoEquipo');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/usuarios', usuarios);
app.use('/api/tiposequipo', tiposEquipo);

module.exports = app;