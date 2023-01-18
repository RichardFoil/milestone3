const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const jwt = require('jsonwebtoken');
const { User } = db;
const { defineCurrentUser } = require('../middleware/defineCurrentUser.js');

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        const isValid = await bcrypt.compare(password, user.password_digest);
        if (isValid) {
          const payload = { email: user.email, id: user.id };
          const token = jwt.sign(payload, process.env.JWT_SECRET);
          res.status(200).json({ message: 'Authentication successful', token });
        } else {
          res.status(401).json({ message: 'Incorrect password' });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in' });
    }
  });

  router.get('/profile', defineCurrentUser, (req, res) => {
    User.findOne({ where: { email: req.user.email } }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  });
});