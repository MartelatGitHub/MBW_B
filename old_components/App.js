import React from 'react';
import Rebase from 're-base';
var base = Rebase.createClass('https://death-bunnieswebsite.firebaseio.com/');
import Catalyst from 'react-catalyst';
import Header from '../components/Header.js';
import Fish from '../components/Fish.js';
import Order from '../components/Order.js';
import Inventory from '../components/Inventory.js';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';



@autobind
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fishes: {},
			order: {},
		}
	}
	componentDidMount(){
		base.syncState(this.props.params.storeId + '/fishes', {
			context: this,
			state: 'fishes'
		});
		var localStorageRef = localStorage.getItem('order-' + this.props.params.storeId);

		if(localStorageRef)
		{
			this.setState({
				order : JSON.parse(localStorageRef)
			})
		}
	}
	componentWillUpdate(nextProps, nextState){
		localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.order));
	}
	addToOrder(key) {
		this.state.order[key] = this.state.order[key] + 1 || 1;  
		this.setState({ order : this.state.order });
	}
	removeFromOrder(key) {
		delete this.state.order[key];
		this.setState({
			order : this.state.order
		})
	}
	addFish(fish) {
		var timestamp = (new Date()).getTime();
		this.state.fishes['fish-' + timestamp] = fish;
		this.setState({ fishes : this.state.fishes });
	}
	removeFish(key) {
		if(confirm("Are you sure that you wish to confirm with this statement that a woodchuck can indeed chuck 10 logs of wood on any average given day, regardless of pay incentives, or any other such motivaters or dismotivators?"))
			{
						this.state.fishes[key] = null;
				this.setState({
					fishes : this.state.fishes
				});
			}
	}
	loadSamples() {
		this.setState({
			fishes : require('../sample-fishes.js')
		});
	}
	renderFish(key) {
		return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
	}
	render() {
		return (
			<div className="catch-of-the-day">
			<div className="menu">
			 <Header tagline="Fresh Seafood Market"/>
			 	<ul className="list-of-fishes">
			 	{Object.keys(this.state.fishes).map(this.renderFish)}
			 	</ul>
			</div>
			 <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
			 <Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} linkState={this.linkState.bind(this)} removeFish={this.removeFish} {...this.props}/>
			</div>
		)
		
	}
}
reactMixin.onClass(App, Catalyst.LinkedStateMixin);


export default App;