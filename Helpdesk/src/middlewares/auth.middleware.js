const passport = require('passport')
const { ValidationError } = require('../errors/ApiError'); // pas encore utilisé

const requireAuth = passport.authenticate('jwt', { session: false });

const requireRole = (role) => {
    return (req, res, next) => {
        // 1. req.user contient l'utilisateur connecté (grâce à requireAuth avant)
        if (!req.user){
            throw new ValidationError("Pas d'utilisateur (from Auth Middleware")
        }
        // Si pas d'user (cas rare mais possible), renvoyer 401.

        // 2. Comparer req.user.role avec le 'role' demandé en argument
        if (req.user.role !== "admin"){
            throw new ValidationError("Droits insuffisants") //mettre les bonnes erreurs
        } 
        // -> Si ça ne matche pas :
        // Renvoyer une erreur 403 (Forbidden) avec message "Droits insuffisants"
        // 3. Si tout est bon :
        // Appeler next() pour laisser passer
        next()
    };
};

module.exports = { requireAuth, requireRole }