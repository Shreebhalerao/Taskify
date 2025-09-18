const jwt = require("jsonwebtoken");
require('dotenv').config();


// ================ AUTH ================
// user Authentication by checking token validating
exports.auth = (req, res, next) => {
    try {
        // extract token by anyone from this 3 ways
        const token = req.body?.token || req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');

        // if token is missing
        if (!token) {
            console.log('Token is Missing')
            return res.status(401).json({
                success: false,
                message: 'Token is Missing'
            });
        }

        // console.log('Token ==> ', token);
        // console.log('From body -> ', req.body?.token);
        // console.log('from cookies -> ', req.cookies?.token);
        // console.log('from headers -> ', req.header('Authorization')?.replace('Bearer ', ''));

        // verify token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            // console.log('verified decode token => ', decode);
            // example = {
            //     email: 'tatyavinchu34@gmail.com',   
            //     id: '662c9e999ce55c5d14d313c3',     
            //     iat: 1714293554,
            //     exp: 1714379954
            //   }
            req.user = decode;
        }
        catch (error) {
            console.log('Error while decoding token 🔴🔴');
            console.log(error);
            return res.status(401).json({
                success: false,
                error: error.message,
                messgae: 'Error while decoding token'
            })
        }
        // go to next middleware
        next();
    }
    catch (error) {
        console.log('Error while token validating 🔴🔴');
        console.log(error);
        return res.status(500).json({
            success: false,
            messgae: 'Error while token validating'
        })
    }
}



