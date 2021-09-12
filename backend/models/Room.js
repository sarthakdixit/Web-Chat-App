const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Room = db.define('room', {
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
    createdBy: {
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

Room.sync().then(() => {
    console.log('room table created');
}).catch(err => console.error('room table error: ', err));
module.exports = Room;