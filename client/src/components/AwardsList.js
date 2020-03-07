import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



const AwardsList = (props) =>{
  console.log(props)
  const listWinners = props.winners.map( winner => {

    return(

      <li className="review-item" key={winner.id}>
        <div className="row">
					<div className="col-lg-4">
						<div className="review-pic">
							<img src="img/review/1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="review-content text-box text-white">
							<div className="rating">
								<h5><i>Rating</i><span>4.5</span> / 5</h5>
							</div>
							<div className="top-meta">{winner.year}  /  in <Link to={winner.link_to_post}>original post</Link></div>
            <h3>{winner.title}</h3>
            <div className="review-content text-box text-white">
                    
                  </div>
                   <br/>
                 <Link to={`${props.categoryRoute}/${winner.id}`} className="read-more">Read More  <img src={doubleArrow} alt=""/></Link>
          </div>
        </div>
      </div>
      </li>
    );
  });

  return(
    <div>
      <ul>
        { listWinners }
      </ul>
    </div>
  );
}

export default AwardsList
