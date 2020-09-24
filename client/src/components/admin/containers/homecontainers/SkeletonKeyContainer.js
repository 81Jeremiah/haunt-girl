import React, {Component} from 'react';
import { connect } from 'react-redux';
import SkeletonKeyList from '../../SkeletonKeyList';
import {fetchWinners} from '../../../../actions/awardActions';
import { Link } from 'react-router-dom';
import AdminHeader from '../../AdminHeader';

class SkeletonKeyContainer extends Component {

  componentDidMount(){
    this.props.fetchWinners()
  }

  componentDidUpdate(){
    this.props.fetchWinners()
  }

  render(){
    return(
      <>
      <div className='AdminHeader'>
        <AdminHeader />

      </div>
      <div>
        <SkeletonKeyList awards={this.props.awards}/>
      <Link to={`/admin/awards/new/`}> Create New </Link>

      </div>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {awards: state.awards.awards}
}
export default connect(mapStateToProps, {fetchWinners})(SkeletonKeyContainer)
