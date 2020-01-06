import React from 'react';
import LogoutButton from './LogoutButton';
import AdminHeader from './AdminHeader'
import ListReviews from './ListReviews'

const Home = (props) =>{
  console.log(props.history)
  return(
    <div>
      <AdminHeader />
      <h1>welcome</h1>
      <LogoutButton history={props.history}/>
      <ListReviews />
    </div>
  )

}


export default Home
