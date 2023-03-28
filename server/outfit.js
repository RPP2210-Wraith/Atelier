const { TOKEN } = require('../config.js');
const axios = require('axios');

const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

    const getProduct = (id) => {
      const promises = [];

      promises.push(axios({
        url: `${API}/products/${id}`,
        headers:{
          'Authorization': TOKEN,
          'User-Agent': 'request'
        }
      }))
      promises.push(axios({
        url: `${API}/products/${id}/styles`,
        headers:{
          'Authorization': TOKEN,
          'User-Agent': 'request'
        }
      }))
      return Promise.all(promises);
    }

    const getOutfitItems = (req, res) => {
      const outfitItems = req.query.outfit;
      const endpoints = [""]
      if (outfitItems === undefined) {res.status(400).send(''); return}
      // Create an array to store promises
      const promises = [];
      // Create a result array
      const result = [];
      // For each outfit item
      outfitItems.forEach((item) => {
        // Push to the array an axios request for the item's product and style info
        promises.push(getProduct(item.product));
      })
      // Return promise.all and pass it the array of promises
      return Promise.all(promises)
      .then((info) => {
        info.forEach((dataTuple, index) => {
          var style = dataTuple[1].data.results.find((result) => {
            return result.style_id.toString() === outfitItems[index].style;
          })
          console.log('style: ', style);
          var image = style.photos[0].thumbnail_url;
          var name = dataTuple[0].data.name;
          var category = dataTuple[0].data.category;
          var price = style.original_price;
          var salePrice = style.sale_price;
          result.push({
            image: image,
            id: outfitItems[index].product,
            style: outfitItems[index].style,
            name: name,
            category: category,
            price: price,
            salePrice: salePrice
          })

        })
        console.log('result after all data: ', result)
        res.status(200).send(result)
      })
      .catch((err) => {
        console.log('error in getting outfit: ', err)
      })

    }


    module.exports = getOutfitItems;

