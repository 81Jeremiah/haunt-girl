import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from '../containers/SearchBar';

const FourOFourPage = (props) =>{
  return(
    <>
    <div className='foroforbody'>
    <div id="background"></div>
    <div className="top">
      <h1>404</h1>
      <h3>page not found</h3>
    </div>
    <div className="forofor-container">
    <div className="ghost-copy">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
    </div>
    <div className="ghost">
        <div className="face">
          <div className="eye"></div>
          <div className="eye-right"></div>
          <div className="mouth"></div>
        </div>
    </div>
    <div className="shadow"></div>
    </div>
    <div className="bottom">
    <p>Boo, looks like a ghost stole this page!</p>
    <SearchBar />
    {/*// <form className="search">
    //   <input type="text" className="search-bar" placeholder="Search"/>
    //   <button type="submit" class="search-btn">
    //     <i className="fa fa-search"></i>
    //   </button>
    // </form>*/}
    <div className="buttons">

        <button
           className="btn"
           onClick={() => props.history.goBack()}>
           Back
         </button>

      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </div>
    </div>
  </div>
  </>
  )
}

export default FourOFourPage
