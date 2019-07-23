import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/Movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <div className="home-button">Home</div>
  </div>
);

export default SavedList;
