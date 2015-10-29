
'use strict'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'


const App = React.createClass({

	render: function() {
		return(
			<p>HELLO</p>
		);
	}

});


ReactDOM.render((<Router>
				<Route path="/" component={App}>
					
				</Route>
			</Router>
			), document.getElementById("content"));