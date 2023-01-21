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
    const newBreweryData = {
      id: req.body.id,
      name: req.body.name,
      brewery_type: req.body.brewery_type,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      phone: req.body.phone,
      website_url: req.body.website_url,
    };
    const newBrewery = await breweries.create(newBreweryData);
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