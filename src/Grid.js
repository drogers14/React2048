import React from "react";
import "./App.css";
import Tile from './Tile.js';
var row1 = [<Tile / >, <Tile />, <Tile/>, <Tile/>];

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
      }
  render() {
    return (
      <div >
        <div class = "grid-row">
            {
        //if(row1[Math.floor(Math.random() * 4)]==1
         row1.map((tile, index) => (
             tile
         ))
     }
     </div>
     <div class = "grid-row">
     {
         row1.map((tile, index) => (
             tile
         ))
     }
     </div>
     <div class = "grid-row">
     {
         row1.map((tile, index) => (
             tile
         ))
     }
     </div>
     <div class = "grid-row">
     {
         row1.map((tile, index) => (
             tile
         ))
     }
     </div>
     </div>
    );
  }
}

export default Grid;