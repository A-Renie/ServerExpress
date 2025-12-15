const errorHandler = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';
    const message = err.message || 'Erreur interne du serveur';

    res.status(statusCode).json({
        status,
        message
    });
};

module.exports = errorHandler;
