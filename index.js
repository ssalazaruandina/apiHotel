const express = require('express');
const cors = require('cors')
const rutas = require('./routes');

//const database = require('./database/connection')

const aplicacion = express();
const port = 3800;

aplicacion.use(cors())
aplicacion.use(express.json());

rutas(aplicacion)

aplicacion.listen(port, () => {
  console.log("Estamos en el puerto: " + port)
})
