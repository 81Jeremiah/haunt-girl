import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from './containers/Splash';
import ProfilePage from './components/Static/About';
import Posts from './containers/Posts';
import SkeletonKeysContainer from './containers/SkeletonKeysContainer';
import Post from './components/Post';
import AnnouncementsContainer from './containers/AnnouncementsContainer';
import Contact from './components/Static/Contact';
import Login from './components/admin/Login';
import SearchResults from './components/SearchResults';
import interviewContainer from './containers/InterviewContainer';
import FourOFourPage from './components/404Page';
const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Splash }/>
        <Route exact path="/reviews/posts/:id" component={Post} />
        <Route exact path="/reviews/posts" component={ Posts } />
        <Route exact path="/reviews/haunts" component={ Posts } />
        <Route exact path="/reviews/haunts/:id" component={ Post } />
        <Route exact path="/reviews/escaperooms" component={ Posts } />
        <Route exact path="/reviews/escaperooms/:id" component={ Post } />
        <Route exact path="/reviews/oddities" component={ Posts } />
        <Route exact path="/reviews/oddities/:id" component={ Post } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/about" component={ ProfilePage } />
        <Route exact path="/admin/login" component={ Login } />
        <Route exact path="/searchresults" component={ SearchResults} />
        <Route exact path="/SkeletonKeyAwards" component={ SkeletonKeysContainer} />
        <Route exact path="/blog/announcements" component={ AnnouncementsContainer} />
        <Route exact path="/interviews" component={ interviewContainer} />
        <Route render={ FourOFourPage } />
      </Switch>
    </Router>
  )

}


export default Routes
