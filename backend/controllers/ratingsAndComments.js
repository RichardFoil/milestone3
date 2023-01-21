const express = require('express');
const router = express.Router();
const db = require('../models');
const { RatingsAndComments } = db;

// Create a new rating and comment
router.post('/', async (req, res) => {
  try {
    const newRatingCommentData = {
      rating: req.body.rating,
      comment: req.body.comment,
      user_id: req.body.user_id,
      brewery_id: req.body.brewery_id
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
      where: { brewery_id: req.params.brewery_id }
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