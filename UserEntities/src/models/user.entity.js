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
        password: { type: "varchar", nullable: false },
        role: { type: "varchar", default:"user"},
        // Booléen avec défaut
        isActive: { type: "boolean", default: true },
        // Dates automatiques (Magique !)
        createdAt: { createDate: true, type: "datetime" },
        updatedAt: { updateDate: true, type: "datetime" },
    },
    relations: {
        todos: {
            type: "one-to-many",
            target: "Todo",
            inverseSide: "user", // Le nom de la propriété en face
            cascade: true // Si true: sauver User sauve aussi ses Todos
        }

    }
});
