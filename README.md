# Sistema de Reservas
Examen Final

Este proyecto es una aplicación web para gestionar reservas, construida utilizando **Spring Boot** para el backend y **React** para el frontend.

---

## Requisitos

Asegúrate de tener instalados los siguientes programas:
- **Java 17** o superior
- **Maven** para el manejo de dependencias
- **Node.js** y **npm** para el frontend
- **MySQL** para la base de datos
- **Git** para clonar el repositorio
- 
---

## Instrucciones para Ejecutar el Backend

Configuración y Ejecución
### **1. Backend**
Ve a la carpeta backend:
cd backend
Configura la conexión a la base de datos en el archivo src/main/resources/application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/hotel_reservas
spring.datasource.username=tu_usuario
spring.datasource.password=Angelique1

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=tu_contraseña

Crea la base de datos en MySQL con el nombre reservas:
- CREATE DATABASE reservas;
  
ejecuta el backend utilizando Maven:
mvn spring-boot:run
El servidor estará disponible en: http://localhost:8080.

 ### **2. Frontend**
Ve a la carpeta frontend:
cd frontend

Instala las dependencias necesarias:
npm install

Inicia el servidor de desarrollo:
npm start

La aplicación estará disponible en: http://localhost:3000.

---

## **3. Manual de uso**


**1. Listado de Reservas**
Esta pantalla muestra todas las reservas registradas en el sistema, con opciones para editar o cancelar.

![image](https://github.com/user-attachments/assets/9c2830da-1bf3-4290-9120-2ec340cea230)


**2. Crear una Reserva**
Formulario para registrar una nueva reserva. Al finalizar, el sistema muestra una alerta confirmando que la reserva fue creada exitosamente.

![image](https://github.com/user-attachments/assets/c4f6faca-7478-4387-b9d6-b6faea8da2e1)


![image](https://github.com/user-attachments/assets/af2b7cb3-20b0-4d9a-8e09-953f8c31e671)


**3. Editar una Reserva**
Para actualizar una reserva, selecciona la opción Actualizar en la lista de reservas.

![image](https://github.com/user-attachments/assets/e295aac1-40e9-47f8-91b6-6442a4e0df3a)

Al hacerlo, el formulario se llenará con los datos actuales de la reserva para que puedan ser editados. Tras realizar los cambios, presiona el botón Actualizar.

![image](https://github.com/user-attachments/assets/55081e33-32bf-40de-97a7-9638f8aafdbb)


**4. Eliminar Reserava**
Para cancelar una reserva, selecciona el botón Cancelar en la lista de reservas.

![image](https://github.com/user-attachments/assets/78ba1bb7-6c11-4c34-b8c0-52b34ab6516d)

Se mostrará una pantalla de confirmación donde deberás confirmar que deseas eliminar la reserva.

   ![image](https://github.com/user-attachments/assets/5f93336d-c085-41d9-829a-b273ba4eb68c)


Si todo sale bien, el sistema mostrará una alerta confirmando la cancelación.

   ![image](https://github.com/user-attachments/assets/1daf6e06-97a7-4576-af96-8b1187308ab6)


La reserva será eliminada de la lista.

   ![image](https://github.com/user-attachments/assets/3fc74bff-8d0e-4fa8-a3c3-ecb899142e0f)


