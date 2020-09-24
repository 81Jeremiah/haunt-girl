import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import  {getAnnouncement} from '../../../../actions/announcementActions';
import AnnouncementEditForm from '../../adminForms/editForms/AnnouncementEditForm';
import AdminHeader from '../../AdminHeader'

class AnnouncementEditContainer extends Component {

  state: {
    editing: false
  }

 componentDidMount(){
   const announcementId = this.props.match.params.id
   console.log(announcementId)
   this.props.getAnnouncement(announcementId)

 }


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

       <AnnouncementEditForm announcement={this.props.announcement}

        />
       {console.log(this.props.announcement)}
      </div>
    </>
    )
  }
}


  const mapStateToProps = state => {
      return {announcement: state.announcements.announcement}
  };




export default AnnouncementEditContainer = withRouter(connect(mapStateToProps, {getAnnouncement} )(AnnouncementEditContainer));
