import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class CreateTroopDivision extends React.Component{
	onButtonClick() {

		let troopName = this.refs.troopName.value;
		let troopCount= this.refs.troopNumber.value;
		let troopStation = this.refs.stationing.value;
		let troopKey = troopName.toUpperCase() + troopStation.toUpperCase();
		let troopDPW = this.props.troopDPW.troops[troopKey];
		this.props.addTroop(troopName, troopDPW, troopCount, troopStation, troopKey);
		
		
	}

	render() {
		return (
		<div><input type="text" ref="troopName" required/>
		<input type="number" ref="troopNumber" required/>
		<select name="select" ref="stationing">
			<option value="garrisoned"> garrisoned</option>
			<option value="inparty"> in-party</option>
		</select>
		 <button type="submit" onClick={this.onButtonClick}> Add </button>
		 </div>
		)
	}
}

export default CreateTroopDivision;