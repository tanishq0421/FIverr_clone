const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');

exports.deleteUser = async(req, res,) => {
    const user = await User.findById(req.params.id);
    if(req.userId !== user._id.toString()){
            return res.status(403).json({
                status: "fail",
                message: "You can delete only your account"
            });
    };
    await User.findByIdAndDelete(req.params.id);
        res.status(400).json({
            status: "success",
            message: "Your account is deleted"
        });
};