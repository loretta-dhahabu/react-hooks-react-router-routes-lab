import React from "react";
import { actors } from "../data";

function Actors ()
{
  const actorsDetails = actors.map( ( actor ) =>
  {
    return (
      <div key={actor.name}>
        <h2>Name:{ actor.name }</h2>
        <h3>Movies</h3>
        <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorsDetails}
    </div>
  );
}

export default Actors;
