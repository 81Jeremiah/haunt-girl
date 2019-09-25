import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostForm from './components/admin/PostForm';
import EditContainer from './components/admin/containers/EditContainer';

const Routes = () => {

  return (
    <Router>
      <Switch>

        <Route exact path="/admin/posts/new" component={ PostForm} />
        <Route exact path="/admin/posts/:id/edit" component={ EditContainer} />
        
      </Switch>
    </Router>
  )

}


export default Routes
