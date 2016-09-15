import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({

	componentWillMount: function(){

		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {

		  } else {
		    browserHistory.push('/login')
		    
		  }
		});

	},

	render(){
		return(
			<div>
				<h3>React Fire</h3>
				<hr/>
			</div>
			)
	}
})