const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const { User } = db;


router.post('/', async (req, res) => {

    try {
        const { password, ...userData } = req.body;
         const hashedPassword = await bcrypt.hash(password, 10);
         const newUser = await User.create({ ...userData, password_digest: hashedPassword });
         res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
    console.log("user route")
});
 
router.get('/users', async (req, res) => {
    console.log("haha")
    const users = await User.findAll()
    res.json(users)
})

module.exports = router;
