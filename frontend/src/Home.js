import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { searchBreweriesByZip } from "./Api";
import BreweryCard from "./BreweryCard";

function Home() {
  const [breweries, setBreweries] = useState([]);
  console.log("Breweries:", breweries);

  function handleSearch(zipcode) {
    searchBreweriesByZip(zipcode)
      .then(data => {
        console.log("Search Results: ", data);
        setBreweries(data.slice(0,5));
        data.slice(0,5).forEach((brewery) => {
          fetch('http://localhost:5000/breweries', {
            method: 'POST',
            body: JSON.stringify(brewery),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        })
      });
  }
    

    return (
      <div className="container">
        <div className="Searchbar">
           <SearchBar onSearch={handleSearch} />
        </div>
        <div className="resultsContainer">
          {breweries.length > 0 && (
            <div className="card-container">
              {breweries.map((brewery, index) => (
                <BreweryCard key={index} brewery={brewery} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

export default Home;
