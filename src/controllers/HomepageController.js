/**
 * Affiche la page d'accueil
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.index = (req, res) => {

    res.render('pages/homepage', { // /templates/homepage.html
        title: `Accueil`, 
        message: `Bienvenue sur la page d'accueil !`,

    });
};