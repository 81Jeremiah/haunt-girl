import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



const AnnouncementsList = (props) =>{

  const listAnnouncements = props.Announcements.map( announcement => {

    return(

      <li className="review-item" key={announcement.id}>
        <div className="row">
					<div className="col-lg-4">
						<div className="review-pic">
							<img src="img/review/1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="review-content text-box text-white">
							<div className="rating">
								<h5><i>Best Something out of Something</i></h5>
							</div>
							<div className="top-meta">{announcement.year}  /  in <Link to={announcement.link_to_post}>original post</Link></div>
            <h3>{announcement.title}</h3>
            <div className="review-content text-box text-white">
               {ReactHtmlParser(announcement.content.substring(0,250))}
            </div>
                   <br/>
                 <Link to={`${props.categoryRoute}/${announcement.id}`} className="read-more">Read More  <img src={doubleArrow} alt=""/></Link>
          </div>
        </div>
      </div>
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
