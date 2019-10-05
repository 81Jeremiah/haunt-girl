import React from 'react';
import LogoutButton from './LogoutButton';

const Home = (props) =>{
  console.log(props.history)
  return(
    <div>
      <h1>welcome</h1>
      <LogoutButton history={props.history}/>
    </div>
  )

}


export default Home
