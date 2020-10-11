import React,{Component} from 'react';
import TopList from '../components/TopList';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar'

class TopRatedContainer extends Component{



  render(){
    return(
      <div>
        <Navbar />
        <TopList lists={this.props.list}/>
      </div>
    );
  }
}


const mapStateToProps = state => {

  return{list :state.lists.lists}

}


export default connect(mapStateToProps)(TopRatedContainer)
