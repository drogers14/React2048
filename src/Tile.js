import React from "react";
import "./App.css";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    this._handleChange = this._handleChange.bind(this);
    this._resetGame = this._resetGame.bind(this);
  }
  _handleChange(e) {
    if (e.keyCode === 40) {
      this.setState({
        value: this.state.value * 2,
      });
      console.log("its above me", e.target.value);
    }
  };
  _resetGame(event) {
      console.log("hi secy")
      event.preventDefault();
    if (event.which === 82) {
      this.setState({
        value: 1,
      });
      console.log("its NOT above me", event.target.value);
    }
    console.log('npm run start')
  };

  render() {
    window.addEventListener("keyup", this._handleChange);
    window.addEventListener("r", this._resetGame);
    //window.addEventListener("keydown", this._handleChange);

    /*function log(event){
      console.log( event.type );
    }*/

    return (
      <div className="two-tile">
        <h1>
          {this.state.value === 1 && ""}
          {this.state.value !== 1 && this.state.value}
        </h1>
      </div>
    );
  }
}

export default Tile;
