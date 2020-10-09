import React,{Component} from 'react';
import TopList from './../TopList';


class TopRatedContainer extends Component{



  render(){
    return(
      <div>
        <TopList lists={this.props.list}/>
      </div>
    );
  }
}


const mapStateToProps = state => {

  return{list :state.lists.lists}

}


export default TopRatedContainer
