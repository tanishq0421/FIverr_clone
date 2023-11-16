const User = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('./../utils/createError');

exports.register = async(req, res, next) => {
    try{
        const hash = bcrypt.hashSync(req.body.password, 12);
        const newUser = await User.create({
            ...req.body,
            password: hash,
        });
        res.status(201).json({
            status: "success",
            data:{
                newUser
            }
        });
    }catch(err){
        next(err);
   }
   
}

exports.login = async(req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user)return next(createError(404, "User not found!"));
    
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
            if(!isCorrect){
                return res.status(400).json({
                    status: "fail",
                    message: "Incorrect Password"
                });
            }
               

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, process.env.JWT_KEY);

        const {password, ...info} = user._doc;
        res.cookie("accessToken", token, {
            httpOnly:true,
        })
        .status(200).json({
            data: info
        })
        
    }
    catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.logout = async(req, res, next)  => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    })
    .status(200)
    .json({
        status: "success",
        message: "User has been logged out"
    });
}