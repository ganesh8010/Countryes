import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
function CountryCard({ name, flag, population, region, capital, data }) {
  return (
    <div>
      <Link to={`/${name}`} className='country-card' state={{ data }}>
        <div>  <img src={flag} alt="Barbodods flag" /></div>
        <div className='card-text'>
          <h3 className='card-title'>{name}</h3>
          <p>
            <b>Population:</b>{population}
          </p>
          <p>
            <b>Region: </b>{region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </Link>
    </div>
  )
}
export default CountryCard
