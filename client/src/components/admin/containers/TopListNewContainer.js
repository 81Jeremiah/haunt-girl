import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import TopListForm from '../TopListForm';
import AdminHeader from '../AdminHeader';

class TopListContainer extends Component {


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

        <TopListForm

        />

      </div>
    </>
    )
  }
}


// const mapStateToProps = state => {
//     return {topList: state.topLists.topList}
// };

export default TopListContainer
