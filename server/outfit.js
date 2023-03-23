const { TOKEN } = require('../config.js');
const axios = require('axios');

const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

// Build an array of item objects with title, photo, reg & sale price, category & rating
  getOutfitItems = (req, res) => {
    // Receives an array of tuples in format: [productID, styleID]
    // Returns an array of item objects

    // Sample intermediate data structure:!!!!!!!!!!!!!! THIS SHOULD WORK
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


    // Sample return:
    //  [{
    //    id: 71699,
    //    name: 'Clothes',
    //    category: 'Shoes',
    //    price: 140,
    //    salePrice: 100,
    //    image: '.jpeg'
    //  }]

    // Create an empty object to store . Will include objects w/id, name, cat, price, salePrice, image
    const resultArr = [];
    // For every tuple
    const outfit = req.query.outfit;

    const productRequests = outfit.map((outfitTuple) => {
      return getProduct(outfitTuple[0])
    })
    // Get the product info.
    return Promise.All(productRequests)
    .then((productInfoArr) => {
      // Push an object to the result array that includes the id, name, and category info
      productInfoArr.forEach((product) => {
        resultArr.push({
          id: product.data.id,
          name: product.data.name,
          category: product.data.category,
        })
      })

    })

    .then(() => {
      // Then iterate through the input arr again.
      // Return an array of promises for each style request

    })

      // Add the object to the result array

    // Send back the result array

  }

  module.exports = getOutfitItems;

  // helper functions that: (should return promises)
    // get product info -  given id, return obj of product info
    // get style info - if no arg provided, return default

    const getProduct = (id) => {
      return axios({
        url: `${API}/products/${itemID}`,
        headers:{
          'Authorization': TOKEN,
          'User-Agent': 'request'
        }
      })
    }
    // if no style id passed in, return the default style
    const getStyle = (productID, styleID) => {
      var styleInfo = {};

      return axios({
        url:`${API}/products/${product}/styles`,
        method: 'GET',
        headers:{
          'Authorization': TOKEN,
          'User-Agent': 'request'
        }
      })
      .then((styles) => {
        // Create var for the correct style to pull data from
        var style;

        if (styleID) {
          style = data.results.find((style) => {
            return style.style_id === styleID;
          })
        } else {
          style = data.results.find((style) => {
            return style.default === true;
          })
        }
        // Set the styleInfo obj with props from the style var object
        styleInfo[price] = style.original_price;
        styleInfo[salePrice] = style.sale_price;
        styleInfo[image] = style.photos[0].thumbnail_url;
        return styleInfo;
      })
    }



    // Take in an array of objects with style and product keys
    const getOutfitItems2 = (outfitItems) => {
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
      // For each item inside outfitItems
      outfitItems.forEach((item) => {
        var currentItem = item.product;
        var currentStyle = item.style;
        // If the product id doesnt exist in the iterable, create it
        if (!iterableOutfitItems[currentItem]) {
          iterableOutfitItems[currentItem] = [];
        }
        iterableOutfitItems[currentItem].push(currentStyle);
      })
      console.log('iterable: ', iterableOutfitItems)
      console.log('result: ', result)


      // For each key in the iterable obj
        for (var item in iterableOutfitItems) {
        var [ productID, styleID ] = item.split('_');
        // Make an axios request for the product data
        return getProduct(productID)
        // Assign it to every key in the result obj that starts with the current productID
        .then((productInfo) => {
          // For every key in the result obj where the split productID = productID
          for (var resultItem in result) {
            var [ resultProductID, resultStyleID ] = resultItem.split('_');
            if (resultItem.id === productID) {
              resultItem[resultProductID].name = productInfo.data.name
              resultItem[resultProductID].category
            }
          }
          // Set product info on the result object

        })
        // Make an axios request for the styles of that item

        // For each value in the current iterable object's styles array

          // Assign the necessary data to the result object at the current productID/styleID

        }


    }
