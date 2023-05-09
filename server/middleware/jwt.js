const jwt = require('jsonwebtoken');

exports.verifyToken = async(req,res) => {
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json({
                    status: 'fail',
                    message: "You are not authenticated"
        });
    }
    jwt.verify(token, process.env.JWT_KEY, async(err, payload) => {
        if(err){
            return res.status(403).json({
                status: "fail",
                message: "Token is not valid"
            });
        };
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
    });
};

    