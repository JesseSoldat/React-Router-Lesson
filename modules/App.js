import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
    	<div>
    		<ul>
    			<li><NavLink to="/about">About</NavLink></li>
    			<li><NavLink to="/repos">Repos</NavLink></li>
    		</ul>
    		<h2>{this.props.children}</h2>
    	</div>


    	)
  }
})
