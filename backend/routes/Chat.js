const express = require('express');
const control = require('../controllers/Chat');
const router = express.Router();
const Room = require('../middlewares/room')
const decodeToken = require('../middlewares/decodeToken');

router.get('/all-chats/:roomName', Room.getDetails, control.getChats)

router.post('/send-message/:roomName', decodeToken.forId, Room.getDetails, control.postChat)

module.exports = router;