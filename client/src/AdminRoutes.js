import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostForm from './components/admin/PostForm';
import EditContainer from './components/admin/containers/EditContainer';
import Home from './components/admin/Home';
import InterviewForm from './components/admin/InterviewForm';
import TopListsForm from './components/admin/TopListsForm';
import MyEditor from './components/admin/newEditForm/MyEditor'


const Routes = () => {

  return (
    <Router>
      <Switch>

        <Route exact path="/admin/posts/new" component={ PostForm} />
        <Route exact path="/admin/posts/:id/edit" component={ EditContainer} />
        <Route exact path="/admin/interviews/new" component={ InterviewForm } />
        <Route exact path="/admin/TopLists/new" component={ TopListsForm } />
        <Route exact path='/admin/newEditForm' component= { MyEditor} />
        <Route exact path="/admin/home" component={ Home } />
      </Switch>
    </Router>
  )

}


export default Routes
