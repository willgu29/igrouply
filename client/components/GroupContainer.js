import React, { Component } from 'react';

import GroupCard from "./GroupCard";

export default class GroupContainer extends Component {

	componentDidMount() {
		//TODO: get groups -> this.props.params.categoryID
	}

	render() {
		return(
			<div>
				<GroupCard name="Bruin App Builders" />
				<GroupCard name="InDe" />

			</div>
		);
	}
}