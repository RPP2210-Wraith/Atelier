const { TOKEN } = require('../config.js');
const axios = require('axios');

const  API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

const logInteraction = (req, res) => {
  const interaction = JSON.stringify(req.body);

  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${API}/interactions`,
    headers: {
      'Authorization': TOKEN,
      // 'User-Agent': 'request',
      'Content-Type': 'application/json',
    },
    data: interaction
  }

  axios(config)
    .then((response) => {
      console.log('Interaction Logged Successfully');
      res.status(201).send();
    })
    .catch((err) => {
      console.log('Error in Server > DB POST request: ', err)
      res.status(422).send('Error in Server > DB POST request: ', err)
    })
}


module.exports = logInteraction;