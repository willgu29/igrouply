import React, { Component } from 'react';
import { Router, Link, Route} from 'react-router';


export default class Categories extends Component {

	render() {
		return(
			<div>
				<Link to="/groups/technology">Technology</Link>
				<Link to="/groups/other">Other</Link>
			</div>
		);
	}
}