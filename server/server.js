const express = require('express')
const app = express()

// packages
const cors = require('cors');
require('dotenv').config();

// connection to DB and cloudinary
const { connectDB } = require('./config/database');
const { cloudinaryConnect } = require('./config/cloudinary');

// import routes
const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');

const PORT = process.env.PORT || 5000;



// middleware 
app.use(express.json()); // to parse json body
app.use(
    cors({
         origin: 'http://localhost:5173', // frontend link
        // origin: "*",
        credentials: true
    })
);



app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT} 🤩`);
});


// connections
connectDB();
cloudinaryConnect();


// mount route
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/todo', todoRoutes);


// Default Route
app.get('/', (req, res) => {
    console.log('Your server is up and running..!');
    res.send(`<div>
    This is Default Route  
    <p>Everything is OK</p>
    </div>`);
})