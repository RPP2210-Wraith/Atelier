const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const overview = require('./overview.js');
const questionAnswer = require('./question-answer.js');
const ratingsReviews = require('./ratings-reviews');
const relatedItemsComparison = require('./related-items-comparison.js');
const getOutfitItems = require('./outfit.js');
const logInteraction = require('./interactions');


const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser());

app.get('/overview', (req, res) => {
  overview.getProduct(req, res)
})

app.post('/cart', (req, res) => {
  overview.postCart(req, res)
})

app.get('/relatedItems', relatedItemsComparison);

app.get('/outfitItems', getOutfitItems)

app.post('/interactions', logInteraction)

app.get('/reviews', (req, res) => {
  ratingsReviews.getReviews(req, res);
})
app.get('/reviews/meta', (req, res) => {
  ratingsReviews.getReviewsMetaData(req, res);
})

app.put('/reviews/:review_id/helpful', (req, res) => {
  ratingsReviews.markReviewHelpful(req, res);
});

app.put('/reviews/:review_id/report', (req, res) => {
  ratingsReviews.reportReview(req, res);
});




app.listen(port, () => {
  console.log('Listening on port: ', port)
})