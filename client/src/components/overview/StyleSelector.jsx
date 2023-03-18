import React, { useEffect } from "react";

const StyleSelector = ({ style, select }) => {

  useEffect(() => {
    if (style['default?']) {
      select(style);
    }
  }, [])

  return (
    <div>
      <button className='styleButton' onClick={() => select(style)}>
        <img className='styleButton-img' src={style.photos[0].thumbnail_url} />
      </button>
    </div>
  )
}

export default StyleSelector;