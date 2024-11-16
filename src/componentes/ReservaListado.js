import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReservaFormulario from './ReservaFormulario';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservaListado() {
  const [reservas, setReservas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [reservaEdicion, setReservaEdicion] = useState(null);

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = () => {
    axios.get('http://localhost:8080/api/reservas')
      .then(response => setReservas(response.data))
      .catch(() => Swal.fire('Error', 'Error al cargar las reservas', 'error'));
  };

  const eliminarReserva = (id) => {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Esta acción cancelará la reserva.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, volver',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/api/reservas/${id}`)
          .then(() => {
            setReservas(reservas.filter(reserva => reserva.id !== id));
            Swal.fire('Cancelada', 'La reserva ha sido cancelada.', 'success');
          })
          .catch(() => Swal.fire('Error', 'No se pudo cancelar la reserva', 'error'));
      }
    });
  };

  const crearReserva = () => {
    setReservaEdicion(null); // Limpiar datos previos si es una nueva reserva.
    setMostrarFormulario(true); // Ocultar listado y mostrar formulario.
  };

  const editarReserva = (reserva) => {
    setReservaEdicion(reserva); // Pasar reserva seleccionada al formulario.
    setMostrarFormulario(true); // Ocultar listado y mostrar formulario.
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false); // Ocultar formulario y mostrar listado.
    cargarReservas(); // Recargar listado al finalizar acción.
  };

  return (
    <div className="container mt-4">
      {mostrarFormulario ? (
        <ReservaFormulario
          reservaEdicion={reservaEdicion}
          cerrarFormulario={cerrarFormulario}
        />
      ) : (
        <>
          <h2 className="mb-4">Listado de Reservas</h2>
          <button
            className="btn btn-primary mb-3"
            onClick={crearReserva}
          >
            Crear Reserva
          </button>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Cliente</th>
                <th>Fechas</th>
                <th>Tipo de Habitación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservas.length > 0 ? (
                reservas.map(reserva => (
                  <tr key={reserva.id}>
                    <td>{reserva.nombreCliente}</td>
                    <td>{reserva.fechaInicio} - {reserva.fechaFin}</td>
                    <td>{reserva.tipoHabitacion}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => editarReserva(reserva)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarReserva(reserva.id)}
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">No hay reservas disponibles.</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ReservaListado;
