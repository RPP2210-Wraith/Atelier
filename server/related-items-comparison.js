const { TOKEN } = require('../config.js');
const axios = require('axios');

const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

// Build an array of item objects with title, photo, reg & sale price, category & rating
  getRelated = (req, res) => {
    const productID = req.query.productID;
    const relatedItems = {};

    axios({
      url: `${API}/products/${productID}/related`,
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
              headers:{
                'Authorization': TOKEN,
                'User-Agent': 'request'
              }
          })
        }))
      })
      .then((productInfo) => {
        //console.log('productInfo: ', productInfo)
        const stylingPromises = [];
        // For each item in return, console log data
        productInfo.forEach((item) => {
          //console.log('item: ', item.data)
          relatedItems[item.data.id] = {
            id: item.data.id,
            name: item.data.name,
            category: item.data.category
          }
          stylingPromises.push(axios({
            url:`${API}/products/${item.data.id}/styles`,
            method: 'GET',
            headers:{
              'Authorization': TOKEN,
              'User-Agent': 'request'
            }
          }))
        })
        return Promise.all(stylingPromises);
      })
      .then((styleInfo) => {
        //console.log('related items response after product data: ', relatedItems)
        styleInfo.forEach((itemStylesRes) => {
          //console.log('STYLES: ', style.data)
          // Iterate through the arr to add the necessary style info to each item's object
          const itemStylesArr = itemStylesRes.data;
          //console.log('itemstylesArr: ', itemStylesArr)
          for (var i = 0; i < itemStylesArr.results.length; i++) {
            //console.log('default style: ', itemStylesArr.results[i])
            var relatedItem = relatedItems[itemStylesArr.product_id];
            var itemStyle = itemStylesArr.results[i];
            if (itemStyle.default = true)
            //console.log('Item style: ', itemStyle)
              relatedItem.price = itemStyle.original_price;
              relatedItem.salePrice = itemStyle.sale_price;
              relatedItem.image = itemStyle.photos[0].thumbnail_url;
          }
        })
        // Now that data processing is done, convert the object to an array and send
        //console.log('related items response after style data: --------------------');
        //console.log(relatedItems);

        const relatedItemsArr = [];
        for (var item in relatedItems) {
          relatedItemsArr.push(relatedItems[item])
        }
        console.log('relatedItemsArr final value: ', relatedItemsArr)
        res.status(200).send(relatedItemsArr);
      })

      .catch((err) => {
        console.log('Error in get related products API request: ', err)
      })
  }

  module.exports = getRelated;
