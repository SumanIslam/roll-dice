import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  // default props
  static defaultProps = {
    DiceNum: ["one", "two", "three", "four", "five", "six"],
  };
  // initial state
  state = {
    dice1: "one",
    dice2: "five",
    isRolling: false
  };
  // roll method
  roll = (e) => {
    const newDice1 = this.props.DiceNum[
      Math.floor(Math.random() * this.props.DiceNum.length)
    ];
    const newDice2 = this.props.DiceNum[
      Math.floor(Math.random() * this.props.DiceNum.length)
    ];

    // set new state with new roll
    this.setState({dice1: newDice1, dice2: newDice2, isRolling: true});

    // wait one second, then set isRolling to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 500);
  }
  render() {
    return (
      <div>
        <Dice face={this.state.dice1} rolling={this.state.isRolling} />
        <Dice face={this.state.dice2} rolling={this.state.isRolling} />
        <button
          onClick={this.roll}
          className="RollDice-btn"
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
export default RollDice;
