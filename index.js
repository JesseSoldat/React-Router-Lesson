import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'

import config from './firebaseConfig'

firebase.initializeApp(config);


import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Todos from './modules/todo/Todos'



render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/repos" component={Repos}>
				<Route path="/repos/:userName/:repoName" component={Repo} />
			</Route>
			<Route path="/todos" component={Todos}/>
		</Route>
	</Router>

	, document.getElementById('app'))
