const jwt = require('jsonwebtoken');
const {authConfig} = require("../config/auth")

const forId = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token =  req.headers.authorization.split(' ')[1];
        let decoded = jwt.verify(token, authConfig.ACCESS_TOKEN_SECRET);
        let id = decoded.id;
        res.locals.id = id;
    }
    next();
}

module.exports = {forId}