import React, {Component} from 'react';
import doubleArrow from '../img/icons/double-arrow.png'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchLists} from '../actions/listActions';
import TopLists from './TopLists';

class TopFiveSplash extends Component{


   componentDidMount(){
     this.props.fetchLists()

   }

  render(){

    return(
      <section class="blog-section spad">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-8 col-md-7">
              <div class="section-title text-white">

                <h2>Top Escape Rooms</h2>
                 {/* <ul class="blog-filter"> */}
                  <TopLists lists={this.props.toplists} />

                {/* </ul> */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      );
    }
}

const mapStateToProps = state => {
  console.log(state)
  return {toplists: state.lists.lists}
}

export default connect(mapStateToProps ,{fetchLists})(TopFiveSplash)
