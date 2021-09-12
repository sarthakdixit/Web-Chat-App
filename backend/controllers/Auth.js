const User = require('../models/User');
const bcrypt = require('bcrypt');
const {getStandardResponse} = require("../utils/response");
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const {authConfig} = require("../config/auth");

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash;
}

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

const createTokens = (obj) => {
    const accessToken = jwt.sign(obj, authConfig.ACCESS_TOKEN_SECRET);
    return accessToken
}

const createUser = async (req, res) => {
    try{
        let pass = await hashPassword(req.body.password);
        let ret = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: pass
        });
        res.json(getStandardResponse(true, "User Created", null));
    }catch(e){
        res.json(getStandardResponse(false, e.name, null));
    }
}

const loginUser = async (req, res) => {
    try{
        let query = await User.findOne({
            where: {
                [Op.or]: [
                    { name: req.body.name_email },
                    { email: req.body.name_email }
                ]
            }
        });
        if(query === null){
            res.json(getStandardResponse(false, "User not found", null));
        }else{
            let user = query.dataValues ;
            let compare_password = await comparePassword(req.body.password, user.password);
            if(compare_password){
                res.json(getStandardResponse(true, "User found", {
                    name: user.name,
                    accessToken: createTokens({
                        id: user.id,
                        name: user.name,
                        email : user.email
                    })
                }));
            }else{
                res.json(getStandardResponse(false, "Password is wrong", null));
            }
        }
    }catch(e){
        res.json(getStandardResponse(false, e.name, null));
    }
}

module.exports = {createUser, loginUser}