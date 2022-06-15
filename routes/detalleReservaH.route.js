const express = require('express');

const detalleReservaH = require('../services/detalleReservaH.service');

const servicioDetalleReservaH = new detalleReservaH();
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const body = req.body
        const detalleReservaH = await servicioDetalleReservaH.create(body)
        res.status(201).json(detalleReservaH.recordset);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router