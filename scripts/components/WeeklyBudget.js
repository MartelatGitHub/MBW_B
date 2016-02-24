import React from 'react';
import autobind from 'autobind-decorator';
import CalculateBudget from './CalculateBudget';

@autobind
class WeeklyBudget extends React.Component{

	onButtonClick() {
		console.log("Hi from weekly budget on button click")
		this.props.calculateTotalCost();
	}

	render() {
		return (
			<div>
				<h2>Weekly Budget </h2><button type="submit" onClick={this.onButtonClick}> Calculate Budget</button>
				<h1> Total Cost for your Army: </h1> <div>{this.props.totalCost}</div>
			</div> 
		)
	}
}

export default WeeklyBudget;