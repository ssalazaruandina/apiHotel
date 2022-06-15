const sql = require('mssql')

const getConnection = require('../database/connection')

const getQueries = require('../database/consultas')

class tipoHabitacionServices {
  constructor(){}

  async findAll(){
    try {
      const conex = await getConnection();
      const result = conex.request().query(getQueries.queriesTipoH.getAllTHabitaciones) 
      return result
    } catch (error) {
      console.log(error)
    }
   
  }

  async findBy(id){
    try {
      const conex = await getConnection();
      const result = conex.request().input("CodTipoH",sql.VarChar,id).query(getQueries.queriesTipoH.getByIdTHabitacion)
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = tipoHabitacionServices
