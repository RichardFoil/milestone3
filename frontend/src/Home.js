import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { searchBreweriesByZip } from "./Api";



function Home() {
    const [breweries, setBreweries] = useState([]);
  
  function handleSearch(zipcode) {
    searchBreweriesByZip(zipcode).then(data => setBreweries(data));
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
            <a href="signup">Signup</a>
          </li>
        </ul>
      </nav>
      </div>
      <div className="Searchbar">
        <SearchBar onSearch={handleSearch} />
            <div id='results-container'>
                {breweries.map((brewery, index) => (
                    <div key={index}>
                    <h2>{brewery.name}</h2>
                    <p>{brewery.address}</p>
                    <p>{brewery.phone}</p>
                    <a href={brewery.website_url}>{brewery.website_url}</a>
                    </div>
                ))}
            </div>

    </div>
      
      
    </div>
    
  );
}

export default Home;
