import { Sequelize } from "sequelize";

const db = new Sequelize('cruds_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;