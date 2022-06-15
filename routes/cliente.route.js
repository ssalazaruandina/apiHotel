const express = require('express');

const clienteService = require('../services/cliente.service');

const servicioCliente = new clienteService();
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const body = req.body
        // DEBERIA HACERSE ASI PARA QUE NO HAYA FALLOS AL CONSUMIR DE OTRO LADO
        // const {codigo,nombre, apellidoP, apellidoM,
        //        dni, sexo, //fechaE, fechaS, 
        //        nacionalidad, celular, email} = req.body
        const cliente = await servicioCliente.create(body.CodCliente,body.ApellidoP,body.ApellidoM,body.Nombres,body.Dni,body.Sexo,body.Nacionalidad,body.Celular,body.Email)
        res.status(201).json(cliente.recordset);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router