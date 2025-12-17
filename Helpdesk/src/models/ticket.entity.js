const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Ticket", // Nom de l'entité (utilisé dans getRepository)
    tableName: "tickets", // Nom réel de la table en SQL
    columns: {
        // ID Auto-incrémenté
        id: { primary: true, type: "int", generated: true },
        // Name
        title: {  type: "varchar", nullable: false },
        // Description de la tache
        description: {  type: "varchar", nullable: false },
        status: {  type: "varchar", nullable: false, default:"open"},
        priority: {  type: "varchar", nullable: false, default:"low"},
        // Dates automatiques (Magique !)
        createdAt: { createDate: true, type: "datetime" },
        updatedAt: { updateDate: true, type: "datetime" },
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "User",
            inverseSide: "tickets",
            joinColumn: true // CRUCIAL : Crée la colonne userId
        },
        tags: {
            type: "many-to-many",
            target: "Tag",
            inverseSide: "tickets", // Le nom de la propriété en face
        }
    }
});
