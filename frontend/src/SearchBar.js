import React, { useState } from 'react';
import { searchBreweriesByZip } from "./Api";

function SearchBar() {
  const [zipcode, setZipcode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    searchBreweriesByZip(zipcode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter zip code"
        value={zipcode}
        onChange={e => setZipcode(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
