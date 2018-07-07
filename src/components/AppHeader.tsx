import * as React from 'react';
import '../styles/AppHeader.css';

class AppHeader extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {

		}
	}

	public render() {
		return (
			<div className='app-header'>
				Hi
			</div>
		)
	}
}

export default AppHeader;