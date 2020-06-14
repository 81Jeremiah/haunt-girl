import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import  {fetchWinner} from '../../../../actions/awardActions';
import SkeletonKeyForm from '../../SkeletonKeyForm';
import AdminHeader from '../../AdminHeader'

class SkeletonKeyEditContainer extends Component {

 componentDidMount(){
   const awardId = this.props.match.params.id
   this.props.fetchWinner(awardId)

 }


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

       <SkeletonKeyForm award={this.state.award}


        />

      </div>
    </>
    )
  }
}


  const mapStateToProps = state => {
      return {award: state.award.award}
  };




export default SkeletonKeyEditContainer = withRouter(connect(mapStateToProps, {fetchWinner} )(SkeletonKeyEditContainer));
