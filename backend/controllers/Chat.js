const Chat = require('../models/Chat');
const User = require('../models/User');
const Room = require('../models/Room');
const {getStandardResponse} = require("../utils/response");
const { Op } = require("sequelize");

const postChat = async (req, res) => {
    try{
        let roomId = res.locals.roomId;
        let id = res.locals.id;
        let ret = await Chat.create({
            message: req.body.message,
            roomName: roomId,
            sender: id
        });
        res.json(getStandardResponse(true, "Message posted", null));
    }catch(e){
        console.log(e)
        res.json(getStandardResponse(false, e.name, null));   
    }
}

const getChats = async (req, res) => {
    try{
        let id = res.locals.roomId;
        let ret = await Chat.findAll({
            include:[
                {
                    model:User,
                    attributes:['name']
                }
            ],
            where:{
                roomName: id
            },
            order:[['createdAt', 'desc']]
        })
        res.json(getStandardResponse(true, "All Chat results", ret));
    }catch(e){
        console.log(e)
        res.json(getStandardResponse(false, e.name, null));
    }
}

module.exports = {getChats, postChat}