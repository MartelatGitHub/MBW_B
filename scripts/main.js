import React from 'react';
import ReactDOM from 'react-dom';
import Interface from './components/Interface.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// var Catalyst = require('react-catalyst');
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

// import NotFound from './components/NotFound.js';
// import StorePicker from './components/StorePicker.js';
// import routes from './components/routes.js';
// import App from './components/App.js';

class Main extends React.Component{

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme} >

				<Interface />

			</MuiThemeProvider>
		);
	}

}















ReactDOM.render(<Main />, document.querySelector('#main'));