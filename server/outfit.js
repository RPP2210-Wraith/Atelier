const { TOKEN } = require('../config.js');
const axios = require('axios');

const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

// Build an array of item objects with title, photo, reg & sale price, category & rating
  getOutfitItems = (req, res) => {
    // Receives an array of tuples in format: [productID, styleID]
    // Create an empty array to send back. Will include objects w/id, name, cat, price, salePrice, image

    // For every tuple

      // Get the product info. Create an obj and store the id, name, and category info

      // Then get the style info that matches the 2nd element in the tuple. Add it to the obj

      // Add the object to the result array

    // Send back the result array

  }

  module.exports = getOutfitItems;

  // helper functions that: (should return promises)
    // get product info -  given id, return obj of product info
    // get style info - if no arg provided, return default