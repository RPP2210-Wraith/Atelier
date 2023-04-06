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
      product_id: req.query.product_id,
      //page: req.query.page
      count: req.query.count,
      sort: req.query.sort
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

  console.log('GetReviewsMetaData Request object: ', req.query);

  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta',
    params: {
      product_id: req.query.product_id,
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

exports.markReviewHelpful = (req, res) => {

  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${req.query.review_id}/helpful`,
    headers: {
      'User-Agent': 'request',
      'Authorization': auth.TOKEN
    }
  }).then((response) => {
    //console.log('review marked helpful: ', response.data);
    res.status(204);
    res.send(JSON.stringify(response.data));
  });

};

exports.reportReview = (req, res) => {

  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${req.query.review_id}/report`,
    headers: {
      'User-Agent': 'request',
      'Authorization': auth.TOKEN
    }
  }).then((response) => {
    //console.log('review reported: ', response.data);
    res.status(204);
    res.send(JSON.stringify(response.data));
  });

};

exports.postNewReview = (req, res) => {
  console.log('SERVER REVIEW POST: ', req)
  axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
    data: req.body,
    headers: {
      'User-Agent': 'request',
      'Authorization': auth.TOKEN
    }
  }).then((response) => {
    res.status(201);
    res.send(JSON.stringify(response));
  }).catch((err) => {
    console.log('Post new review ERORR: ', err.response.data);
  })
}

