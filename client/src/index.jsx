import React from 'react';
import ReactDOM from 'react-dom';
import CustomRouter from './Router.jsx';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';

//ReactDOM.render(<App />, document.getElementById('root'));


const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(<CustomRouter />);

Modal.setAppElement('#root')