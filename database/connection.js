const sql = require('mssql')

const dbConfig = {
  user: 'sqlHotel',
  password: 'hotel12345',
  server: 'localhost',
  database: 'BDHOTEL',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

async function getConnection(){
  try {
    const conex = await sql.connect(dbConfig)
    return conex;
  } catch (error) {
    console.error(error)
  }
}

module.exports = getConnection;
