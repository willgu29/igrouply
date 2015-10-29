import React, { Component } from 'react';
import { Router, Link, Route} from 'react-router';


var iGrouplyHeaderStyle = {
	fontFamily: "Avenir Medium",
	fontSize: "30px",
	fontStyle: "oblique",
	color: "white",
	display: "inline",
	marginLeft: "10",
}

var ulStyle = {
	display: "inline",
	float: "right",
    listStyleType: "none",
    marginTop: "14",
    padding: "0"
}
var liStyle = {
	color: "hsl(0, 0%, 85%)",
    display: "inline",
    marginRight: "20"
}

var liStyleSelected = {
	color: "white",
	display: "inline",
	marginRight: "20"
}

var aStyle = {
	color: "inherit",
	textDecoration: "none"
}


export default class NavBar extends Component {
	render() {
		return(
			<div id="navBar">
				<h1 style={iGrouplyHeaderStyle}>iGrouply</h1>
				<ul style={ulStyle}>
					<li style={liStyle} ><Link style={aStyle} to="/">Home</Link></li>
				</ul>
			</div>
		);
	}
}