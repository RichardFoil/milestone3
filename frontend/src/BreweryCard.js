import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from './contexts/CurrentUser'

function BreweryCard({ brewery }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { user } = useContext(CurrentUserContext);
  const user_id = user ? user.id : null;
  const [Brewery_id, setBreweryId] = useState(brewery.id);
  useEffect(() => {
    setBreweryId(brewery.id);
  }, [brewery]);

  function handleSubmit(e) {
    e.preventDefault();
      const data = {
        rating: rating,
        comment: comment,
        user_id: user_id,
        Brewery_id: Brewery_id
    }

    fetch('http://localhost:5000/ratingsAndcomments', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  

  return (
    <div className="card">
      <h2>{brewery.name}</h2>
      <h3>Brewery Type:  {brewery.brewery_type}</h3>
      <p>Located at: {brewery.street} - {brewery.city} - {brewery.state}</p>
      <p>Phone: {brewery.phone}</p>
      <a href={brewery.website_url}>{brewery.website_url}</a>
      <form onSubmit={handleSubmit}>
      <input type="hidden" name="Brewery_id" value={Brewery_id} />
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            name="rating"
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="comment"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BreweryCard