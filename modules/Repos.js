import React from 'react'
import { Link, browserHistory } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
	handleSubmit(e){
		e.preventDefault()
			const userName = e.target.elements[0].value;
			const repo = e.target.elements[1].value;
			const path = `/repos/${userName}/${repo}`
			console.log(path);
			browserHistory.push(path);
			
		
	},

	render(){
		return(
			<div>
				<h4>Repos</h4>
				<hr/>

				<ul>
					<li>
						<NavLink to="/repos/jesse/jlab">
							Jlab
						</NavLink>
					</li>
					<li>
						<NavLink to="/repos/nate/nlab">
							Nlab
						</NavLink>
					</li>
				
					 
       
				</ul>
				 	<form onSubmit={this.handleSubmit}>
			              <input type="text" placeholder="userName"/>
			              <input type="text" placeholder="repo"/>
			              <button type="submit">Go</button>
           			  </form>

				{this.props.children}

			</div>
			)
	}
})