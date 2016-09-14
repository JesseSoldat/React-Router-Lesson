import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import { Router, Rout, hashHistory, browserHistory, Link, IndexRoute, IndexLink } from 'react-router'

import App from './modules/App'



render(<App/>, document.getElementById('app'))
