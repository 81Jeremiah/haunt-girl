import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import  {getAnnouncement} from '../../../actions/announcementActions'
import AnnouncementForm from '../AnnouncementForm';
import AdminHeader from '../AdminHeader'

class AnnouncementContainer extends Component {

 // componentDidMount(){
 //   const announcementId = this.props.match.params.id
 //   this.props.getAnnouncement(announcementId)
 //
 // }


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

      <AnnouncementForm

        />

      </div>
    </>
    )
  }
}


// const mapStateToProps = state => {
//     return {announcement: state.announcement.announcement}
// };

export default AnnouncementContainer
// export default AnnouncementContainer = withRouter(connect(mapStateToProps, {getAnnouncement} )(AnnouncementContainer));
