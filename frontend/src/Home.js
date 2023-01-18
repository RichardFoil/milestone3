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
      <div className='NavbarContainer'>
      <nav className='Navbar'>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
        </ul>
      </nav>
      </div>
      <div className='SearchbarContainer'> 
      <div className="Searchbar">
        <SearchBar onSearch={handleSearch} />
              {breweries.length > 0 && 
        <div className="resultsContainer">
          {breweries.map((brewery, index) => (
            <div className="card" key={index}>
              <h2>{brewery.name}</h2>
              <h3>{brewery.brewery_type}</h3>
              <p>{brewery.street}</p>
              <p>{brewery.city}</p>
              <p>{brewery.state}</p>
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
