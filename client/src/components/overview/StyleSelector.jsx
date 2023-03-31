import React from "react";
import Style from "./Style.jsx";

const StyleSelector = ({ styles, select, selectedStyle }) => {

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
              <div key={style.style_id}>
                <div id='checkmark'>☑️</div>
                <Style Default={style['default?'] ? true : false} style={style} thumbNail={style.photos[0].thumbnail_url} select={select} />
              </div>
            )
          } else {
            return (
              <div key={style.style_id}>
                <Style Default={style['default?'] ? true : false} style={style} thumbNail={style.photos[0].thumbnail_url} select={select} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default StyleSelector;