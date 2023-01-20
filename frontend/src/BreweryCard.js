import React, { useState } from 'react';

function BreweryCard({ brewery }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div className="card">
      <h2>{brewery.name}</h2>
      <h3>Brewery Type:  {brewery.brewery_type}</h3>
      <p>Located at: {brewery.street} - {brewery.city} - {brewery.state}</p>
      <p>Phone: {brewery.phone}</p>
      <a href={brewery.website_url}>{brewery.website_url}</a>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BreweryCard