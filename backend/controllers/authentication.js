const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const jwt = require('jsonwebtoken');
const defineCurrentUser = require('../middleware/defineCurrentUser');
const { User } = db;

router.post('/authentication', async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email }
  });
  if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
    res.status(404).json({
      message: `Could not find a user with the provided username and password`
    });
  } else {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ user, token });
  }
});

router.get('/authentication/profile', defineCurrentUser, async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(id);
    res.json(user);
  } catch (err) {
    res.status(401).json({ message: 'Not Authorized' });
  }
});


