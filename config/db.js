import {Sequelize} from "sequelize";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host : process.env.HOST,
    dialect : process.env.DIALECT,
})

db.authenticate()
.then(()=>{console.log("Database Connected")})
.catch(()=>{console.log("Failet To Connect Database")});


export default db;