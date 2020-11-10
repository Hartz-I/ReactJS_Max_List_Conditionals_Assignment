import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputText: null,
    outputText: "The length of text is 0",
    outputLength: null,
  };

  textSizeHandler = (event) => {
    this.setState({
      inputText: event.target.value,
      outputText: "The length of text is " + event.target.value.length,
      outputLength: event.target.value.length,
    });
  };
  render() {
    const letters = [];

    for (let i = 0; i < this.state.outputLength; i++) {
      letters.push(this.state.inputText[i]);
    }

    return (
      <div className="App">
        <h2>{this.state.outputText}</h2>
        <input onChange={this.textSizeHandler}></input>
        <br />

        <ValidationComponent length={this.state.outputLength} />

        {letters.map((letter, index) => {
          return <CharComponent letter={letter} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
