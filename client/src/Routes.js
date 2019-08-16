import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from './containers/Splash'
import About from './components/Static/About'

const Routes = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Splash }/>
        <Route exact path="/about" component={ About }/>
      </Switch>
    </Router>
  )

}


export default Routes
