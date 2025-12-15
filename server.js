require('dotenv').config();
const express = require('express');
const path = require('path');
const config = require('./config/config');
const app = express();
const port = process.env.PORT || 3000;



// Configuration du moteur de templates
// --

// Définir le dossier des templates
// le repertoire "templates" comme spécifié dans config/config.js 
// -> /templates/
app.set('views', path.join(__dirname, config.views));

// Définir le moteur de templates
// le moteur de templates comme spécifié dans config/config.js 
// -> ejs
// -> html
// -> txt
app.set('view engine', config.viewEngine);

// Associer l'extension .html au moteur EJS
// Permet de rendre les fichiers .html avec EJS
app.engine('html', require('ejs').__express);



// Servir les fichiers statiques depuis le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// --
// Utilisation des routes définies dans config/routes.js
app.use('/', require('./config/routes'));


// Démarrage du serveur
// --

// Lancer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});