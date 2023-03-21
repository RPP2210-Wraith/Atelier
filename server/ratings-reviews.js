const axios = require('axios');
//import the github auth token
const auth = require('../config.js');

//grab some data from the API via an axios call
exports.getReviews = (req, res) => {
  //test call
  res.send(JSON.stringify('Request for review data made!!!!!'));
};

