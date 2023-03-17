const { TOKEN } = require('../config.js');
const axios = require('axios');


const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';


// Build an array of item objects with title, photo, reg & sale price, category & rating
  getRelated = (req, res) => {
    const productID = req.query.productID;
    console.log('product id: ', productID)


    axios({
      url: `${API}/products/${productID}/related`,
      method: 'GET',
      headers:{
        'Authorization': TOKEN,
        'User-Agent': 'request'
      }
    })
      .then((APIresponse) => {
        console.log('API reponse: ', APIresponse.data)
      })
      .catch((err) => {
        console.log('Error in get related products API request: ', err)
      })

  }

  module.exports = getRelated;
