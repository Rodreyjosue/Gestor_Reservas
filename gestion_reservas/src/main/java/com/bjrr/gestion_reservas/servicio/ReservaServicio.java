package com.bjrr.gestion_reservas.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bjrr.gestion_reservas.modelo.Reserva;
import com.bjrr.gestion_reservas.repositorio.ReservaRepositorio;

@Service
public class ReservaServicio {

    @Autowired
    private ReservaRepositorio reservaRepositorio;

    public Reserva registrarReserva(Reserva reserva) {
        return reservaRepositorio.save(reserva);
    }

    public List<Reserva> listarReservas() {
        return reservaRepositorio.findAll();
    }

    public Reserva actualizarReserva(Long id, Reserva reserva) {
        Reserva reservaActualizar = reservaRepositorio.findById(id)
            .orElseThrow(() -> new RuntimeException("Reserva no encontrada"));
            reservaActualizar.setFechaInicio(reserva.getFechaInicio());
            reservaActualizar.setFechaFin(reserva.getFechaFin());
        return reservaRepositorio.save(reservaActualizar);
    }

    public void cancelarReserva(Long id) {
        Reserva reserva = reservaRepositorio.findById(id)
            .orElseThrow(() -> new RuntimeException("Reserva no encontrada"));
            reservaRepositorio.delete(reserva);
    }
}

