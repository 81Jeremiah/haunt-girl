import React from 'react';
import { Link } from 'react-router-dom';



const AnnouncementsList = (props) =>{

  const listAnnouncements = props.announcements.map( announcement => {
    return(
      <li key={announcement.id}>
        <Link to={`${announcement.id}/edit`}>{announcement.title}</Link>
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

export default AnnouncementsList
