package com.bjrr.gestion_reservas.controlador;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bjrr.gestion_reservas.modelo.Reserva;
import com.bjrr.gestion_reservas.servicio.ReservaServicio;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "http://localhost:3000")
public class ReservaControlador {

    @Autowired
    private ReservaServicio reservaServicio;

    @PostMapping
    public Reserva registrarReserva(@RequestBody Reserva reserva) {
        return reservaServicio.registrarReserva(reserva);
    }

    @GetMapping
    public List<Reserva> listarReservas() {
        return reservaServicio.listarReservas();
    }

    @PutMapping("/{id}")
    public Reserva actualizarReserva(@PathVariable Long id, @RequestParam LocalDate fechaInicio, @RequestParam LocalDate fechaFin) {
        return reservaServicio.actualizarReserva(id, fechaInicio, fechaFin);
    }

    @DeleteMapping("/{id}")
    public void cancelarReserva(@PathVariable Long id) {
        reservaServicio.cancelarReserva(id);
    }
}
