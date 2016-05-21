import React from 'react';
import autobind from 'autobind-decorator';



const styles={

	createdArmy:{

		display: "flex",
		flexDirection: "row",

	},

	divisionListing:{

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",

	}

}

@autobind
class YourArmy extends React.Component{

	
	render() {


		return (
			<div  style={styles.createdArmy}>
				<div>Your Army</div>
				<div style={styles.divisionListing}>{this.props.createDivision(this, this.props.open)}</div>
				
			</div>
		)
	}
}

export default YourArmy