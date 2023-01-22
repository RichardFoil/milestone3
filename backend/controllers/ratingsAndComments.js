const express = require('express');
const router = express.Router();
const db = require('../models');
const { RatingsAndComments } = db;

// Create a new rating and comment
router.post('/', async (req, res) => {
    console.log(req.body.user_id)
  try {
    const newRatingCommentData = {
      Rating: req.body.rating,
      Comment: req.body.comment,
      user_id: req.body.user_id,
      Brewery_id: req.body.Brewery_id
    };
    const newRatingComment = await RatingsAndComments.create(newRatingCommentData);
    res.json({
      ratingComment: newRatingComment
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error creating rating and comment',
      error: err
    });
  }
});

// Get all ratings and comments for a specific brewery
router.get('/:brewery_id', async (req, res) => {
  try {
    const ratingsComments = await RatingsAndComments.findAll({
      where: { Brewery_id: req.params.Brewery_id }
    });
    if (!ratingsComments) {
      res.status(404).json({
        message: 'Ratings and comments not found for this brewery'
      });
    } else {
      res.json({
        ratingsComments: ratingsComments
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error retrieving ratings and comments',
      error: err
    });
  }
});

module.exports = router;
