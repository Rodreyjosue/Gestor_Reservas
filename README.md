# Backend de Reserva de Habitaciones

Este documento explica los pasos necesarios para ejecutar y utilizar el backend del sistema de reservas de habitaciones.

## Requisitos previos

Antes de seguir los pasos de instalación, asegúrate de tener lo siguiente instalado en tu máquina:

- **Java 17 o superior**
- **Maven** (para la gestión de dependencias)
- **Base de datos H2** o una base de datos compatible (MySQL, PostgreSQL, etc.)

## Pasos para ejecutar el backend

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

git clone https://github.com/tu-usuario/reservas-hotel.git

cd reservas-hotel

### 2.Configuración de la base de datos
El backend está configurado para usar H2 como base de datos en memoria por defecto. Si deseas utilizar una base de datos diferente, como MySQL o PostgreSQL, deberás modificar el archivo src/main/resources/application.properties con la configuración de la base de datos que prefieras.
ejemplo:

spring.datasource.url=jdbc:mysql://localhost:3306/nombre_de_la_base_de_datos
spring.datasource.username=usuario
spring.datasource.password=contraseña
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

### 3. Ejecutar la aplicación
Una vez compilado, ejecuta el backend con el siguiente comando:
mvn spring-boot:run

