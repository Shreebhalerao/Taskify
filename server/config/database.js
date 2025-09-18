const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log('Database connected successfully 🟢🟢');
        })
        .catch(error => {
            console.log('Error while connecting server with Database 🔴🔴');
            console.log(error);
            process.exit(1);
        });
};
