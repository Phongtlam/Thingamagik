import * as React from 'react';

class Application extends React.Component {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<main>
				<div>Location:</div>
				<div>Desired Job Title:</div>
				<div>Preferred Industry:</div>
			</main>
		);
	}
}

export default Application;