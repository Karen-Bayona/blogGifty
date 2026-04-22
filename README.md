# Blog Gifty - Backend API  🚀

Este proyecto es una API REST desarrollada para la gestión de contenidos y autenticación segura, construida bajo una arquitectura de capas.

## 👥 División de Roles y Responsabilidades

El proyecto se dividió estratégicamente para asegurar una cobertura completa de la infraestructura y la lógica de negocio:

### 1. Infraestructura y Seguridad (Karen Bayona)
* **Conectividad**: Configuración de Express y conexión exitosa a MongoDB Atlas.
* **Seguridad de Datos**: Implementación de Hashing de contraseñas con `bcryptjs`.
* **Autenticación**: Sistema de Login con generación de tokens JWT.
* **Protección de Red**: Configuración de `Helmet` (seguridad HTTP) y `CORS`.
* **Middlewares**: Creación del `authMiddleware` para validación de identidad y un manejador global de errores.

### 2. Lógica de Negocio / CRUD (Laura Franco)
* **Modelos de Contenido**: Definición de Schemas Mongoose para `Articulo.js` y `Gadget.js`.
* **Funcionalidades CRUD**: Implementación de controladores para Crear, Leer, Actualizar y Borrar contenidos.
* **Integración**: Aplicación del middleware de seguridad a los endpoints privados.
* **Rutas de Negocio**: Configuración de `articuloRoutes.js` y `gadgetRoutes.js`.

## 🛠️ Tecnologías Utilizadas
* **Node.js & Express**: Entorno de ejecución y servidor web.
* **Mongoose**: Modelado de objetos para MongoDB.
* **JWT**: Estándar para transmisión segura de información entre partes.
* **Bcrypt**: Protección criptográfica de credenciales.

## 🚀 Matriz de Endpoints

| Ruta (Endpoint) | Método | Descripción | Protección |
| :--- | :--- | :--- | :--- |
| `/api/auth/registro` | POST | Registro de usuarias nuevas | Público |
| `/api/auth/login` | POST | Validación y entrega de JWT | Público |
| `/api/auth/perfil` | GET | Datos de la usuaria autenticada | **Privado (JWT)** |
| `/api/articulos` | GET | Ver todos los artículos | Público |
| `/api/articulos` | POST | Crear nuevo artículo | **Privado (JWT)** |
| `/api/articulos/:id` | PUT | Editar artículo existente | **Privado (JWT)** |
| `/api/articulos/:id` | DELETE | Eliminar artículo | **Privado (JWT)** |

---
Desarrollado por: **Karen Bayona & Laura Franco**
