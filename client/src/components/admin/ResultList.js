import React,{Component} from 'react';

class ResultList extends Component {


  handleAddClick = ( escaperoom) =>{
   this.props.foundEscapeRoom(escaperoom)
  }

render(){

  const results = this.props.escapeRooms.map(escaperoom => {
    return(

      <li key={escaperoom.id}><strong onChange={this.handleChange}>{escaperoom.title}</strong>
      <button onClick={() => this.handleAddClick(escaperoom)}>Add</button>
      </li>
     )
   });

  return(
     <ul>
      {results}
     </ul>
  )

}

}

export default ResultList
