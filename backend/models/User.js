const { Sequelize } = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true 
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: true
});

User.sync().then(() => {
    console.log('user table created');
}).catch(err => console.error('user table error: ', err));
module.exports = User;