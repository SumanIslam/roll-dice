import React, { Component } from "react";
import "./App.css";
import Dice from "./Dice";
import RollDice from "./RollDice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
      </div>
    );
  }
}

export default App;
