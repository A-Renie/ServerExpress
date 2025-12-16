const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Tag", // Nom de l'entité (utilisé dans getRepository)
    tableName: "tags", // Nom réel de la table en SQL
    columns: {
        // ID Auto-incrémenté
        id: { primary: true, type: "int", generated: true },
        // Champ Texte unique et obligatoire
        label: {  type: "varchar"},
        // Dates automatiques (Magique !)
        createdAt: { createDate: true, type: "datetime" },
        updatedAt: { updateDate: true, type: "datetime" },
    },
    relations: {
        todos: {
            type: "many-to-many",
            target: "Todo",
            inverseSide: "tags", // Le nom de la propriété en face
            joinTable: true
        }

    }
});
