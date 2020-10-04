import React from "react";

export default class StatusFormatter extends React.Component {
	render() {
		return(
			<span className={this.props.status.toLowercase()}>
				{this.props.status}
			</span>
		)
	}
}