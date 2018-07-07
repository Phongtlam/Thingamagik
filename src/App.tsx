import * as React from 'react';
import 'normalize.css';
import './App.css';
import AppSidebar from './components/AppSidebar';
import Main from './components/Main';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppSidebar />
				<Main />
      </div>
    );
  }
}

export default App;
