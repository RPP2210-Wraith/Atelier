const axios = require('axios');
//import the github auth token
const auth = require('../config.js');

//grab some data from the API via an axios call
exports.getReviews = (req, res) => {

  //console.log('RATINGS-REVIEW SERVER REQ: ', req.query.product_id);

  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
    params: {
      product_id: req.query.product_id
    },
    headers: {
      'User-Agent': 'request',
      'Authorization': auth.TOKEN
    }
  }).then((response) => {
    //console.log('REVIEWS: ', response.data);
    res.send(JSON.stringify(response.data));
  });


};

exports.getReviewsMetaData = (req, res) => {

  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta',
    params: {
      product_id: req.query.product_id
    },
    headers: {
      'User-Agent': 'request',
      'Authorization': auth.TOKEN
    }
  }).then((response) => {
    //console.log('REVIEWS: ', response.data);
    res.send(JSON.stringify(response.data));
  });

};

