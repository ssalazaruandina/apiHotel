const express = require('express')

const tipoHabitacionRouter = require('./tipoHabitacion.route')
const clienteRouter = require('./cliente.route')
const reservaRouter = require('./reserva.route')
const pagoRouter = require('./pago.route')
const detalleReservaHRouter = require('./detalleReservaH.route')

function rutas(app) {
  const routes = express.Router();
  app.use('/hotel/registrar', routes);
  routes.use('/thabitaciones', tipoHabitacionRouter)
  routes.use('/cliente', clienteRouter)
  routes.use('/reserva', reservaRouter)
  routes.use('/pago', pagoRouter)
  routes.use('/detalleReservaH',detalleReservaHRouter)
}

module.exports = rutas
