import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from './containers/Splash'

const Routes = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Splash }/>
      </Switch>
    </Router>
  )

}


export default Routes
