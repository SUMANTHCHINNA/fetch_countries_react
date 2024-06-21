import React from 'react';
import './card.css';

const Card = ({ flag, name, population, capital, region, coatOfArms }) => {
    return (
        <div className='card-containers'>
        <div className="card">
            <img width={150} height={100} className="flag" src={flag?.svg} alt={flag?.alt}/>
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
        </div>
        <img style={{padding:'10px'}} width={50} height={50} className="coatOfArms" src={coatOfArms?.svg} alt={coatOfArms?.alt}/>
        </div>
    );
}

export default Card;
