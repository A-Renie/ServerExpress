const AppDataSource = require("../config/datasource")
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const { ValidationError } = require('../errors/ApiError'); // pas encore utilisé


class AuthService {
    constructor(){
        this.userRepository = AppDataSource.getRepository("User");
    }

    async register(data) {
        // 1. Récupérer email, password, role depuis req.body
        // 2. Vérifier si l'utilisateur existe déjà (findOneBy email)
        const user = await this.userRepository.findOneBy({email:data.email})
        console.log(user)
        // -> Si oui : renvoyer une erreur 400 ou 409
        if (user){
            throw new ValidationError("L'email existe déja")
        }
    
        // 3. Hacher le mot de passe (bcrypt.hash) avec un salt de 10
        const hashedPassword = await bcrypt.hash(data.password, 10)
        // 4. Créer l'instance de l'utilisateur (Repository.create)
        const userData = {
            name: data.name,
            email:data.email,
            password:hashedPassword,
            role:data?.role
        }; 

        const newUser = this.userRepository.create(userData)
        // -> Attention à mettre le mot de passe HACHÉ
        // -> Si le rôle n'est pas fourni, forcer 'USER' par défaut (fait par l'entité directement)
        // 5. Sauvegarder (Repository.save) et répondre 20   
        return await this.userRepository.save(newUser)
    }

    async login(data) {
        // 1. Récupérer l'user validé par Passport
        // INDICE : Il est disponible dans req.user 
        const user = data;

        // 2. Préparer le Payload (les infos à mettre dans le token)
        const payload = {
            id: user.id,
            email: user.email,
            role: user.role
        };
        // -> id, email, role
        // 3. Générer l'ACCESS Token (Court terme : 15 min)
        const accessToken = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{ expiresIn: "15m" });
        // -> Utiliser jwt.sign(payload, secret, options)
        // 4. Générer le REFRESH Token (Long terme : 7 jours)
        const refreshToken = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{ expiresIn: "7d" });
        // -> Utiliser jwt.sign(payload, secret, options)
        // 5. Renvoyer les deux tokens au client (JSON)
        return {accessToken,refreshToken};
    }


    async refresh(data){
        // 1. Récupérer le refreshToken depuis le body
        const { refreshToken } = data;
        // -> Si pas de token : erreur 401
        if (!refreshToken) {
            throw new Error("Refresh token manquant");
        }
        // 2. Vérifier le token (jwt.verify)

        // -> Premier argument : le token
        // -> Deuxième argument : le secret
        // -> Troisième argument : le callback (err, decodedUser)
        return new Promise((resolve, reject) => {
            jsonwebtoken.verify(refreshToken,process.env.JWT_SECRET,(err, decodedUser) => {
                // 4. Token invalide
                if (err) {
                    return reject(new Error("Refresh token invalide"));
                }

                // 5. Recréer le payload
                const payload = {
                    id: decodedUser.id,
                    email: decodedUser.email,
                    role: decodedUser.role
                };

                // 6. Nouveau accessToken
                const newAccessToken = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{ expiresIn: "15m" });

                // 7. Réponse
                resolve({ accessToken: newAccessToken });
            });
        });
        // jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
        //     // 3. Si erreur (token invalide ou expiré) : erreur 403
        //     // 4. Si tout est bon :
        //     // -> Re-créer un payload propre (id, email, role) depuis l'objet 'user' décodé
        //     // -> Signer un NOUVEL accessToken (15m)
        //     // 5. Renvoyer l'accessToken (JSON)
        // });
    };

}

module.exports = new AuthService();