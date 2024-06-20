import React from 'react';
import './card.css';

const Card = ({ flag, name, population, capital, region }) => {
    return (
        <div className="card">
            <div className="flag">{flag}</div>
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
        </div>
    );
}

export default Card;
