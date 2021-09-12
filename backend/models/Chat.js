const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Chat = db.define('chat', {
    id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true 
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    roomName: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:"rooms",
            key:"id"
        }
    },
    sender: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:"users",
            key:"id"
        }
    }
},{
    timestamps: true
});

Chat.sync().then(() => {
    console.log('chat table created');
}).catch(err => console.error('chat table error: ', err));
module.exports = Chat;