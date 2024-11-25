const express = require('express');
const router = express.Router();
const {addUser, getAllUser} = require('../controllers/userController');

// Example user routes
router.get('/get-all', getAllUser);

router.post('/create-user', addUser);

module.exports = router;