import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from './components/Search'
import SearchButton from './components/SearchButton'
import MovieList from './components/MovieList';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onChange = (str: string) => {
    setSearchInput(str);
  };
  const [isShown, setIsShown] = useState(false);
  //this.state = { restoLists: null, isLoadding : false };

  useEffect(() => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/movies', {
      headers: {
        Authorization: 'Api-Key q3MNxtfep8Gt',
      },
    })
      .then((response) => response.json())
      .then((results) => {
        console.log(results.data);
        setMovies(results.data);
      });


  }, []);

 

return(
    <div>
      <SearchMovies
       onChange={onChange}
       name="search"
       placeholder="Search Movies"
       value={searchInput}/>
       <br></br>
       <div>
       <MovieList moviedata={movies}></MovieList>
       </div>

     
    </div>
 )

  
}

export default App;
