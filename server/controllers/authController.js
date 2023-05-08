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