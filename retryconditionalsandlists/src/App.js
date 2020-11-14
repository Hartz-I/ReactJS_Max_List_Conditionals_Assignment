import React, { Component } from "react";
import CharComponent from "./CharComponent/CharComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    text: null,
    letters: [],
  };

  textChangeHandler = (event) => {
    const value = event.target.value;
    const letters = [];

    for (let i = 0; i < event.target.value.length; i++) {
      letters.push(value[i]);
    }

    this.setState({
      counter: event.target.value.length,
      text: event.target.value,
      letters: letters,
    });
    console.log(letters);
  };

  textDeleteHandler = (index) => {
    const letters = [...this.state.letters];

    letters.splice(index, 1);

    this.setState({
      letters: letters,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <h2>The length of the text is {this.state.counter}</h2>
        <input onChange={this.textChangeHandler}></input>
        <br />
        <ValidationComponent length={this.state.counter} />

        {this.state.letters.map((letter, index) => {
          return (
            <CharComponent
              char={letter}
              clicked={() => {
                this.textDeleteHandler(index);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
