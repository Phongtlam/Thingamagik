import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/AppSidebar.css';

class AppSidebar extends React.Component {
	private navigationGroup = [
		{
			name: 'Overview',
			route: 'overview',
			callback: () => { console.log('overview'); }
		},
		{
			name: 'Application',
			route: 'application',
			callback: () => { console.log('overview'); }
		},
		{
			name: 'Targetting',
			route: 'targetting',
			callback: () => { console.log('overview'); }
		},
		{
			name: 'Setting',
			route: 'setting',
			callback: () => { console.log('overview'); }
		}
	];

	constructor(props) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<div className="app-sidebar-container">
				<div className="navigation-group">
					{
						this.navigationGroup.map( nav => {
							return (
								<NavLink
									key={nav.name}
									className="navigation-link"
									to={`/${nav.route}`}
									activeClassName="active"
								>{nav.name}</NavLink>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default AppSidebar;