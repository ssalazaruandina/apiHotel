const sql = require('mssql')

const getConnection = require('../database/connection')

const getQueries = require('../database/consultas')

class ReservaServices {
    constructor(){}

    async create(codReserva,codCliente,numHabitaciones,
                fechaReserva,fechaLlegada,fechaSalida){
        try {
            const conex = await getConnection();
            const result = conex.request() //falta
                .input("CodReserva",sql.VarChar, codReserva)
                .input("CodCliente", sql.VarChar, codCliente)
                .input("NumHabitaciones", sql.Numeric, numHabitaciones)
                .input("FechaReserva", sql.Date, fechaReserva)
                .input("FechaLlegada", sql.Date, fechaLlegada)
                .input("FechaSalida", sql.Date, fechaSalida)
                .query(getQueries.queriesReservarH.PostReserva)
            return result
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ReservaServices