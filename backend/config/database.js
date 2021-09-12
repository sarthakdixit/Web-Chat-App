const { Sequelize } = require('sequelize');

module.exports = new Sequelize('chatapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});