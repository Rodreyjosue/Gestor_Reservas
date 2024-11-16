package com.bjrr.gestion_reservas.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bjrr.gestion_reservas.modelo.Reserva;

public interface ReservaRepositorio extends JpaRepository <Reserva, Long>{
}
