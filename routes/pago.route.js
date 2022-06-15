const express = require('express');

const pagoService = require('../services/pago.service');

const servicioPago = new pagoService();
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const body = req.body
        const pago = await servicioPago.create(body)
        res.status(201).json(pago.recordset);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router