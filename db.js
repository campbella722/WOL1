const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres2:JFrancis1@localhost:5432/wol", {
    host: "localhost", 
    dialect: "postgres"
});

module.exports = sequelize;