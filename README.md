# Front-End Capstone Atelier - Wraith Edition

## Overview:
This project is a complete redesign client-facing retail web-portal. Focus on providing the minimum viable product for our retail application, enhanced the user experience and modernized the site. 

## Table of Contents
- ### [Description](#description)
   - ##### [Product Overview](#overview)
   - ##### [Related Items, Outfit, & Comparison](#related)
   - ##### [Ratings & Reviews](#reviews)

- ### [Installation](#installation)
- ### [Contributors](#contributors)

-----

## Description: <a name='description'></a>

### Product Overview <a name='overview'></a>
The product overview component displays the product general information, such as product style images, rating, category, name, description, features, styles, and prices, etc.

<img src='http://g.recordit.co/yKJY8q8IVO.gif' width='70%'/>

The Star rating represents the average rating of the product, and a link stating “Read all # reviews” can scroll the page to the Ratings & Reviews.

<img src='http://g.recordit.co/bqhgkCeE7a.gif' width='70%'/>

All the styles are always displayed for the product, customers can toggle between the style selectors. The image gallery, style name and price are updated dynamically upon style selection, a checkmark will appear on the upper-right corner for that style. 

<img src='http://g.recordit.co/bkFo7R75Qx.gif' width='70%'/>

On the image gallery, clicking on the left side thumbnail can update the main image, customers can also be able to change to the next or previous images by clicking the forward and backwards arrow buttons appearing near the right and left edges of the image. Click on the main image can change to the expanded view of the image.

<img src='http://g.recordit.co/2ZmgmVQNvy.gif' width='70%'/>

There are two dropdowns that allow the user to select the size and quantity of the item to add to their cart. Once the customer selects a style, the first drop down will list all the available sizes for the currently selected style, only sizes that are currently in stock will be listed, .If there is no remaining stock for the current style, the dropdown should become inactive and read “OUT OF STOCK”. Once the size is selected, the second dropdown will allow the customer to select the quantity. If both a valid size and valid quantity are selected, clicking the ‘add to cart’ button will add the product to the customer's cart.
Clicking the ‘like’ star can add the product being part of the “My Outfit” carousel.

<img src='http://g.recordit.co/GraIl6uAIA.gif' width='70%'/>



### Related Items, Outfit, & Comparison <a name='related'></a>
- ##### Related Items
This section contains product cards in a carousel style display that include info about the product. Clicking on the card itself will navigate the user to the product page for that product. Clicking the star button in the top right will open a comparison modal between the clicked item and the current item. Nav buttons appear and disappear as needed in the carousel.

- ##### Outfit Items
This section is the same as related, but instead of a star button to render a comparison, it contains an X to remove the productID from the outfit.


- ##### Comparison Modal
The comparison modal renders a table of product characteristics. When one product's characteristic is not present on the other product, the field is left blank. When a characteristic is a boolean value, a checkmark is rendered in the field.



### Ratings & Reviews <a name='reviews'></a>
This section of the application renders customer reviews for the product currently displayed/selected in the overview section.

Sort reviews by relevance, helpfulness and newest.

Load more reviews. Disable button when no more reviews are available to load.

Submit new reviews for products. Do not allow submission when required fields aren’t filled in.

View a general breakdown of customer ratings on comfort, fit and the selected product overall.

Mark a review as helpful or report it to prevent it from showing up in future renders.

-----

### Installation <a name='installation'></a>
- Clone team Wraith's Atelier repo from GitHub to your local machine

- Open code in code editor of your choice(we recommend VS Code)

- npm install the following dependencies / Dev Dependencies:
##### Dependencies
   "@babel/cli"
    "axios"
    "body-parser"
    "css-loader"
    "date-fns"
    "express"
    "file-loader"
    "react"
    "react-dom"
    "react-modal"
    "react-refresh"
    "react-star-ratings"
    "react-testing-library"
    "style-loader"


##### Dev Dependencies
   "@babel/core"
    "@babel/preset-env"
    "@babel/preset-react"
    "@testing-library/jest-dom"
    "@testing-library/react"
    "babel-jest"
    "babel-loader"
    "jest"
    "jest-environment-jsdom"
    "node-mocks-http"
    "nodemon"
    "webpack"
    "webpack-cli"

### Contributors <a name='contributors'></a>
<a href='https://github.com/timdobranski'>Tim Dobranski</a>

<a href='https://github.com/Christina-CS-Foothill'>Christina Hunter</a>

<a href='https://github.com/Mallow-Lin'>Mallow Lin</a>
