    
import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

// import React  from "react ------>be alert!!!     then using class App extentds React.Component
class App extends Component {
//   constructor(props) {
//     super(props);
// // there is not need to use bind() method to bind my other methods i created  bc I'm using arrow functions (es6)
//     this.state = {
//       input: ""
//     };
//   }

  state = {
    input: ""
  }

  handleInput = val => {
    this.setState((prevState) => {
      return {
        input: prevState.input + val
      }
    });
  };

  handleEqual = () => {
    // keep in mind: setState method uses a function to return an object, that's the  formal way
    this.setState((prevState) => {
      return {
        input: math.eval(prevState.input) 
      }
    })
  };


  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.handleInput}>7</Button>
            <Button handleClick={this.handleInput}>8</Button>
            <Button handleClick={this.handleInput}>9</Button>
            <Button handleClick={this.handleInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>4</Button>
            <Button handleClick={this.handleInput}>5</Button>
            <Button handleClick={this.handleInput}>6</Button>
            <Button handleClick={this.handleInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>1</Button>
            <Button handleClick={this.handleInput}>2</Button>
            <Button handleClick={this.handleInput}>3</Button>
            <Button handleClick={this.handleInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>.</Button>
            <Button handleClick={this.handleInput}>0</Button>
            {/* creating a function in the spot */}
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.handleInput}>-</Button>
          </div>
          <div className="row">
          {/* creating a function in the spot */}
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
} 

export default App;