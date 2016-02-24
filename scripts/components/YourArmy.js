import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class YourArmy extends React.Component{

	

	render() {


		return (
			<div>
				<h2>Your Army</h2>
				{this.props.createDivision()}
				
			</div>
		)
	}
}

export default YourArmy