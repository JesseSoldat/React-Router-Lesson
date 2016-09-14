import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute, IndexLink } from 'react-router'

import config from './firebaseConfig'

firebase.initializeApp(config);


import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'



render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/about" component={About}/>
			<Route path="/repos" component={Repos}/>
		</Route>
	</Router>

	, document.getElementById('app'))
