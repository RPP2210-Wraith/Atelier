const { TOKEN } = require('../config.js');
const axios = require('axios');


const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';


// Build an array of item objects with title, photo, reg & sale price, category & rating
  getRelated = (req, res) => {
    const productID = req.query.productID;
    // Sample array:
  //   [
  //     71701,
  //     71705,
  //     71703,
  //     71698,
  //     71697
  // ]
    const relatedArr = [];

    axios({
      url: `${API}/products/${productID}/related`,
      method: 'GET',
      headers:{
        'Authorization': TOKEN,
        'User-Agent': 'request'
      }
    })
      .then((APIresponse) => {
        // Build an item object for every item in response.data
        console.log('related item IDs: ', APIresponse.data)
        return Promise.all(APIresponse.data.map((itemID) => {
          return axios({
              url: `${API}/products/${itemID}`,
              method: 'GET',
              headers:{
                'Authorization': TOKEN,
                'User-Agent': 'request'
              }
          })

}))

      })
      .then((productInfo) => {
        console.log('productInfo: ', productInfo)
        // For each item in return, console log data
        productInfo.forEach((item) => {
          console.log('item: ', item.data)
          relatedArr.push({
            id: item.data.id,
            name: item.data.name,
            description: item.data.description,
            category: item.data.category
          })
        })
      })
      .catch((err) => {
        console.log('Error in get related products API request: ', err)
      })
  }

  module.exports = getRelated;
