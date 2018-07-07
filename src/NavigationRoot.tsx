import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'src/store';
import App from './App';

const store = configureStore({});

class NavigationRoot extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
	}
}

export default NavigationRoot;