// require("reflect-metadata") se met plutot dans app

const AppDataSource = require('../src/config/datasource');
const app = require('./app');

const PORT = process.env.PORT || 3000;


AppDataSource.initialize()
  .then(() => {
    console.log(`Database connected`);

    app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
  })
  .catch((err) => {
    console.error("Database connection error", err); // remplacer par des error custom
    process.exit(1)
  });

