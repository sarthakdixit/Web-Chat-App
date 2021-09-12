const express = require('express');
const control = require('../controllers/Auth');
const router = express.Router();

router.post('/create-user', control.createUser)

router.post('/login', control.loginUser)

module.exports = router;