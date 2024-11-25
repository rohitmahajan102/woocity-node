const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// create new user
const addUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10); // Generate salt (the cost factor is 10)
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

        // Create a new user with hashed password
        const newUser = new User({ fullname, email, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();

        // Respond with success
        res.status(200).json({ message: 'User registered successfully' });

    } catch (err) {

        console.error(err);
        res.status(400).json({ message: 'Error registering user' });
    }
}

// get all users
const getAllUser = async (req, res) => {
    try {

        const userList = await User.find();
        res.status(200).json({
            data: userList
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Error getting user' });
    }
}


module.exports = {addUser, getAllUser};