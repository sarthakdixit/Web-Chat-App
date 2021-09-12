const express = require('express');
const control = require('../controllers/Room');
const router = express.Router();
const decodeToken = require('../middlewares/decodeToken');
const chatMiddle = require('../middlewares/chats')

router.post('/create-room', decodeToken.forId, control.createRoom)

router.post('/delete-room', decodeToken.forId, chatMiddle.deleteChat, control.deleteRoom)

router.post('/verify', decodeToken.forId, control.verifyRoom)

router.get('/get-rooms', decodeToken.forId, control.getRooms)

module.exports = router;