const User = require('./../models/userModel');
const bcrypt = require('bcrypt');

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
        res.status(404).json({
            status: 'fail',
            message: err
        });
   }
   next();
}

exports.login = async(req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user){
            return res.status(404).json({
                status: 'fail',
                message: "User not found"
            });

        const isCorrect = bcrypt.compareSync(req.body.password, User.password);
        if(!isCorrect){
            return res.status(400).json({
                status: "fail",
                message: "Incorrect Password"
            });
        }
        }

        const {password, ...info} = user._doc;
        res.status(200).json({
            data: info
        })
        
    }
    catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}