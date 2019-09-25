import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from './containers/Splash';
import ProfilePage from './components/Static/About';
import Posts from './containers/Posts';

import Post from './components/Post';

import Contact from './components/Static/Contact';
import Login from './components/admin/Login'

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Splash }/>
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/posts" component={ Posts } />
        <Route exact path="/haunts" component={ Posts } />
        <Route exact path="/haunts/:id" component={ Post } />
        <Route exact path="/escaperooms" component={ Posts } />
        <Route exact path="/escaperooms/:id" component={ Post } />
        <Route exact path="/oddities" component={ Posts } />
        <Route exact path="/oddities/:id" component={ Post } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/about" component={ ProfilePage } />
        <Route exact path="/admin/login" component={ Login } />
      </Switch>
    </Router>
  )

}


export default Routes
