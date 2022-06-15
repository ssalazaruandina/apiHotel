const express = require('express')

const tipoHabitacionService = require('../services/tipoHabitacion.service');

const servicioTipoHabitacion = new tipoHabitacionService();
const router = express.Router();

router.get('/', async (req,res) => {
  try {
    const tiposHabitaciones = await servicioTipoHabitacion.findAll();
    res.status(200).json(tiposHabitaciones.recordset);
  } catch (error) {
    console.log(error);
  }
})

router.get('/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const tipoHabitacion = await servicioTipoHabitacion.findBy(id)
    res.status(200).json(tipoHabitacion.recordset)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router
