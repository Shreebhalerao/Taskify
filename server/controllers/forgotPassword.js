const User = require('../models/user');
const mailSender = require('../utils/mailSender');
const crypto = require('crypto');
const bcrypt = require('bcrypt');


// ================ Forgot Password Token ================
exports.forgotPasswordToken = async (req, res) => {
    try {
        // extract email 
        const { email } = req.body;

        // email validation
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Your Email is not registered with us'
            });
        }

        // generate token
        const forgotPasswordToken = crypto.randomBytes(20).toString("hex");

        // update user by adding token & token expire date
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { forgotPasswordToken: forgotPasswordToken, resetPasswordTokenExpires: Date.now() + 5 * 60 * 1000 },
            { new: true }); // by marking true, it will return updated user


        // create url
        const url = `https://taskify-full-stack.vercel.app/forgot-password/${forgotPasswordToken}`;

        // send email containing url
        await mailSender(email, 'Taskify - Password Reset Link', `Password Reset Link : ${url}`);

        // return succes response
        res.status(200).json({
            success: true,
            message: 'Email sent successfully , Please check your mail box and change password'
        })
    }

    catch (error) {
        console.log('Error while creating token for reset password');
        console.log(error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Error while creating token for reset password'
        })
    }
}



// ================ Forgot Password ================
exports.forgotPassword = async (req, res) => {
    try {
        // extract data
        // extract token by anyone from this 2 ways
        const forgotPasswordToken = req.body?.forgotPasswordToken || req.cookies?.forgotPasswordToken;

        const { password, confirmPassword } = req.body;

        // validation
        if (!forgotPasswordToken || !password || !confirmPassword) {
            return res.status(401).json({
                success: false,
                message: "All fiels are required...!"
            });
        }

        // validate both passwords
        if (password !== confirmPassword) {
            return res.status(401).json({
                success: false,
                message: 'Passowrds are not matched'
            });
        }


        // find user by token from DB
        const userDetails = await User.findOne({ forgotPasswordToken: forgotPasswordToken });
        // console.log("forgotPasswordToken = ", forgotPasswordToken)
        // console.log("all set userDetails = ", userDetails)

        // if user enter wrong token
        if (!userDetails?.forgotPasswordToken || forgotPasswordToken !== userDetails.forgotPasswordToken) {
            return res.status(401).json({
                success: false,
                message: 'Forgot Password token is not matched'
            });
        }

        // console.log('userDetails.resetPasswordExpires = ', userDetails.resetPasswordExpires);

        // check token is expire or not
        if (!(userDetails.resetPasswordTokenExpires > Date.now())) {
            return res.status(401).json({
                success: false,
                message: 'Token is expired, please regenerate token'
            });
        }


        // hash new passoword
        const hashedPassword = await bcrypt.hash(password, 10);

        // update user with New Password
        await User.findOneAndUpdate(
            { forgotPasswordToken },
            { password: hashedPassword },
            { new: true });

        res.status(200).json({
            success: true,
            message: 'Password reset successfully'
        });
    }

    catch (error) {
        console.log('Error while reseting password');
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Error while reseting password12'
        });
    }
}