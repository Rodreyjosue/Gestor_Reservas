# Frontend de Reserva de Habitaciones

Este documento explica los pasos necesarios para ejecutar y utilizar el frontend del sistema de reservas de habitaciones.

## Requisitos previos

Antes de seguir los pasos de instalación, asegúrate de tener lo siguiente instalado en tu máquina:

- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes de Node.js)

Si no tienes Node.js instalado, puedes obtenerlo desde [aquí](https://nodejs.org/).

## Pasos para ejecutar el frontend

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

git clone https://github.com/tu-usuario/reservas-hotel-frontend.git

cd reservas-hotel-frontend

### 2. Instalar las dependencias
A continuación, instala las dependencias necesarias para ejecutar la aplicación frontend. Usa el siguiente comando dentro del directorio del proyecto:

npm install

Este comando descargará e instalará todas las bibliotecas necesarias definidas en el archivo package.json.

### 3. Configurar la URL del backend
Asegúrate de que la URL del backend esté configurada correctamente. Abre el archivo src/config.js y asegúrate de que el backend esté apuntando a la URL correcta:

export const BACKEND_URL = 'http://localhost:8080/api';

Si tu backend se encuentra en una URL diferente, actualiza el valor de BACKEND_URL de acuerdo con tu configuración.

###4. Ejecutar la aplicación
Una vez que las dependencias estén instaladas y la configuración esté lista, puedes iniciar la aplicación frontend con el siguiente comando:

npm start

Esto iniciará el servidor de desarrollo y la aplicación estará disponible en http://localhost:3000.
