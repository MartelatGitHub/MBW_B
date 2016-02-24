import React from 'react';
// import WeeklyBudget from './WeeklyBudget.js';
// import TroopChoices from './TroopChoices.js';
import autobind from 'autobind-decorator';
import CreateTroopDivision from './CreateTroopDivision';
import YourArmy from './YourArmy';
import WeeklyBudget from './WeeklyBudget';
import injectTapEventPlugin from 'react-tap-event-plugin';



// REMEMBER TO USE THE FOLLOWING PATH TO ACCESS MATERIAL-UI COMPONENTS --->  'material-ui/lib/raised-button'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


@autobind
class Interface extends React.Component {
constructor() {
	super();
	this.state = {
			troops: [],
			troopkeys: [],
			count : [],
			division: [],
			troopDPW: [],
			totalCost: 0
		}
	}

	componentDidMount() {
		this.setState({ 
			troopDPW : require('../troopDPW.js')
		})
	}

	addTroop(troopName, troopDPW, troopCount, troopStation, troopId) {
		var troopTypeGrouping = [troopName, troopDPW.costPW, troopCount, troopStation, troopId];
		var checkForDuplicateTroopKeys = this.state.troopkeys.filter(
			function(x) {
				return x === troopId;
			}
		)
		if(checkForDuplicateTroopKeys.length > 0) {alert("You may not add more than one troop division with the same name and garrison positioning. Please Try Again"); return;}
		this.state.troops[this.state.troops.length] = troopTypeGrouping;
		this.createTroopDivision();
		this.state.troopkeys[this.state.troopkeys.length] = troopId;
		this.state.count[troopId] = troopCount

	}

	createTroopDivision() {

		this.setState({
			division: [this.state.troops]
		});

	}


	createDivision(){
		// ------>>>>>> USE ANOTHER VARIABLE (WITH MAP???) TO DELINEATE STATE TO BE USED BY WEEKLY BUDGET <<<<<------- // 


		if (this.state.division[0] !== undefined)
		{


			let division = this.state.division[0].map(
			function(troopGroup) {
				if (troopGroup[3] === "garrisoned") {
					var stationing = 2;
				}
				else {
					var stationing = 1;
				}
				 
				var divisionCost = troopGroup[1] * troopGroup[2] / stationing;
				return (
					<div key={troopGroup[4]}>
						<hr></hr>
						<li>{troopGroup[0]}</li>
						<li>Denars per Week: {divisionCost}</li>
						<li>Number of {troopGroup[0]}s: {troopGroup[2]}</li>
						<li>{troopGroup[3]}</li>
						<hr></hr>
					</div>
				)
			}
		);
		return division; 
	   }

	}

	calculateTotalCost() {
		let cost = 0;
		let mappedTotalCost = this.state.division[0].map(
			function(troopGroup) {
				if (troopGroup[3] === "garrisoned") {
					var stationing = 2; 
				}
				else {
					var stationing = 1;
				}
				var divisionCost = troopGroup[1] * troopGroup[2] / stationing;
				cost+=divisionCost;

			}
		)
		this.setState({
			totalCost: this.state.totalCost+cost
		})

	}
	
	render() {
		
		return (
			<div>
				<CreateTroopDivision troopDPW = {this.state.troopDPW}division={this.state.division} createTroopDivision = {this.createTroopDivision} addTroop={this.addTroop} troops = {this.state.troops} count = {this.state.count}/>

				<YourArmy createDivision = {this.createDivision} division = {this.state.division} createTroopDivision = {this.createTroopDivision} count = {this.state.count} troops={this.state.troops}/>

				<WeeklyBudget calculateTotalCost={this.calculateTotalCost} division = {this.state.division} totalCost = {this.state.totalCost}/>
				
			</div>
		)
	}

}













export default Interface;



















































