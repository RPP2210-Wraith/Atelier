import React, { useEffect, useState } from "react";

const Style = ({ Default, style, styles, select, thumbNail }) => {

  useEffect(() => {

    if (Default) {
      select(style);
    } else (
      select(styles[0])
    )
  }, [styles])


  return (
    <div>
      <img className='styleButton-img' data-testid='styleButton-img' src={thumbNail} onClick={() => select(style)}/>
    </div>
  )
}

export default Style;