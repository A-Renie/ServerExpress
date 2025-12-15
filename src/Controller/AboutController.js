exports.index = (req, res) => {

   res.render('pages/about', { 
        title: `À propos`, 
        message: `Ceci est la page à propos.` 
    });
};