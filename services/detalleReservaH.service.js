const sql = require('mssql')

const getConnection = require('../database/connection')

const getQueries = require('../database/consultas')

class ClienteServices {
    constructor(){}

    async create(detalleReservaH){
        try {
            const conex = await getConnection();
            const result = await conex.request()
                .input("CodDetalleReservaH",sql.VarChar, detalleReservaH.CodDetalleReservaH)
                .input("CodReserva", sql.VarChar, detalleReservaH.CodReserva)
                .input("CodTipoH", sql.VarChar, detalleReservaH.CodTipoH)
                .query(getQueries.queriesDetalleReservaH.PostDetalleReservaH)
            return result
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ClienteServices