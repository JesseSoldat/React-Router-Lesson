import React from 'react'
import { browserHistory } from 'react-router'
import NavLink from '../NavLink'

export default React.createClass({

	getInitialState(){
		return {
			email: '',
			pass: ''
		}
	},
	componentWillMount: function(){

		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    browserHistory.push('/')
		  } else {
		    // No user is signed in.
		  }
		});

	},

	onChangeEmail: function(e){
		this.setState({email: e.target.value});
	},

	onChangePass: function(e){
		this.setState({pass: e.target.value});
	},

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.email);
		console.log(this.state.pass);
		let email = this.state.email;
		let password = this.state.pass;

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			  var errorCode = error.code;
			  var errorMessage = error.message;
		});

	},
	render(){
		return (
		<div>
			<h3>Login</h3>
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.email} 
						onChange={this.onChangeEmail}
						type="text" 
						placeholder="Email" 
						required />

				<input value={this.state.pass}
						onChange={this.onChangePass} 
						type="text" 
						placeholder="Password" 
						required />
				<button>Login</button>
			</form>
			<NavLink to="/register">Register</NavLink>
		</div>
		)
	}
})