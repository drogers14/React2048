import logo from './logo.svg';
import React from 'react';
import './App.css';
import Tile from './Tile';
import Grid from './Grid';

function App() {
  return (
    <>
    <div align="center" >
      <h1> 2048</h1>
      <h4>Join the tiles, to get 2048!</h4>
      <div 
      justify-content="center" 
      align="center" 
      >
    <Grid />
     </div>
     </div>
     </>
  );
}

export default App;
