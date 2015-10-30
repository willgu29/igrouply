import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route} from 'react-router';
import { IndexRoute } from 'react-router'


import App from './App';
import GroupContainer from "./components/GroupContainer";
import Categories from "./components/Categories";


 ReactDOM.render(<Router>
 					<Route name="app" path="/" component={App}>
 					 	<IndexRoute component={Categories} />
						<Route name="groups" path="groups/:categoryID" component={GroupContainer} />
					</Route>
 				</Router>, document.getElementById("root"));