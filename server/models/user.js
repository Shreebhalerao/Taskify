const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        // accountType: {
        //     type: String,
        //     enum: ['Admin', 'client'],
        //     reuired: true
        // },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile",
            required: true,
        },
        todos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Todo",
            },
        ],
        image: {
            type: String,
            required: true,
        },
        token: {
            type: String,
        },
        forgotPasswordToken: {
            type: String,
        },
        resetPasswordTokenExpires: {
            type: Date,
        },
    }, // Add timestamps for when the document is created and last modified
    { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

module.exports = User;
