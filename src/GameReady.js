import React, { Component } from "react";

export default function ({ gameType, startTime, numberList, newGameFunction }) {
  return (
    <div>
      <h3>{gameType}</h3>
      <p>{startTime} seconds.</p>
      <p>Are you ready?</p>
      <button id="btn" onClick={newGameFunction.bind(this, 2)}>
        Go
      </button>
    </div>
  );
}

class SelectNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: this.props.numberList,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectValue: event.target.value });
  }

  render() {
    let options = ["All", 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
      <option value={item}>{item}</option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          {this.props.numberList.length === 9
            ? "Using all numbers combinations"
            : "Using numbers: " + this.props.numberList.join(",")}
        </p>
        <label>
          Numbers to test:
          <select value={this.state.selectValue} onChange={this.handleChange}>
            {options}
          </select>
        </label>
      </form>
    );
  }
}
