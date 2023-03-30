import React from 'react';
import axios from 'axios';

const InteractionTracking = (props) => {
  const Widget = props.Widget;
  const widgetName = props.widgetName;

  console.log('widget: ', Widget)
  return (function(props) {

    function handleInteraction(event) {
      var element = event.target.outerHTML;
      console.log('handler run');
      const interaction = {
        component: widgetName,
        element: element,
        time: new Date().toISOString()
      };
      console.log('interaction object: ', interaction);

      axios.post('/interactions', interaction)
      .then((response) => {
        console.log('Successfully posted interaction')
      })
      .catch((err) => {
        console.log('Error posting interaction: ', err)
      })
    }
    return (
      <div onClick={handleInteraction}>
        <Widget {...props} />
      </div>
    );
  })()
}

export default InteractionTracking;