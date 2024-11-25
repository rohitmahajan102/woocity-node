const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
require('dotenv').config();

// initialize the app
const app = express();

// add middleware for json parse
app.use(bodyParser.json());

// connect the database
const uri = process.env.DB_URL || 'mongodb://localhost:27017/woo-city';
mongoose.connect(uri)
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Database error: ', err));

// initialize the routes in the app
app.use('/api/users', userRoutes);

// start the server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));