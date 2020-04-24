import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostForm from './components/admin/PostForm';
import EditContainer from './components/admin/containers/EditContainer';
import Home from './components/admin/Home';
import InterviewEditContainer from './components/admin/containers/InterviewContainer';
import TopListsForm from './components/admin/TopListsForm';
import MyEditor from './components/admin/newEditForm/MyEditor'
import SkeletonKeyEditContainer from './components/admin/containers/SkeletonKeyContainer';
import AnnouncementContainer from './components/admin/containers/AnnouncementContainer';
import PostContainer from './components/admin/containers/homecontainers/PostContainer';
import InterviewContainer from './components/admin/containers/homecontainers/InterviewContainer';
import TopListContainer from './components/admin/containers/homecontainers/TopListContainer';
import SkeletonKeyContainer from './components/admin/containers/homecontainers/SkeletonKeyContainer';


const Routes = () => {

  return (
    <Router>
      <Switch>

        <Route exact path="/admin/posts/new" component={ PostForm} />
        <Route exact path="/admin/posts/:id/edit" component={ EditContainer} />
        <Route exact path="/admin/interviews/new" component={ InterviewEditContainer } />
        <Route exact path="/admin/TopLists/new" component={ TopListsForm } />
        <Route exact path='/admin/newEditForm' component= { MyEditor} />
        <Route exact path="/admin/home" component={ Home } />
        <Route exact path="/admin/awards/new" component={ SkeletonKeyEditContainer } />
        <Route exact path="/admin/announcements/new" component={ AnnouncementContainer } />
        <Route exact path="/admin/posts" component={PostContainer } />
        <Route exact path="/admin/interviews/" component={ InterviewContainer } />
        <Route exact path="/admin/TopLists/" component={ TopListContainer} />
      <Route exact path="/admin/awards/" component={ SkeletonKeyContainer} />
      </Switch>
    </Router>
  )

}


export default Routes
