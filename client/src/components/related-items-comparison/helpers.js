import axios from 'axios';

const helpers = {

  incrementCards: (setter) => {
    setter((currentIndex) => {
      return currentIndex + 1;
    })
  },
  decrementCards: (setter) => {
    setter((currentIndex) => {
      return currentIndex - 1;
    })
  },
  getRelatedItems: (setRelated, setLoading) => {
    axios.get('/relatedItems', {
      params: {
        productID: 71699
      }
    })
    .then((response) => {
      setRelated(response.data);
    })
    .then(() => {
      setLoading(false);
    })
  }

}

export default helpers;