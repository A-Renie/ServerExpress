const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require("bcrypt")
const AppDataSource = require("../config/datasource")
// const userRepository = AppDataSource.getRepository("User");
// ... Importez bcrypt, Appdatasource et votre entité User ici

module.exports = (passport) => {
    // ==================================================
    // 1. STRATÉGIE LOCAL (Sert uniquement au Login)
    // ==================================================
    passport.use(new LocalStrategy({
        usernameField: 'email', // Indiquez à Passport quel champ sert d'identifiant
        session: false // Désactivez les sessions (car on fait une API REST)
    },
    async (email, password, done) => {
        // const hashedPassword = await bcrypt.hash(password, 10); //pas  utile ici, mais mon comment hasher un password

        // TODO :
        // 1. Récupérez le Repository User via AppDataSource
        const userRepository = AppDataSource.getRepository("User");
        // 2. Cherchez l'utilisateur par son email.
        const user = await userRepository.findOneBy({ email})
        if (!user) {
          return done(null, false, { message: "Utilisateur introuvable" });
        }

        // 3. VÉRIFICATIONS :
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid){
            return done(null, false, { message: 'Mot de passe incorrect' });
        } else if (isPasswordValid){
            return done(null, user);
        }
        // Si l'user n'existe pas OU si le mot de passe (bcrypt.compare) est faux :
        // return done(null, false, { message: '...' });
        // 4. SUCCÈS :
        // Si tout est bon :
    }
    ));
    
    // ==================================================
    // 2. STRATÉGIE JWT (Sert aux routes protégées)
    // ==================================================
    const jwtOptions = {
        // Indiquez à Passport où trouver le token (Indice)
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        // Indiquez la clé secrète (process.env.JWT_SECRET)
        secretOrKey: process.env.JWT_SECRET
    };

    passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
        // TODO :
        // Le "payload" contient les infos décodées du token (ex: payload.id)
        const userRepository = AppDataSource.getRepository("User")
        const user = await userRepository.findOneBy({ id: payload.id })
        if (!user) {
            return done(null, false);
        } else if (user){
            return done(null, user);
        }
        // 1. Cherchez l'utilisateur dans la DB grâce à payload.id
        // 2. Si l'utilisateur existe : return done(null, user);
        // 3. Sinon : return done(null, false);
    }));
};