const Chat = require('../models/Chat');

const deleteChat = async (req, res, next) => {
    let ret = await Chat.destroy({
        where: {
            roomName: req.body.id
        }
    });
    next();
}

module.exports = {deleteChat}