const express = require('express');

const reservaService = require('../services/reserva.service');

const servicioReserva = new reservaService();
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const body = req.body
        const reserva = await servicioReserva.create(
            body.CodReserva,
            body.CodCliente,
            body.NumHabitaciones,
            body.FechaReserva,
            body.FechaLlegada,
            body.FechaSalida
        );
        res.status(201).json(reserva.recordset);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router