import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



const InterviewsList = (props) =>{
  console.log(props)
  const listInterviews = props.interviews.map( interview => {

    return(

      <li className="review-item" key={interview.id}>
        <div className="row">
					<div className="col-lg-4">
						<div className="review-pic">
							<img src="img/review/1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="review-content text-box text-white">
							<div className="rating">
								<h5><i></i></h5>
							</div>
							<div className="top-meta">  /  in <Link to=""></Link></div>
            <h3>{interview.title}</h3>
            <div className="review-content text-box text-white">
                    {ReactHtmlParser(interview.content.substring(0,250))}
            </div>
                   <br/>
             <Link to={`interviews/${interview.id}`} className="read-more">Read More  <img src={doubleArrow} alt=""/></Link>
          </div>
        </div>
      </div>
      </li>
    );
  });

  return(
    <div>
      <ul>
        { listInterviews }
      </ul>
    </div>
  );
}

export default InterviewsList
