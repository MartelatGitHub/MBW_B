import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import autobind from 'autobind-decorator';
import DivisionManagement from './CreateTroopDivision';



const styles={
	dialogBox: {
		width: '33.33333333%',
		maxWidth: 'none',
		marginLeft: '33.333333333%',
	}
}

@autobind
class YourArmy extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			faction: "Nord",
			troopName: "",
			position: "INPARTY",
			customName: "",
			troopCount: 0,
			divisions: [],
		}
		
	}
	
	handleOpen() {
    	this.setState({open: true});
  	};

  	handleClose() {
  		console.log(this);
    	this.setState({open: false});
  	};
  	addTroopDivision() {
  		var division = {
  			faction: this.state.faction,
  			troopName: this.state.troopName,
  			position: this.state.position,
  			customName: this.state.customName,
  			troopCount: this.state.troopCount,
  		}
  		this.setState({divisions: [...this.state.divisions, division]})
  		this.setState({open: false})
  	}
  	handleChange1(event, index, value) {
		this.setState({faction: value})
	};
	handleChange2(event) {
		this.setState({troopName: event.target.value})
	};
	handleChange3(event, index, value) {
		this.setState({position: value})
	
	};
	handleChange4(event, index, value) {
		this.setState({customName: event.target.value})
	};
	handleChange5(event, index, value) {
		this.setState({troopCount: event.target.value})
	};

  render() {
  	console.log(this.state);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.addTroopDivision}
      />,
    ];


		return (
			<div >
				<RaisedButton label="Division Management" onTouchTap={this.handleOpen} />
		        <Dialog
		          title="Create a new Troop Division or Edit an existing one"
		          actions={actions}
		          modal={true}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		          autoScrollBodyContent={true}
		          style={styles.dialogBox}
		        >
		        	<DivisionManagement 
		        		faction={this.state.faction}
		        		troopName={this.state.troopName}
		        		position={this.state.position}
		        		customName={this.state.customName}
		        		troopCount={this.state.troopCount}
		        		handleChange1={this.handleChange1}
		        		handleChange2={this.handleChange2}
		        		handleChange3={this.handleChange3}
		        		handleChange4={this.handleChange4}
		        		handleChange5={this.handleChange5}
		        	/>
		        </Dialog>
			</div>
		)
	}
}

export default YourArmy