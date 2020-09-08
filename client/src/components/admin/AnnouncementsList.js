import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteAnnouncement} from '../../actions/announcementActions';



const AnnouncementsList = (props) =>{

  const handleDelete = (interviewId) => {
    props.deleteAnnouncement(interviewId)
  }

  const listAnnouncements = props.announcements.map( announcement => {
    return(
      <li key={announcement.id}>
        <Link to={`${announcement.id}/edit`}>{announcement.title}</Link>
          <span onClick={() => handleDelete(announcement.id)}>(x)</span>

      </li>
    );
  });

  return(
    <div>
      <ul>
        { listAnnouncements }
      </ul>
    </div>
  );
}


export default connect(null,{deleteAnnouncement})(AnnouncementsList)
