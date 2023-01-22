import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from './contexts/CurrentUser'

function BreweryCard({ brewery }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { currentUser } = useContext(CurrentUserContext); // getting the current user from the context
  const [user_id, setUserId] = useState(null); // getting the user_id from the user object
  const [Brewery_id, setBreweryId] = useState(brewery.id);
  useEffect(() => {
    setBreweryId(brewery.id);
  }, [brewery]);
  useEffect(() => {
    if(currentUser) {
      setUserId(currentUser.id);
    }
  }, [currentUser]);
  

  function handleSubmit(e) {
    e.preventDefault();
      const data = {
        rating: rating,
        comment: comment,
        user_id: user_id, // passing the user_id to the data object
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
      {currentUser ? (
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
      ) : (
        <p>You must be logged in to view the form.</p>
      )}
    </div>
  );
}

export default BreweryCard