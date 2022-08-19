import React, { useState } from "react";

type Props = {
    value: "View" | "Search" | "Update";
    processing: boolean;
    movie: any;
};


  
  function viewMovie(_movie: any) {
    console.log('clicked');
    console.log(_movie);
    alert(_movie.id + ' ' + _movie.title + ' ' + _movie.genres);
   
  }

function SearchButton({ value, processing, movie }: Props) {
    return <button onClick={() => viewMovie(movie)}>{processing ? "Processing" : value}</button>;
}

export default SearchButton;


