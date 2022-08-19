import React from "react";

type Props = {
  movie: {
    id: string;
    title: string;
    genres: any[];
  };
};
function MovieDetail({ movie }: Props) {
  return (
    <div className="App-Card">
          <span className="text-small">ID: {movie.id}</span>
            <br></br>
            <span className="text-large">{movie.title}</span>
   <br></br>

  
   
    </div>
  );
}

export default MovieDetail;