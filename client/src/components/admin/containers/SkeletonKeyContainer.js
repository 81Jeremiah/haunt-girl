import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

import SkeletonKeyForm from '../SkeletonKeyForm';
import AdminHeader from '../AdminHeader'
class SkeletonKeyContainer extends Component {




  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

      <SkeletonKeyForm

        />

      </div>
    </>
    )
  }
}


const mapStateToProps = state => {
    return {award: state.awards.award}
};

export default SkeletonKeyContainer = withRouter(connect(mapStateToProps )(SkeletonKeyContainer));
