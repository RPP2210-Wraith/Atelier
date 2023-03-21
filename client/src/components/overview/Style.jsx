import React, { useEffect, useState } from "react";

const Style = ({ Default, style, select, thumbNail }) => {
console.log(Default)
  const [image, setImage] = useState('');

  useEffect(() => {

    if (Default) {
      select(style);
    }
  }, [])


  return (
    <div>
      <img className='styleButton-img' data-testid='styleButton-img' src={thumbNail} onClick={() => select(style)}/>
    </div>
  )
}

export default Style;