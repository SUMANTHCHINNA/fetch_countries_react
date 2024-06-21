import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card'
import './fetch.css'

const Change = () => {
    const [data, setData] = useState([])
    const [filterRegion, setFilterRegion] = useState('')
    const [regions, setRegions] = useState([])
    const [country, setCountry] = useState('')

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/independent?status=true").then(
            response => {
                setData(response.data);
                const uniqueRegions = [...new Set(response.data.map(item => item.region))].sort()
                setRegions(uniqueRegions)
            }
        )
    }, [])

    const filteredData = data.filter(item => {
        const regionMatch = filterRegion ? item.region.toLowerCase() === filterRegion.toLowerCase() : true;
        const countryMatch = country ? item.name.common.toLowerCase().includes(country.toLowerCase()) : true;
        return regionMatch && countryMatch;
    })

    return (
        <div>
            <center>
                <div className='search'>
                    <input 
                        onChange={(event) => setCountry(event.target.value)} 
                        type='text' 
                        value={country} 
                        placeholder='Search for a country...'
                    />
                    <h3>{country}</h3>
                </div>
            </center>

            <select
                value={filterRegion}
                onChange={(event) => setFilterRegion(event.target.value)}
                className="filter-select"
            >
                <option value="">All Regions</option>
                {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                ))}
            </select>
            <div className="card-container">
                {filteredData.map(item => (
                    <Card
                        key={item.cca3}
                        flag={item.flags}
                        name={item.name.common}
                        population={item.population}
                        capital={item.capital}
                        region={item.region}
                        coatOfArms={item.coatOfArms}
                    />
                ))}
            </div>
        </div>
    );
}

export default Change
