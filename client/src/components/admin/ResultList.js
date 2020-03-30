import React,{Component} from 'react';

class ResultList extends Component {

 handleAddClick = (escaperoom) =>{
   this.props.foundEscapeRoom(escaperoom)
 }

render(){

  const results = this.props.escapeRooms.map(escaperoom => {
    return(
      <li key={escaperoom.id}><strong>{escaperoom.title}</strong>
      <button onClick={this.handleAddClick(escaperoom)}>Add</button>
      </li>
     )
  });

  return(
     <ul>
       {console.log(this.props)}
      {results}
     </ul>
  )

}

}

export default ResultList
