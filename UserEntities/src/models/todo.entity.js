const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Todo", // Nom de l'entité (utilisé dans getRepository)
    tableName: "todos", // Nom réel de la table en SQL
    columns: {
        // ID Auto-incrémenté
        id: { primary: true, type: "int", generated: true },
        // Name
        name: {  type: "varchar", nullable: false },
        // Description de la tache
        taskDescription: {  type: "varchar", nullable: false },
        // Booléen avec défaut
        isCompleted: { type: "boolean", default: false },
        // Dates automatiques (Magique !)
        createdAt: { createDate: true, type: "datetime" },
        updatedAt: { updateDate: true, type: "datetime" },
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "User",
            inverseSide: "todos",
            joinColumn: true // CRUCIAL : Crée la colonne userId
        },
        tags: {
            type: "many-to-many",
            target: "Tag",
            inverseSide: "todos", // Le nom de la propriété en face
            // joinTable: true //seulement sur la todo
        }
    }
});
