const express = require('express');
const router = express.Router();
const { breweries } = require('../models');

// Get all breweries
router.get('/', async (req, res) => {
  try {
    const allBreweries = await breweries.findAll();
    res.json({
      breweries: allBreweries
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error retrieving breweries',
      error: err
    });
  }
});

// Get a specific brewery by id
router.get('/:id', async (req, res) => {
  try {
    const brewery = await breweries.findByPk(req.params.id);
    if (!brewery) {
      res.status(404).json({
        message: 'Brewery not found'
      });
    } else {
      res.json({
        brewery: brewery
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error retrieving brewery',
      error: err
    });
  }
});

// Create a new brewery
router.post('/', async (req, res) => {
  try {
    const newBrewery = await breweries.create(req.body);
    res.json({
      brewery: newBrewery
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error creating brewery',
      error: err
    });
  }
});
  
module.exports = router;