import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { searchBreweriesByZip } from "./Api";

function Home() {
  const [breweries, setBreweries] = useState([]);
  console.log("Breweries:", breweries);

    function handleSearch(zipcode) {
      searchBreweriesByZip(zipcode)
        .then(data => {
          console.log("Search Results: ", data);
          setBreweries(data.slice(0,5));
        });
    }
    

    return (
    <div className='container'>
      <h1 className='Header'>Welcome to our BarCrawl App</h1>
      
      <div className='SearchbarContainer'> 
      <div className="Searchbar">
        <SearchBar onSearch={handleSearch} />
      </div>
        <div className='resultsContainer'>
         {breweries.length > 0 && 
          <div className='card-container'>
          {breweries.map((brewery, index) => (
            <div className="card" key={index}>
              <h2>{brewery.name}</h2>
              <h3>{brewery.brewery_type}</h3>
              <p>{brewery.street} -
                {brewery.city}- 
                {brewery.state}</p>
              <p>{brewery.phone}</p>
              <a href={brewery.website_url}>{brewery.website_url}</a>
            </div>
          ))}
          </div>
          } 
        </div>
                  
        </div>
    </div>
    
    
  );
}

export default Home;
