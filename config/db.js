import { Sequelize } from "sequelize";

const db = new Sequelize("databaseapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Failet To Connect Database");
  });

export default db;
