import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import OverView from './OverView';
import Application from './Application';
import Targetting from './Targetting';
import Setting from './Setting';

const Main = () => (
  <main>
    <Switch>
      <Route path='/overview' component={OverView}/>
      <Route path='/application' component={Application}/>
      <Route path='/targetting' component={Targetting}/>
      <Route path='/setting' component={Setting}/>
    </Switch>
  </main>
)

export default Main;