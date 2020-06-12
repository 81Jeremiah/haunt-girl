import React, { Component } from 'react';
import AnnouncementForm from '../AnnouncementForm';
import AdminHeader from '../AdminHeader';

class AnnouncementContainer extends Component {

  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

        <AnnouncementForm />

      </div>
    </>
    )
  }
}





export default AnnouncementContainer
