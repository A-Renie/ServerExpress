
exports.findAll = async () =>  {

    // Definir un tableau pour stocker les users, a remplacer par un appel DB ? 
    let users = [
        {id:1, lastname:"Dupont", firstname:"Jean"},
        {id:2, lastname:"Gardin", firstname:"Michel"},
        {id:3, lastname:"Delacourtepaille", firstname:"Marie"}
    ];

    return users;
}

exports.findOne = async (id) => {
    let users = [
        {id:1, lastname:"Dupont", firstname:"Jean"},
        {id:2, lastname:"Gardin", firstname:"Michel"},
        {id:3, lastname:"Delacourtepaille", firstname:"Marie"}
    ];
    
    //choisir user en fonction id pour le return
    let user = ""
    
    return user;
}
