# CobreDelMayo

Este proyecto es una aplicación que utiliza **Node.js**, **Yarn** y **MySQL** como tecnologías principales.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- **Node.js** (versión recomendada: >=16.x)
- **Yarn** (gestor de dependencias)
- **MySQL** (o cualquier otro manejador de bases de datos compatible)

## Instrucciones de instalación y configuración

### 1. Configuración del archivo `.env` (Backend)

- Dirígete al directorio del **backend**.
- Crea o edita el archivo `.env` con las variables necesarias. Asegúrate de tener configuradas correctamente las variables de entorno para la base de datos, como la conexión a MySQL.

> Ejemplo de archivo `.env`: (hay un .env.example)
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=cobre_del_mayo

```

### 2. Crear la base de datos

- Abre tu manejador de base de datos preferido (por ejemplo, MySQL Workbench, DBeaver, o la terminal de MySQL).
- Crea la base de datos con el nombre especificado en el archivo `.env` o importa la base de datos proporcionada, si es necesario.

> Script para crear la base de datos en MySQL:
```sql
CREATE DATABASE cobre_del_mayo;

```

### 3. Accede a la carpeta del backend y ejecuta el backend
```cd
cd backend
yarn install
yarn start
```

### 5. Accede a la carpeta del frontend
- Dependiendo el caso de la carpeta que desees visitar
- Ejemplo de la carpeta Frontera
```cd
cd Frontera
```
- instala las dependencias
  ```cd
  yarn install
  ```

### 5. Ejecuta el front
```cd
yarn run serve
```

### 6. Accede a localhost
- Tu terminal debera marcarte en que puerto se esta ejecutando pero por default es el 8080
```navegador
http://localhost:8080/adds
```
