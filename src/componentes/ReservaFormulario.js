import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservaFormulario({ reservaEdicion, cerrarFormulario }) {
  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tipoHabitacion, setTipoHabitacion] = useState('Sencilla');

  useEffect(() => {
    if (reservaEdicion) {
      setNombreCliente(reservaEdicion.nombreCliente);
      setFechaInicio(reservaEdicion.fechaInicio);
      setFechaFin(reservaEdicion.fechaFin);
      setTipoHabitacion(reservaEdicion.tipoHabitacion);
    } else {
      setNombreCliente('');
      setFechaInicio('');
      setFechaFin('');
      setTipoHabitacion('Sencilla');
    }
  }, [reservaEdicion]);

  const envio = (e) => {
    e.preventDefault();
    const url = reservaEdicion
      ? `http://localhost:8080/api/reservas/${reservaEdicion.id}`
      : 'http://localhost:8080/api/reservas';

    const metodo = reservaEdicion ? axios.put : axios.post;

    metodo(url, {
      nombreCliente,
      fechaInicio,
      fechaFin,
      tipoHabitacion,
    })
      .then(() => {
        Swal.fire(
          'Éxito',
          reservaEdicion ? 'Reserva actualizada correctamente' : 'Reserva creada con éxito',
          'success'
        );
        cerrarFormulario();
      })
      .catch(() => Swal.fire('Error', 'No se pudo procesar la reserva', 'error'));
  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h4>{reservaEdicion ? 'Editar Reserva' : 'Crear Reserva'}</h4>
      </div>
      <div className="card-body">
        <form onSubmit={envio}>
          <div className="form-group">
            <label>Nombre del Cliente</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del cliente"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha de Inicio</label>
            <input
              type="date"
              className="form-control"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha de Fin</label>
            <input
              type="date"
              className="form-control"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Tipo de Habitación</label>
            <select
              className="form-control"
              value={tipoHabitacion}
              onChange={(e) => setTipoHabitacion(e.target.value)}
            >
              <option value="Sencilla">Sencilla</option>
              <option value="Doble">Doble</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary me-2">
              {reservaEdicion ? 'Actualizar Reserva' : 'Registrar Reserva'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cerrarFormulario}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservaFormulario;
