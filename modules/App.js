import React from 'react'
import {Link, IndexLink } from 'react-router'
import NavLink from './NavLink'

import Home from './Home'


export default React.createClass({

    logout(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }, function(error) {
          // An error happened.
        });
    },

  render() {
    return (
    	<div>
    		<ul id="navLinks">
    			<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
    			<li><NavLink to="/about">About</NavLink></li>
    			<li><NavLink to="/repos">Repos</NavLink></li>
                <li><NavLink to="/todos">Todos</NavLink></li>
                <li onClick={this.logout}><a href="#">Logout</a></li>
    		</ul>
    		<hr/>
    		<h2>{this.props.children}</h2>
    	</div>


    	)
  }
})
