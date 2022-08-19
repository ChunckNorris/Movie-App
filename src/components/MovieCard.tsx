import React from "react";
import SearchButton from './SearchButton'




type Props = {
  movie: {
    id: string;
    title: string;
    genres: any[];
  };
};


function MovieCard({ movie }: Props) {
  return (
    <div className="App-Card">
          <span className="text-small">ID: {movie.id}</span>
            <br></br>
            <span className="text-large">{movie.title}</span>
   <br></br>
   <div className="button-small">
 

   <SearchButton value='View' processing={false} movie={movie} />
   </div>
  
   
    </div>
  );
}

export default MovieCard;