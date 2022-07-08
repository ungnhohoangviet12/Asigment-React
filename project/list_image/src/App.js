import './App.css';
import { useEffect, useState } from "react";
import Movie from './Movie';
import Filter from './Filter';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    fetchPopular();
  }, [])

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1');
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
    setFiltered(filtered.results);
  }

  return (
    <div className="App">
      <Filter />
      <div className='popular-movies'>
        {popular.map((movie, index) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
