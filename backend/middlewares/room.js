const Room = require('../models/Room')

const getDetails = async (req, res, next) => {
    let roomName = req.params.roomName;
    let ret = await Room.findOne({
        where:{
            name: roomName
        }
    })
    res.locals.roomId = ret.id;
    next()
}

module.exports = {getDetails}