import React from 'react';
// import WeeklyBudget from './WeeklyBudget.js';
// import TroopChoices from './TroopChoices.js';
import autobind from 'autobind-decorator';
import CreateTroopDivision from './CreateTroopDivision';
import YourArmy from './YourArmy';
import WeeklyBudget from './WeeklyBudget';

// ------->>>>>>> IMPORTING COMPONENTS FROM MATERIAL-UI <<<<<<<-------
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import Popover from 'material-ui/lib/popover/popover';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Dialog from 'material-ui/lib/dialog';

const troopCost = require('../scripts/troopDPW.js');

const styles = {

	
}


@autobind
class Interface extends React.Component {
constructor() {
	super();
	this.state = {
			
		}
		console.log(troopCost);
	}

	


	render() {
		return (
			<div style={}>

				{/*<CreateTroopDivision />
				<YourArmy />
				<WeeklyBudget />*/}
			</div>
		)
	}

}













export default Interface;



















































