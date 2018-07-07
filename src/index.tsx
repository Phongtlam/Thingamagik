import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NavigationRoot from './NavigationRoot';

ReactDOM.render((
	<NavigationRoot />
), document.getElementById('root') as HTMLElement);
registerServiceWorker();
