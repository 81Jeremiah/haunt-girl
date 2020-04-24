import React, { Component } from 'react';
import { fetchLists } from '../../../../actions/listActions';
import { connect } from 'react-redux';
// import { withRouter, Redirect } from 'react-router-dom'
import TopListList from '../../TopListList';
import AdminHeader from '../../AdminHeader';
import { Link } from 'react-router-dom';

class TopListContainer extends Component {

  componentDidMount(){
    this.props.fetchLists()
  }



  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />

      </div>
      <div>

        <TopListList toplists={this.props.toplists}/>
        <Link to={`/TopLists/new`}> Create New </Link>

      </div>
    </>
    )
  }
}

const mapStateToProps = state => {

    return {toplists: state.lists.lists}
};

export default connect(mapStateToProps, {fetchLists})(TopListContainer);
