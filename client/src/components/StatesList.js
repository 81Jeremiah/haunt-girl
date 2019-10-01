import React from 'react';

const StatesList = props => {
  console.log(props)
  const listStates = props.states.map(state => {
    return(
      <li key={state.id} onClick={props.handleStateClick}>
      <a href="filter-by-state">{state.abbreviation} </a> </li>
    )
  })

  return(
    <ul className="game-filter">
      {listStates}
    </ul>
  );
}

export default StatesList
