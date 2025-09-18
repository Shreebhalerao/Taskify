const User = require("../models/user");
const Profile = require("../models/profile");

// ==================== User Details ====================
exports.getUserDetails = async (req, res) => {
    try {
        // const userId = req.user.id;
        const { id } = req.user;

        const userDetails = await User.findById(id).populate('todos');

        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            sucess: true,
            message: 'User details fetch successfully',
            data: userDetails
        })
    } catch (error) {
        console.error('Error while fetching user details => ', error);
        res.status(500).json({
            success: false,
            message: 'Error while fetching user details',
            error: error.message,
        });
    }
}


// ==================== Delete Account ====================
exports.deleteAccount = async (req, res) => {
    try {
        // extract user id
        const userId = req.user.id;
        // console.log('userId = ', userId)

        // validation
        const userDetails = await User.findById(userId);
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // first - delete profie (profileDetails)
        await Profile.findByIdAndDelete(userDetails.additionalDetails);

        // second - delete account
        await User.findByIdAndDelete(userId);


        // sheduale this deleting account , crone job

        // return response
        res.status(200).json({
            success: true,
            message: 'Account deleted successfully'
        })
    }
    catch (error) {
        console.log(`Error while updating profile => ${error}`);
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Error while deleting profile'
        })
    }
}