
const queriesTipoH = {
    getAllTHabitaciones: 'SELECT * from TTipoHabitacion',
    getByIdTHabitacion: 'SELECT * FROM TTipoHabitacion WHERE CodTipoH = @CodTipoH'
}

const queriesClientesH = {
    PostClientes: 'INSERT INTO TCliente VALUES (@CodCliente,@ApellidoP,@ApellidoM,@Nombres,@Dni,@Nacionalidad,@Sexo,@Email,@Celular)'
}

const queriesReservarH = {
    PostReserva: 'INSERT INTO TReserva VALUES (@CodReserva,@CodCliente,@NumHabitaciones,@FechaReserva,@FechaLlegada,@FechaSalida)'
}

const queriesPagoH = {
    PostPago: 'INSERT INTO TPago VALUES (@CodPago,@CodReserva,@Monto)'
}

const queriesDetalleReservaH = {
    PostDetalleReservaH: 'INSERT INTO TDetalleReservaHabitacion VALUES(@CodDetalleReservaH,@CodReserva,@CodTipoH)'
}

module.exports = {queriesTipoH,queriesClientesH,queriesReservarH,queriesPagoH,queriesDetalleReservaH}