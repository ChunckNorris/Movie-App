import React, { useState } from "react";
import MovieCard from "./MovieCard";

type Movie = {
    id: string;
  title: string;
  genres: any[];
};
type Props = {
    moviedata: Movie[]
    
  };

function MovieList({ moviedata }: Props)  {

  return (
    <div>
      {moviedata.map((p, i) => (
        <MovieCard key={`post-${i}`} movie={p}></MovieCard>

      ))}
              
    </div>
  );
}

export default MovieList;