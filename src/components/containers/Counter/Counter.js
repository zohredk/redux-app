import React from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterControl from "../../components/CounterOutput/CounterOutput";

class Counter extends React.Component {
  state = {
    Counter: 0,
  };

  counterChangeHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.state.counter} />
        <CounterControl
          label="add"
          clicked={() => this.counterChangeHandler("inc")}
        />
        <CounterControl
          label="remove"
          clicked={() => this.counterChangeHandler("dec")}
        />
        <CounterControl
          label="add2"
          clicked={() => this.counterChangeHandler("add")}
        />
        <CounterControl
          label="remove2"
          clicked={() => this.counterChangeHandler("sub")}
        />
      </div>
    );
  }
}
