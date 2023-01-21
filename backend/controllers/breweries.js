const express = require('express');
const router = express.Router();
const db = require('../models')
const {Brewery} = db;



// Get all breweries
router.get('/', async (req, res) => {
  try {
    const allBreweries = await Brewery.findAll();
    res.json({
      Brewery: allBreweries
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
    const brewery = await Brewery.findByPk(req.params.id);
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
  console.log("Request Body:", req.body) // Log the request body to the console
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
    console.log("New Brewery Data:", newBreweryData) // Log the new brewery data to the console
    const newBrewery = await Brewery.create(newBreweryData);
    console.log("New Brewery:", newBrewery) // Log the new brewery to the console
    res.json({
      Brewery: newBrewery
    });
  } catch (err) {
    console.error("Error:", err) // Log the error to the console
    res.status(500).json({
      message: 'Error creating brewery',
      error: err
    });
  }
});


  
module.exports = router;