import React from 'react';
import AdminHeader from './AdminHeader'

const Home = (props) =>{
  console.log(props.history)
  return(
    <div>
      <AdminHeader />
      <h1>welcome</h1>


    </div>
  )

}


export default Home
