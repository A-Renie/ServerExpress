/**
 * Affiche la page de contact
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.index = (req, res) => {
    res.render('pages/contact', { 
        title: `Contact`, 
        message: `N'hésitez pas à nous contacter !` 
    });
};