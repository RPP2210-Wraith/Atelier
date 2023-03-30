const TOKEN = require('../config.js');
const axios = require('axios');

const logInteraction = (req, res) => {
  console.log('Interactions req.body: ', req.body);


}


module.exports = logInteraction;