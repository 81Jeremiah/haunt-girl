import React from 'react';

const CitiesList = props => {
  console.log(props)
  const listCities = props.cities.map(city => {
    return(
      <li key={city.id} onClick={props.handleCityClick}>
      <a href="filter-by-city">{city.abbreviation} </a> </li>
    )
  })

  return(
    <ul className="game-filter">
      {listCities}
    </ul>
  );
}

CitiesList.defaultProps = {
  cities: []
}

export default CitiesList
