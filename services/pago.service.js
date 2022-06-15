const sql = require('mssql')

const getConnection = require('../database/connection')

const getQueries = require('../database/consultas')

class ClienteServices {
    constructor(){}

    async create(pago){
        try {
            const conex = await getConnection();
            const result = conex.request()
                .input("CodPago",sql.VarChar,pago.CodPago)
                .input("CodReserva", sql.VarChar,pago.CodReserva)
                .input("Monto", sql.Numeric,pago.Monto)
                .query(getQueries.queriesPagoH.PostPago)
            return result
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ClienteServices