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
  }
}

export default helpers;