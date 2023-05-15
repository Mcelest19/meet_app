import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    number: 32,
    errorText: ""
  }
  

  handleNumberChange = (event) => {
    let inputValue = event.target.value;
      this.props.updateEvents(null, inputValue);
      this.setState({ number: inputValue }); 
      if (inputValue >= 1 || inputValue <= 32) {
        this.setState({
          query: inputValue,
          errorText: "",
        });
        this.props.updateEvents(null, inputValue);
      } 
        if (inputValue < 1 || inputValue > 32) {
          this.setState({
            query: inputValue,
            errorText: "Please enter a valid number",
          });
          console.log(this.state.errorText);
        }
      };
    

  render() {
    return (
      <div className="NumberOfEvents">
         <ErrorAlert text={this.state.errorText} />
        <h3>Number of events:</h3>
        <input
          id="number-of-events"
          type="number"
          className="number"
          value={this.state.number} 
          onChange={this.handleNumberChange}  
        />       
      </div>
    );
  }
}

export default NumberOfEvents;