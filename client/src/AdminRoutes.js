import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EditContainer from './components/admin/containers/EditContainer';
import Home from './components/admin/Home';

import InterviewEditContainer from './components/admin/containers/editContainers/InterviewEditContaner';
import InterviewForm from './components/admin/adminForms/InterviewForm';
import InterviewContainer from './components/admin/containers/homecontainers/InterviewContainer'

import SkeletonKeyEditContainer from './components/admin/containers/editContainers/SkeletonKeyEditContainer';
import SkeletonKeyContainer from './components/admin/containers/homecontainers/SkeletonKeyContainer';
import SkeletonKeyForm from './components/admin/adminForms/SkeletonKeyForm'

import PostContainer from './components/admin/containers/homecontainers/PostContainer';
import PostForm from './components/admin/PostForm';

import TopListContainer from './components/admin/containers/homecontainers/TopListContainer';
import TopListsForm from './components/admin/TopListsForm';
import TopListEditContainer from './components/admin/containers/editContainers/TopListEditContainer';

import MyEditor from './components/admin/newEditForm/MyEditor'

import AnnouncementEditContainer from './components/admin/containers/editContainers/AnnouncementEditContainer';
import AnnouncementContainer from './components/admin/containers/homecontainers/AnnouncementContainer';
import AnnouncementForm from './components/admin/adminForms/AnnouncementForm';


const Routes = () => {

  return (
    <Router>
      <Switch>

        <Route exact path="/admin/home" component={ Home } />

        <Route exact path="/admin/posts/new" component={ PostForm} />
        <Route exact path="/admin/posts/:id/edit" component={ EditContainer} />
        <Route exact path="/admin/posts" component={PostContainer } />

        <Route exact path="/admin/interviews/new" component={ InterviewForm } />
        <Route exact path="/admin/interviews/:id/edit" component={ InterviewEditContainer } />
        <Route exact path="/admin/interviews/" component={ InterviewContainer } />

        <Route exact path="/admin/TopLists/new" component={ TopListsForm } />
        <Route exact path="/admin/TopLists/:id/edit" component={ TopListEditContainer} />
        <Route exact path="/admin/TopLists/" component={ TopListContainer} />

        <Route exact path='/admin/newEditForm' component= { MyEditor} />

        <Route exact path="/admin/awards/new" component={ SkeletonKeyForm } />
        <Route exact path="/admin/awards/" component={ SkeletonKeyContainer} />
        <Route exact path="/admin/awards/:id/edit" component={ SkeletonKeyEditContainer} />

        <Route exact path="/admin/announcements/new" component={ AnnouncementForm } />
        <Route exact path="/admin/announcements/" component={ AnnouncementContainer } />
        <Route exact path="/admin/announcements/:id/edit" component={ AnnouncementEditContainer } />


      </Switch>
    </Router>
  )

}


export default Routes
