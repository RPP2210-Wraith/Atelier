const { TOKEN } = require('../config.js');
const axios = require('axios');

const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

  // helper functions that: (should return promises)
    // get product info -  given id, return obj of product info
    // get style info - if no arg provided, return default

    const getProduct = (id) => {
      return axios({
        url: `${API}/products/${id}`,
        headers:{
          'Authorization': TOKEN,
          'User-Agent': 'request'
        }
      })
    }

    // Take in an array of objects with style and product keys
    const getOutfitItems = (req, res) => {
      console.log('outfit items: ', req.query.outfit)
      const outfitItems = req.query.outfit;
      //const outfitItems = JSON.parse(req.query.outfit);
      const promises = [];
      console.log('outfit items: ', outfitItems)
      // Create a result object with each key a combined product/style ID & value an object

      var result = {};
      outfitItems.forEach((item) => {
        var currentItem = item.product;
        var currentStyle = item.style;
        // If the product id doesnt exist in result, create it
        if (!result[`${currentItem}_${currentStyle}`]) {
          result[`${currentItem}_${currentStyle}`] = {
            id: currentItem,
            style_id: currentStyle
          };
        }
      })
      // Create an iterable obj with each key a product ID and the value an array of style IDs
      var iterableOutfitItems = {};
      outfitItems.forEach((item) => {
        var currentItem = item.product;
        var currentStyle = item.style;
        // If the product id doesnt exist in the iterable, create it
        if (!iterableOutfitItems[currentItem]) {
          iterableOutfitItems[currentItem] = [];
        }
        iterableOutfitItems[currentItem].push(currentStyle);
      })
      //console.log('iterable: ', iterableOutfitItems)
      //console.log('result: ', result)

      // For each key in the iterable obj
        for (var item in iterableOutfitItems) {
        // Make an axios request for the product data
        const productPromise = getProduct(item)
        // Assign it to every key in the result obj that starts with the current productID
        .then((productInfo) => {
          // For every key in the result obj
          for (var resultItem in result) {
            var [ resultProductID, resultStyleID ] = resultItem.split('_');
            // If the current item data is the same as the current key in the result obj
            if (resultProductID === item) {
              // Set product info on the result object
              result[resultItem].name = productInfo.data.name
              result[resultItem].category = productInfo.data.category
            }
          }
          console.log('result after product id: ', result)
          // Make an axios request for the styles of that item
          return axios({
            url:`${API}/products/${item}/styles`,
            headers:{
              'Authorization': TOKEN,
              'User-Agent': 'request'
            }
          })
          .then((stylesArr) => {
            console.log('stylesArr.data: ', stylesArr.data)
            // For each value in the result object
            for (var resultItem in result) {
              var [ resultProductID, resultStyleID ] = resultItem.split('_');
              // If the result object is an instance of the current item
              if (resultProductID === item) {
                var styles = stylesArr.data.results;
                // iterate through the stylesArr.data.results
                for (var i = 0; i < styles.length; i++) {
                  //if the current style is the one listed in the result obj
                  console.log('if statement here');
                  console.log(styles[i].style_id);
                  console.log(resultStyleID);
                  if (styles[i].style_id.toString() === resultStyleID) {
                    result[resultItem].price = styles[i].original_price;
                    result[resultItem].salePrice = styles[i].sale_price;
                    result[resultItem].image = styles[i].photos[0].thumbnail_url;
                  }
                }
              }
            }
          })
        })
        .catch((err) => {
          console.log('error in getting outfit: ', err)
        })
        promises.push(productPromise)
        }
        Promise.all(promises)
          .then(() => {
            // Convert the result object to an array
            const finalOutfitItemArray = [];
            for (var itemObj in result) {
              finalOutfitItemArray.push(result[itemObj])
            }
            console.log('final outfit array: ', finalOutfitItemArray)
            res.status(200).send(finalOutfitItemArray);
          })
    }
    module.exports = getOutfitItems;

    // Sample result
 // {
 //   71699_1: {
 //    id: 71699,
 //    style: 1
 //    name: 'Clothes',
 //    category: 'Shoes',
 //    price: 140,
 //    salePrice: 100,
 //    image: '.jpeg'
 //   },
 //   71699_2: {
 //     id: 71699,
 //     style: 2
 //     name: 'Clothes',
 //     category: 'Shoes',
 //     price: 140,
 //     salePrice: 100,
 //     image: '.jpeg'
 //   },
 // }

 // Sample iterable:
 // {
 //   71699: [1, 2, 3, 4],
 //   71698: [3, 4, 5, 6]
 // }

 //localStorage.setItem("myOutfit", JSON.stringify([{product: 71699, style: 444230}, {product: 71699, style: 444228}]))