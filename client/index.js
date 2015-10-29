import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route} from 'react-router';


import App from './App';



 ReactDOM.render(<Router>
 					<Route name="app" path="/" component={App}>
		
					</Route>
 				</Router>, document.getElementById("root"));