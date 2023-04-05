import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';

const CustomRouter = () => {
  const [productID, setProductID] = useState(71699);
  const [styleID, setStyleID] = useState(444228);


  // Your logic to set the productId state variable



  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/:productID' element={<App productID={productID.toString()} setProductID={setProductID} styleID={styleID} setStyleID={setStyleID} />}

        />
      </Routes>

    </BrowserRouter>
  );
};

export default CustomRouter;

