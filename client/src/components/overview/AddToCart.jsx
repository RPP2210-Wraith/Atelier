import React, { useEffect, useState } from 'react';

const AddToCart = ({ skus, addCart, addToOutfit, productID, styleID}) => {

  const [stocks, setStocks] = useState([]);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [like, setLike] = useState(false)

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);

  console.log('size', size)
  console.log('stockQuantity', stockQuantity)
  console.log('quantity', quantity)

  useEffect(() => {
    setStocks(Object.values(skus));
  }, [])

  const handleSize = (index) => {
    setSize(stocks[index].size)
    setStockQuantity(stocks[index].quantity);
    setQuantity(1)
  }

  const handleLike = () => {
    setLike(true);
    addToOutfit(productID, styleID);
  }

  return (
    <div>
      <div className='flex'>
        <div>
          {!stocks || (stocks.length === 1 && !stocks[0].size) ?
            <select><option hidden>OUT OF STOCK</option></select>
          : <select onChange={(e) => handleSize(e.target.value)}>
              <option hidden>Select Size</option>
              {stocks.map((stock, index) => (
                <option value={index} key={stock.size}>{stock.size}</option>
              ))}
            </select>
          }
        </div>

        <div>
          {!size ? <select><option hidden>-----</option></select>
          :
          <select onChange={(e) => {setQuantity(e.target.value)}}>
            {stockQuantity <= 15 ?
              Array(stockQuantity).fill(0).map((_, i) => {
                return <option value={i + 1} key={i + 1}>{i + 1}</option>
              }) :
              Array(15).fill(0).map((_, i) => {
                return <option value={i + 1} key={i + 1}>{i + 1}</option>
              })
            }
          </select>
          }
        </div>
      </div>
      <div className='flex'>
        <div>
          <button className='AddCartButton' onClick={() => addCart(size, quantity)} disabled={!size} >Add to Cart  ➕</button>
        </div>
        <div>
          {like ? <button className='likeBotton'>❤️</button>
          : <button className='likeBotton' onClick={handleLike}>⭐</button>}
        </div>
      </div>
   </div>

  )
}

export default AddToCart;