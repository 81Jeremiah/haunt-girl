import React from 'react';
import Link from 'react-router-dom';

const StatesList = props => {
  const listStates = props.states.map(state => {
    return(
      <li key={state.id} onClick={props.handleStateClick}> 
      <Link to= {`/states/${state.abbreviation}`}>{state.abbreviation} </Link> </li>
    )
  })

  return(
    <ul className="game-filter">
      {listStates}
    </ul>
  );
}

export default StatesList
