import React from 'react';

const StatesList = props => {
  const listStates = props.states.map(state => {
    return(
      <li key={state.id}> <a href="">{state.abbreviation} </a> </li>
    )
  })

  return(
    <ul className="game-filter">
      {listStates}
    </ul>
  );
}

export default StatesList
