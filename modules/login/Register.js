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

	componentWillMount(){
		firebase.auth().onAuthStateChanged(function(user){
			if(user){
				browserHistory.push('/');
			}
		})
	},

	onChangeEmail(e){
		this.setState({email: e.target.value});
	},

	onChangePass(e){
		this.setState({pass: e.target.value});
	},

	handleSubmit(e){
		e.preventDefault();
		let email = this.state.email;
		let password = this.state.pass;
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	},

	render(){
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<h3>Register</h3>
				<input onChange={this.onChangeEmail}
					value={this.state.email}
					type="text"
					placeholder="Email"
					required />
				<input onChange={this.onChangePass}
					value={this.state.pass}
					type="text"
					placeholder="Email"
					required />
				<button>Submit</button>
			</form>
			<NavLink to="/login">Login</NavLink>
		</div>

			)
	}
})