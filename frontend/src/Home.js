import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { searchBreweriesByZip } from "./Api";
import BreweryCard from "./BreweryCard";
import  CurrentUserProvider from './contexts/CurrentUser'


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
          .then(res => res.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
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
                <CurrentUserProvider>
                <BreweryCard key={index} brewery={brewery} />
                </CurrentUserProvider>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

export default Home;
