import React, { Component } from 'react';
import { getAward } from '../../../actions/postActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import AnnouncementForm from '../AnnouncementForm';
import AdminHeader from '../AdminHeader'

class AnnouncementContainer extends Component {




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


const mapStateToProps = state => {
    return {announcement: state.announcement.announcement}
};

export default AnnouncementContainer = withRouter(connect(mapStateToProps, {getAward})(AnnouncementContainer));
