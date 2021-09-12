const Room = require('../models/Room');
const {getStandardResponse} = require("../utils/response");
const { Op } = require("sequelize");

const createRoom = async (req, res) => {
    try{
        let id = res.locals.id;
        let ret = await Room.create({
            name: req.body.name,
            createdBy: id,
        });
        res.json(getStandardResponse(true, "Room created", null));
    }catch(e){
        res.json(getStandardResponse(false, e.name, null));
    }
}

const deleteRoom = async (req, res) => {
    try{
        let ret = await Room.destroy({
            where: {
                id: req.body.id
            }
        });
        res.json(getStandardResponse(true, "Room deleted", null));
    }catch(e){
        console.log(e)
        res.json(getStandardResponse(false, e.name, null));
    }
}

const getRooms = async (req, res) => {
    try{
        let id = res.locals.id;
        let arr = await Room.findAll({
            where: {
                createdBy: id
            }
        });
        res.json(getStandardResponse(true, "All chat rooms", arr));
    }catch(e){
        res.json(getStandardResponse(false, e.name, null));
    }
}

const verifyRoom = async (req, res) => {
    try{
        let ret = await Room.findOne({
            where: {
                name: req.body.name
            }
        })
        if(ret != null){
            res.json(getStandardResponse(true, "Room already exist", null));
        }
        res.json(getStandardResponse(false, "Room does not exist", null));
    }catch(e){
        res.json(getStandardResponse(false, e.name, null));
    }
}

module.exports = {createRoom, deleteRoom, getRooms, verifyRoom}