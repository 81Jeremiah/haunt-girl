import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import  {getAnnouncement} from '../../../../actions/announcementActions';
import AnnouncementForm from '../../AnnouncementForm';
import AdminHeader from '../../AdminHeader'

class AnnouncementEditContainer extends Component {

  state: {
    editing: false
  }

 componentDidMount(){
   const announcementId = this.props.match.params.id
   this.props.getAnnouncement(announcementId)

 }


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

      <AnnouncementForm announcement={this.state.announcement}


        />

      </div>
    </>
    )
  }
}


  const mapStateToProps = state => {
      return {announcement: state.announcement.announcement}
  };




export default AnnouncementEditContainer = withRouter(connect(mapStateToProps, {getAnnouncement} )(AnnouncementEditContainer));
