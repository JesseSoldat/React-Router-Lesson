import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
	render(){
		return(
			<div>
				<h4>Repos</h4>
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

				{this.props.children}

			</div>
			)
	}
})