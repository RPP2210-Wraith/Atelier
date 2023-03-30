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
      promises.push(axios({
        url: `${API}/reviews/meta`,
        headers:{
          'Authorization': TOKEN,
          'User-Agent': 'request'
        },
        params: {
          product_id: id
        },
      }))
      return Promise.all(promises);
    }
    // Takes in an object of star tallies and returns an average number rounded to 1/4
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

    // Third Attempt
    const getOutfitItems = (req, res) => {
      console.log('req.query: ', req.query);
      console.log('req.query.outfit: ', req.query.outfit);

      const outfitItems = req.query.outfit;
      //const endpoints = [""]
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
          var reviewsMeta = dataTuple[2].data;
          //console.log('Reviews: ', reviewsMeta)
          //console.log('style: ', style);
          var rating = calculateAvg(dataTuple[2].data.ratings);

          var image = style.photos[0].thumbnail_url;
          var name = dataTuple[0].data.name;
          var category = dataTuple[0].data.category;
          var price = style.original_price;
          var salePrice = style.sale_price;
          var features = dataTuple[0].data.features;
          result.push({
            image: image,
            id: outfitItems[index].product,
            style: outfitItems[index].style,
            name: name,
            category: category,
            price: price,
            salePrice: salePrice,
            rating: rating,
            features: features
          })
        })
        //console.log('result after all data: ', result)
        res.status(200).send(result)
      })
      .catch((err) => {
        console.log('error in getting outfit: ', err)
      })

    }


    module.exports = getOutfitItems;
