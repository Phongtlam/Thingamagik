import * as React from 'react';
import '../styles/OverView.css';

interface IInterview {
	name: string;
	date: string;
}

interface ITopProspect {
	name: string;
	role: string;
}

interface IOverViewState {
	interviews: IInterview[];
	topProspects: ITopProspect[];
}

class OverView extends React.Component<any, IOverViewState> {
	constructor(props) {
		super(props);
		this.state = {
			interviews: [
				{
					name: 'OpenAI - Dota 2 Consultant',
					date: '2018-06-30'
				},
				{
					name: 'TSM - Product Marketing',
					date: '2018-07-04'
				}
			],
			topProspects: [
				{
					name: 'Zygna',
					role: 'Product Marketing'
				},
				{
					name: 'Google',
					role: 'Quantitative Marketer'
				},
				{
					name: 'Cruise',
					role: 'VR Remote Car Driver'
				},
				{
					name: 'Waymo',
					role: 'Route Hallucinator'
				}
			]
		};
	}

	public render() {
		return (
			<main className="overview-container">
				<div className="overview-item">
					<h3>Interview</h3>
						{
							this.state.interviews.map( interview => (
								<div key={interview.name}>
									<div>{interview.name}</div>
									<div>{interview.date}</div>
								</div>
							))
						}
				</div>
				<div className="overview-item">
					<h3>Top Prospects</h3>
					{
						this.state.topProspects.map( prospect => (
							<div key={prospect.name + prospect.role}>
								<div>{prospect.name}</div>
								<div>{prospect.role}</div>
							</div>
						))
					}
				</div>
			</main>
		);
	}
}

export default OverView;