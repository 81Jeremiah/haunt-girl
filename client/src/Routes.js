import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from './containers/Splash';
import ProfilePage from './components/Static/About';
import Posts from './containers/Posts';
import SkeletonKeyContainer from './containers/SkeletonKeyContainer';
import Post from './components/Post';
import AnnouncementsContainer from './containers/AnnouncementsContainer';
import Contact from './components/Static/Contact';
import Login from './components/admin/Login';
import SearchResults from './components/SearchResults';

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Splash }/>
        <Route exact path="reviews/posts/:id" component={Post} />
        <Route exact path="reviews/posts" component={ Posts } />
        <Route exact path="reviews/haunts" component={ Posts } />
        <Route exact path="reviews/haunts/:id" component={ Post } />
        <Route exact path="reviews/escaperooms" component={ Posts } />
        <Route exact path="reviews/escaperooms/:id" component={ Post } />
        <Route exact path="reviews/oddities" component={ Posts } />
        <Route exact path="reviews/oddities/:id" component={ Post } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/about" component={ ProfilePage } />
        <Route exact path="/admin/login" component={ Login } />
        <Route exact path="/searchresults" component={ SearchResults} />
        <Route exact path="/SkeletonKeyAwards" component={ SkeletonKeyContainer} />
        <Route exact path="/announcements" component={ AnnouncementsContainer} />
        {/* <Route render={ () => <h1>404 Error</h1> } /> */}
      </Switch>
    </Router>
  )

}


export default Routes
