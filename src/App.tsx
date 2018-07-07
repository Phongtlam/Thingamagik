import * as React from 'react';
import 'normalize.css';
import './App.css';
import { withRouter } from 'react-router-dom';
import AppSidebar from './components/AppSidebar';
import Main from './components/Main';

class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<div className="App">
				<AppSidebar />
				<Main />
			</div>
		);
	}

	public componentDidMount() {
		this.props.history.push('/overview');
	}
}

export default withRouter(App);
