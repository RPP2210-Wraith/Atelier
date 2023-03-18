import React, { useEffect } from "react";

const Style = ({ style, selectStyle }) => {

  useEffect(() => {
    if (style['default?']) {
      selectStyle(style);
    }
  }, [])

  return (
    <div>
      <img className='styleButton-img' src={style.photos[0].thumbnail_url} onClick={() => selectStyle(style)}/>
    </div>
  )
}

export default Style;