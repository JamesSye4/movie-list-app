import React from 'react';
import './App.css';

function App() {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];

  return (
    <div className="App">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
