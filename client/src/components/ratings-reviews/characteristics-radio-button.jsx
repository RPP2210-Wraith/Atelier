import React from 'react';

const CharacterisitcsRadioButton = ({ title, characteristics, setCharacteristics, descriptions }) => {

  const characteristicsRadioButtonHandler = (e) => {
    if (e.target.name === 'Size') {
      characteristics.Size = parseInt(e.target.value);
    } else if (e.target.name === 'Width') {
      characteristics.Width = parseInt(e.target.value);
    } else if (e.target.name === 'Comfort') {
      characteristics.Comfort = parseInt(e.target.value);
    } else if (e.target.name === 'Quality') {
      characteristics.Quality = parseInt(e.target.value);
    } else if (e.target.name === 'Length') {
      characteristics.Length = parseInt(e.target.value);
    } else {
      characteristics.Fit = parseInt(e.target.value);
    }
    setCharacteristics(characteristics);
  }

  return (
    <div>
      <label>{title}</label>
      <br></br>
      <input name={title} type='radio' value='1' onClick={characteristicsRadioButtonHandler}></input>
      <label>{'1: ' + descriptions[0] + '  '}</label>
      <br></br>
      <input name={title} type='radio' value='2' onClick={characteristicsRadioButtonHandler}></input>
      <label>{'2: ' + descriptions[1] + '  '}</label>
      <br></br>
      <input name={title} type='radio' value='3' onClick={characteristicsRadioButtonHandler}></input>
      <label>{'3: ' + descriptions[2] + '  '}</label>
      <br></br>
      <input name={title} type='radio' value='4' onClick={characteristicsRadioButtonHandler}></input>
      <label>{'4: ' + descriptions[3] + '  '}</label>
      <br></br>
      <input name={title} type='radio' value='5' onClick={characteristicsRadioButtonHandler}></input>
      <label>{'5: ' + descriptions[4] + '  '}</label>
      <br></br>
      <br></br>
    </div>
  );
}

export default CharacterisitcsRadioButton;