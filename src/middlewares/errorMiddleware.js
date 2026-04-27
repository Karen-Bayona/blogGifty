module.exports = (err, req, res, next) => {
    
    // 1. Determinar el código de estado 
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    // Si el error trae su propio status 
    if (err.statusCode) statusCode = err.statusCode;

    console.error(`[Error de Infraestructura]: ${err.message}`);

    // 2. Enviar la respuesta al cliente
    res.status(statusCode).json({
        msg: err.message,
        // Solo mostramos el stack trace si NO estamos en producción
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};