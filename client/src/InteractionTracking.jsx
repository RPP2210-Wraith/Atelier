import React from 'react';
import axios from 'axios';

const InteractionTracking = (widget, widgetName) => {


  return function(props) {
    function handleInteraction(element) {
      const interaction = {
        component: componentName,
        element: element,
        time: new Date().toISOString()
      };

      axios.post({'/interactions', interaction})
        .then((response) => {
          console.log('Successfully posted interaction')
        })
        .catch((err) => {
          console.log('Error posting interaction: ', err)
        })

      }
    }
}