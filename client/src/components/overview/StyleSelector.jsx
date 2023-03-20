import React, { useEffect, useState } from "react";
import Style from "./Style.jsx";

const StyleSelector = ({ styles, select, selectedStyle }) => {

  // const selectStyle = (style) => {
  //   select(style)
  //   // setSelectedStyle(style)
  // }

  return (
    <div>
      <div className='div'>
        {selectedStyle.sale_price ? <><span className='originalPrice'>${selectedStyle.original_price}</span><span className='salePrice'>${selectedStyle.sale_price}</span></>
        : <>${selectedStyle.original_price}</>}
      </div>

      <div className='div'><span className='style'>{'STYLE >'}</span>{selectedStyle.name}</div>

      <div className='styleSelector div'>
        {styles.map((style) => {
          if (style.style_id === selectedStyle.style_id) {
            return (
              <div>
                <div className='checkmark'>☑️</div>
                <Style style={style} select={select} key={style.style_id} />
              </div>
            )
          } else {
            return (
              <div>
                <Style style={style} select={select} key={style.style_id} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default StyleSelector;