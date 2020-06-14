import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import  {fetchList} from '../../../../actions/listActions';
import TopListsForm from '../../TopListsForm';
import AdminHeader from '../../AdminHeader'

class TopListEditContainer extends Component {

 componentDidMount(){
   const listId = this.props.match.params.id
   this.props.fetchList(listId)

 }


  render(){

    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>

       <TopListsForm list={this.state.list}


        />

      </div>
    </>
    )
  }
}


  const mapStateToProps = state => {
      return {list: state.list.list}
  };




export default TopListEditContainer = withRouter(connect(mapStateToProps, {fetchList} )(TopListEditContainer));
