import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchAnnouncements} from '../../../../actions/announcementActions';
import { Link } from 'react-router-dom';
import AdminHeader from '../../AdminHeader';
import AnnouncementsList from '../../AnnouncementsList';

class AnnouncementContainer extends Component {

  componentDidMount(){
    this.props.fetchAnnouncements()
    }

  // componentDidUpdate(prevProps){
  //   if (this.props !== prevProps){
  //     this.props.fetchAnnouncements()
  //  }
  // }

  render(){
    return(
      <>
      <div className='AdminHeader'>
        <AdminHeader />

      </div>
      <div>
        <AnnouncementsList announcements={this.props.announcements}/>
        <Link to={`new`}> Create New </Link>

      </div>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {announcements: state.announcements.announcements}
}
export default connect(mapStateToProps, {fetchAnnouncements})(AnnouncementContainer)
