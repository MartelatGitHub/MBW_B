import React from 'react';
import autobind from 'autobind-decorator';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
	divisionContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: 25,
	},
	divisionElement: {
		height: 50,

	},
}


@autobind
class DivisionManagement extends React.Component{
	
	

	


	render() {
		return (
			<div style={styles.divisionContainer}>
			{/*  
				DIVISION MANAGEMENT
				WILL NEED 
					FACTION 
					TROOP NAME (NOT EXACTLY SURE HOW TO CHANGE THIS TO A QUERY. 
						MAYBE USE CONCAT AND TOUPPERCASE()?)
					TROOP COUNT
					MAYBE DYNAMICALLY LOADED DATA OF CURRENT DENARS PER WEEK PER 1 UNIT AS NAME IS BEING ENTERED
					GARRISONED/INPARTY OPTION
					MAYBE CUSTOM NAME OF TROOP DIVISION - WOULD GIVE IT A LITTLE FLARE 

			  */}
			  {/*DropDownlist for factions */}
			  <DropDownMenu
			  	autoWidth={true}
			  	onChange={this.props.handleChange1}
			  	value={this.props.faction}
			  	style={styles.divisionContainer}
			  	ref="faction"
			  > 
				  	<MenuItem value="Nord" primaryText="Nord" />
				  	<MenuItem value="Rhodok" primaryText="Rhodok" />
				  	<MenuItem value="Swadia" primaryText="Swadia" />
				  	<MenuItem value="Khergit Khanate" primaryText="Khergit Khanate" />
				  	<MenuItem value="Sarranid Sultanate" primaryText="Sarranid Sultanate" />
				  	<MenuItem value="Vaegir" primaryText="Vaegir" />
			  </DropDownMenu>

			  <TextField onChange={this.props.handleChange2} style={styles.divisionElement} underlineShow={true} errorText="This field is required" hintText="Enter the Game Name of your troop" />
			  <br />

			  <DropDownMenu
			  	autoWidth={true}
			  	onChange={this.props.handleChange3}
			  	value={this.props.position}
			  	style={styles.divisionContainer}
			  	ref="position"
			  >
				  <MenuItem value="INPARTY" primaryText="In-party" />
				  <MenuItem value="GARRISONED" primaryText="Garrisoned" />
			  </DropDownMenu>

			  <TextField onChange={this.props.handleChange4} style={styles.divisionElement} underlineShow={true} hintText="Enter your own custom name for your division (optional)" />
			  <br />

			  <TextField onChange={this.props.handleChange5} style={styles.divisionElement} underlineShow={true} hintText="Enter the number of troops in this division" type="number" />
			  <br />

			</div>
		)
	}
}

export default DivisionManagement;