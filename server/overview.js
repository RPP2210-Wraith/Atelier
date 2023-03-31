const axios = require('axios');
const config = require('../config.js');

exports.getProduct = (req, res) => {
  const productID = req.query.productID;

  let urls = [
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}`,
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}/styles`,
    // `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`
  ]

  const requests = urls.map((url) => {
    return axios({
      method: 'GET',
      url: url,
      headers: {
        'User-Agent': 'request',
        'Authorization': `${config.TOKEN}`
        }
    })
  })

  axios.all(requests)
    .then((responses) => {
      // console.log('hhhhhhhh', responses)
      const datas = responses.reduce((datas, response) => {
        return datas.concat(response.data)
      }, [])
      res.send(datas)
    })
    .catch(() => {
      res.sendStatus(501);
    })
}

exports.postCart = (req, res) => {
  const data = req.query;
    axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart',
    query: data,
    headers: {
    'User-Agent': 'request',
    'Authorization': `${config.TOKEN}`,
    'content-type': 'application/json'
    }
  })
  .then((response) => {
    console.log(response)
  })
}