const UserModel = require('../Model/UserModel');

exports.index = async (req, res) => {
    let users = await UserModel.findAll();

    res.render('pages/users/index', { 
        title: 'Liste des Users',
        users:users
    });
};