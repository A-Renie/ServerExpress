// Importe le router d'Express
const express = require('express');
const router = express.Router();

// Import des contrôleurs
// --

const HomepageController = require('../src/Controller/HomepageController');
const AboutController = require('../src/Controller/AboutController');
const ContactController = require('../src/Controller/ContactController');
const UserController = require('../src/Controller/UserController');


// Définition des routes
// --

// Route pour la page d'accueil
router.get('/', HomepageController.index);

// Route pour la page "À propos"
router.get('/about', AboutController.index);

// Route pour la page "Contact"
router.get('/contact',ContactController.index);

// Route pour la page "Contact"
router.get('/users',UserController.index);

    
module.exports = router;