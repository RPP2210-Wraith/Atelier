const axios = require('axios');
const config = require('../config.js');

exports.getProduct = (req, res) => {
  const productID = req.query.productID;
  console.log('product ID sent from client: ', productID)

  let urls = [
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}`,
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}/styles`,
    // `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}/reviews/`
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
      const datas = responses.reduce((datas, response) => {
        return datas.concat(response.data)
      }, [])
      res.send(datas)
    })
}