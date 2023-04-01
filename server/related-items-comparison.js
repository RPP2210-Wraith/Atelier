const { TOKEN } = require('../config.js');
const axios = require('axios');

const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

// Helper to calculate average rating
const calculateAvg = (obj) => {
  let total = 0;
  let count = 0;

  for (const key in obj) {
    const value = parseInt(obj[key]);
    total += value * parseInt(key);
    count += value;
  }

  const average = total / count;
  const rounded = Math.round(average * 4) / 4;
  //console.log('avg result: ', rounded)

  if (rounded % 1 === 0) {
    return rounded.toFixed(0);
  } else {
    return rounded.toFixed(2);
  }
  // Return average, rounded to 1/4
  //return result;
}

// Build an array of item objects with title, photo, reg & sale price, category & rating
  getRelated = (req, res) => {
    const productID = req.query.productID;
    const relatedItems = {};

    // Get the list of related items
    axios({
      url: `${API}/products/${productID}/related`,
      headers:{
        'Authorization': TOKEN,
        'User-Agent': 'request'
      }
    })
      .then((APIresponse) => {
        // Build an item object for every item in response.data
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
        const stylingPromises = [];
        // For each item in return, create an object
        productInfo.forEach((item) => {
          //console.log('item: ', item.data)
          relatedItems[item.data.id] = {
            id: item.data.id,
            name: item.data.name,
            category: item.data.category,
            features: item.data.features
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
        // Get the styling info for use in the next then block
        return Promise.all(stylingPromises);
      })
      .then((styleInfo) => {
        const ratingsPromises = [];
        styleInfo.forEach((itemStylesRes, index) => {
          // Iterate through the arr to add the necessary style info to each item's object
          const itemStylesArr = itemStylesRes.data;
          for (var i = 0; i < itemStylesArr.results.length; i++) {
            var relatedItem = relatedItems[itemStylesArr.product_id];
            var itemStyle = itemStylesArr.results[i];
            if (itemStyle.default = true)
            //console.log('Item style: ', itemStyle)
              relatedItem.price = itemStyle.original_price;
              relatedItem.salePrice = itemStyle.sale_price;
              relatedItem.image = itemStyle.photos[0].thumbnail_url;
              relatedItem.style_id = itemStyle.style_id;
          }
        // Here, if no default style, there will be no relateddItem.price/salePrice/image
        // Set based on the first style
        if (index === itemStylesRes.length && !relatedItem.image) {
          console.log('no default found')
          relatedItem.price = itemStylesArr[0].original_price;
          relatedItem.salePrice = itemStylesArr[0].sale_price;
          relatedItem.image = itemStylesArr[0].photos[0].thumbnail_url;
          relatedItem.style_id = itemStylesArr[0].style_id;
        }

        console.log('relatedItem after adding style info: ', relatedItem)

        // Finally, get the ratings data and pass to the next then block
        ratingsPromises.push(axios({
          url: `${API}/reviews/meta`,
          headers:{
            'Authorization': TOKEN,
            'User-Agent': 'request'
          },
          params: {
            product_id: itemStylesArr.product_id
          },
        }))
        })



        return Promise.all(ratingsPromises);
      })
      .then((ratings) => {
        //console.log('ratings----------------------------------------: ', ratings[0].data)
        ratings.forEach((item) => {
          //console.log('-----------', ratings[item])
          const avg = calculateAvg(item.data.ratings)
          //console.log('avg-----------------------------------: ', avg)
          relatedItems[item.data.product_id].rating = avg;
        })
        // Now that data processing is done, convert the object to an array and send
        const relatedItemsArr = [];
        for (var item in relatedItems) {
          relatedItemsArr.push(relatedItems[item])
        }
        // console.log('relatedItemsArr final value: ', relatedItemsArr)
        res.status(200).send(relatedItemsArr);
      })

      .catch((err) => {
        console.log('Error in get related products API request: ', err)
      })
  }

  module.exports = getRelated;
