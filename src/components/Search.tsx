import React, { useState } from "react";


type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};

function SearchMovies({ onChange, name, placeholder, value = "" }: Props) {
  return (
    <input
      onChange={event => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default SearchMovies;