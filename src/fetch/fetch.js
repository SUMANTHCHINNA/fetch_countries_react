import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card'
import './fetch.css'

const Change = () => {
    const [data, setData] = useState([])
    const [filterRegion, setFilterRegion] = useState('')
    const [regions, setRegions] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/independent?status=true").then(
            response => {
                setData(response.data);
                const uniqueRegions = [...new Set(response.data.map(item => item.region))].sort()
                setRegions(uniqueRegions)
            }
        )
    }, [])

    const handleFilterChange = (event) => {
        setFilterRegion(event.target.value)
    };

    const filteredData = filterRegion 
        ? data.filter(item => item.region.toLowerCase() === filterRegion.toLowerCase())
        : data

    return (
        <div>
            <select
                value={filterRegion}
                onChange={handleFilterChange}
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
                        flag={item.flag}
                        name={item.name.official}
                        population={item.population}
                        capital={item.capital}
                        region={item.region}
                    />
                ))}
            </div>
        </div>
    );
}

export default Change
