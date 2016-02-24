// import React from 'react';
// import AddFishForm from '../components/AddFishForm.js';
// import autobind from 'autobind-decorator';
// import Firebase from 'firebase';
// const ref = new Firebase('https://death-bunnieswebsite.firebaseio.com/');



// @autobind
// class Inventory extends React.Component {

// 	constructor() {
// 		super();
// 		this.state = {
// 			uid : ''
// 		}
// 	}

// 	authenticate(provider) {
// 		console.dir("Trying to auth with" + provider);
// 		ref.authWithOAuthPopup(provider, this.authHandler);
// 	}

// 	componentWillMount () {
// 		console.log("Checking to see if we can mount");
// 		var token = localStorage.getItem('token');
// 		if(token)
// 		{
// 			ref.authWithCustomToken(token, this.authHandler);
// 		}
// 	}

// 	logout() {
// 		ref.unauth();
// 		localStorage.removeItem('token');
// 		this.setState({
// 			uid: null
// 		});
// 	}

// 	authHandler(err, authData) {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}

// 		localStorage.setItem('token', authData.token);

// 		const storeRef = ref.child(this.props.params.storeId);
// 		storeRef.on('value', (snapshot)=> {
// 			var data = snapshot.val() || {};

// 			if(!data.owner) {
// 				storeRef.set({
// 					owner : authData.uid
// 				});
// 			}
// 			this.setState({
// 				uid : authData.uid,
// 				owner : data.owner || authData.uid
// 			});

// 		});
// 	}


// 	renderLogin(){
// 		return (
// 			<nav className="login">
// 			<h2>Inventory</h2>
// 			<p> Sign in to manage your store's inventory.</p>
// 			<button className="github" onClick={this.authenticate.bind(this, 'github')}> Log In with GitHub </button>
// 			</nav>
// 		)
// 	}

// 	renderInventory(key) {
// 		var linkState = this.props.linkState;
// 		return (
// 				<div className="fish-edit" key={key}> 
// 					<input type="text" valueLink={linkState('fishes.'+ key +'.name')}/>
// 					<input type="text" valueLink={linkState('fishes.'+ key +'.price')}/>
// 					<select valueLink={linkState('fishes.'+key+'.status')}>
// 						<option value="unavailable">Sold Out!</option>
// 						<option value="available">Fresh!</option>

// 					</select>
// 					<textarea valueLink={linkState('fishes.'+key+'.desc')}></textarea>
// 					<input type="text" valueLink={linkState('fishes.'+key+'.image')}/>
// 				<button onClick={this.props.removeFish.bind(null, key)}>Remove Fish</button>
// 				</div>
// 		)
// 	}
// 	render () {
// 		let logoutButton = <button onClick={this.logout}>Log Out!</button>
// 		if(!this.state.uid) 
// 		{
// 			return (
// 					<div>
// 					{this.renderLogin()}
// 					</div>
// 				)
// 		}
// 		if(this.state.uid !== this.state.owner)
// 		{
// 			return (
// 				<div>
// 				<p>Sorry, you aren't the owner of this store.</p>
// 				{logoutButton}
// 				</div>
// 			)
// 		}
// 		return (
// 			<div>
// 			<h2>Inventory</h2>
// 			{logoutButton} 
// 			{Object.keys(this.props.fishes).map(this.renderInventory)}

// 			<AddFishForm {...this.props}/>
// 			<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
// 			</div>
// 		)
// 	}

// }

// Inventory.propTypes = {
// 	addFish : React.PropTypes.func,
// 	loadSamples : React.PropTypes.func,
// 	fishes: React.PropTypes.object.isRequired,
// 	linkState : React.PropTypes.func,
// 	removeFish : React.PropTypes.func,
// }



// export default Inventory; 