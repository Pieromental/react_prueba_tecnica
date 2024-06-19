# React Prueba Técnica

Este repositorio contiene el proyecto de prueba técnica en React. La aplicación es una SPA (Single Page Application) que permite ver detalles de productos, añadirlos al carrito y ver el resumen del carrito.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn (versión 1.22 o superior)

## Instalación

Sigue los siguientes pasos para instalar y ejecutar el proyecto localmente:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/react-prueba-tecnica.git
   cd react-prueba-tecnica

2. **Instalar Dependencias:**

 Usando npm:

    ``` npm install
    
    Usando yarn.

    ``` yarn install

3. **Scripts Disponibles:**
    En el directorio del proyecto, puedes ejecutar:

    ``` npm start o yarn start
    
    Ejecuta la aplicación en modo desarrollo.

    ``` npm run build o yarn build
    
    Compila la aplicación para producción en la carpeta dist.
    Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

    ```npm test o yarn test

    Inicia el ejecutor de pruebas en el modo de reloj interactivo.


   ```npm run lint o yarn lint
    Ejecuta ESLint para encontrar y arreglar problemas en el código.

## Estructura del Proyecto:

    ├── public
    │   ├── index.html
    │   └── ...
    ├── src
    │   ├── assets
    │   │   └── icons
    │   ├── components
    │   │   └── Header.jsx
    │   ├── context
    │   │   └── cart.jsx
    │   ├── hooks
    │   │   └── useProductDetails.js
    │   ├── pages
    │   │   ├── ProductDetailsPage.jsx
    │   │   └── ProductListPage.jsx
    │   ├── __tests__
    │   │   └── example.test.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .babelrc
    ├── .eslintrc.js
    ├── jest.config.cjs
    ├── package.json
    └── vite.config.js

## Notas Adicionales:

    Persistencia de Datos: La información del carrito se almacena en localStorage con una expiración de 1 hora.
    
    API: La aplicación se conecta a una API para obtener los detalles del producto y gestionar el carrito de compras.
    
    Responsividad: La aplicación es responsiva y se ajusta para verse correctamente en diferentes tamaños de pantalla.
    

## Problemas Comunes:

    Error al ejecutar npm run test: Asegúrate de tener instalados todos los paquetes necesarios, incluidos @testing-library/jest-dom.
    Problemas de CORS: Si encuentras problemas de CORS al hacer peticiones a la API, considera utilizar un proxy o configurar CORS en el servidor de la API.

## Contribuciones:
    Las contribuciones son bienvenidas. Por favor, abre un issue para discutir lo que te gustaría cambiar.

