import React from 'react';
// import WeeklyBudget from './WeeklyBudget.js';
// import TroopChoices from './TroopChoices.js';
import autobind from 'autobind-decorator';
import DivisionManagement from './CreateTroopDivision';
import YourArmy from './YourArmy';
import WeeklyBudget from './WeeklyBudget';

// ------->>>>>>> IMPORTING COMPONENTS FROM MATERIAL-UI <<<<<<<-------
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Slider from 'material-ui/Slider';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';


const troopCost = require('../troopDPW.js');

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
														//COMMENT DESCRIPTION OF WIREFRAME//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// APPLICATION WILL HAVE THREE MAIN DISPLAY GROUPINGS: DISPLAYING THE DIALOG FOR ADDING A NEW TROOP DIVISION OR EDITING A CURRENT ONE, VIEWING THE 
//CURRENT ARMY YOU HAVE CREATED THUS FAR, AND THE CURRENT WEEKLY COST BREAKDOWN YOU HAVE ||||||| ADD NEW DIVISION --> WILL USE MATERIAL-UI DROPDOWN DIALOGUE
// VIEW CURRENT ARMY AND VIEW CURRENTY WEEKLY BUDGET BREAKDOWN --> EACH WILL BE ITS OWN MATERIAL-UI TAB. VIEW CURRENT ARMY WILL HAVE THE FUNCTIONALITY 
// TO CALL DOWN THE ADD NEW DIVISION DIALOG 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@autobind
class Interface extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		slideIndex: 0,
		troops: [],

		}
	}

handleChanges(value) {
    this.setState({
      slideIndex: value,
    });
  };


	render() {
		return (
			<div>
				<Tabs 
					onChange={this.handleChanges}
					value={this.state.slideIndex}
				>
					<Tab label="Saved Breakdowns" value={0} />
					<Tab label="Your Army" value={1} />
					<Tab label="Weekly Budget Breakdown" value={2} />
				</Tabs>
				<SwipeableViews 
					index={this.state.slideIndex}
					onChangeIndex={this.handleChange}
				>
					<div>Saved Breakdowns coming soon...</div>
					<YourArmy troops={this.state.troops} style={styles.slide}/>
					<WeeklyBudget style={styles.slide}/>
				</SwipeableViews>

			</div>
		)
	}

}













export default Interface;



















































