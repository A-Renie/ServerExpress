class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;

        // Définir status : 'fail' pour 4xx, 'error' pour 5xx
        if (statusCode >= 400 && statusCode < 500) {
            this.status = 'fail';
        } else {
            this.status = 'error';
        }

        Error.captureStackTrace(this, this.constructor);
    }
}

// Erreur 404
class NotFoundError extends ApiError {
    constructor(message = 'Ressource non trouvée') {
        super(404, message);
    }
}

// Erreur 400
class ValidationError extends ApiError {
    constructor(message = 'Requête invalide') {
        super(400, message);
    }
}

module.exports = { ApiError, NotFoundError, ValidationError };
