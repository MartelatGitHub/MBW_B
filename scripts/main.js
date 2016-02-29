import React from 'react';
import ReactDOM from 'react-dom';
import Interface from './components/Interface.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// var Catalyst = require('react-catalyst');


// import NotFound from './components/NotFound.js';
// import StorePicker from './components/StorePicker.js';
// import routes from './components/routes.js';
// import App from './components/App.js';

















ReactDOM.render(<Interface />, document.querySelector('#main'));