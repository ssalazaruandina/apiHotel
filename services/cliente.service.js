const sql = require('mssql')

const getConnection = require('../database/connection')

const getQueries = require('../database/consultas')

class ClienteServices {
    constructor(){}

    async create(codCliente,apellidoP,apellidoM,nombres,
                dni,sexo,nacionalidad,celular,email){
        try {
            const conex = await getConnection();
            const result = conex.request()
                .input("CodCliente",sql.VarChar,codCliente)
                .input("ApellidoP", sql.VarChar, apellidoP)
                .input("ApellidoM", sql.VarChar, apellidoM)
                .input("Nombres", sql.VarChar, nombres)
                .input("Dni", sql.VarChar, dni)
                .input("Sexo", sql.VarChar, sexo)
                .input("Nacionalidad", sql.VarChar, nacionalidad)
                .input("Celular",sql.VarChar, celular)
                .input("Email",sql.VarChar, email)
                .query(getQueries.queriesClientesH.PostClientes)
            return result
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ClienteServices