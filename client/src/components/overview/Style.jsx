import React, { useEffect } from "react";

const Style = ({ style, select }) => {

  useEffect(() => {
    if (style['default?']) {
      select(style);
    }
  }, [])

  return (
    <div>
      <img className='styleButton-img' src={style.photos[0].thumbnail_url} onClick={() => select(style)}/>
    </div>
  )
}

export default Style;