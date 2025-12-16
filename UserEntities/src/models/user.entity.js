const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User", // Nom de l'entité (utilisé dans getRepository)
    tableName: "users", // Nom réel de la table en SQL
    columns: {
        // ID Auto-incrémenté
        id: { primary: true, type: "int", generated: true },
        // Name
        name: {  type: "varchar" },
        // Champ Texte unique et obligatoire
        email: { type: "varchar", unique: true, nullable: false },
        // Booléen avec défaut
        isActive: { type: "boolean", default: true },
        // Dates automatiques (Magique !)
        createdAt: { createDate: true, type: "datetime" },
        updatedAt: { updateDate: true, type: "datetime" },
    },
    relations: {
        // ajouter les to do et relations après
    }
});
