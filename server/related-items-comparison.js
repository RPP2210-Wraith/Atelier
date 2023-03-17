const { TOKEN } = require('../config.js');
const axios = require('axios');


const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
// Get array of related items given current item



  getRelated = (req, res) => {
    const productID = req.query.productID;

    axios.get(`${API}/products/${itemID}/related`)
      .then((APIresponse) => {
        res.status(200).send(APIresponse)
      })
      .catch((err) => {
        console.log('Error in get related products API request: ', err)
      })

  }

  module.exports = getRelated
