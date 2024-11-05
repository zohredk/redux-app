import React from "react";

import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { type } from "@testing-library/user-event/dist/type";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Add" clicked={this.props.onIncrement} />
        <CounterControl label="Remove" clicked={this.props.onDecrement} />
        <CounterControl label="Add 2" clicked={this.props.onAdd} />
        <CounterControl label="Remove 2" clicked={this.props.onSub} />
        <div>
          <button onClick={this.props.onSotreResult}>show store</button>
          {this.props.storeResult.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storeResult: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () =>
      dispatch({
        type: "INCREMENT",
      }),
    onDecrement: () =>
      dispatch({
        type: "DECREMENT",
      }),
    onAdd: () =>
      dispatch({
        type: "ADD",
        value: 2,
      }),
    onSub: () =>
      dispatch({
        type: "SUB",
        value: 2,
      }),
    onSotreResult: () => dispatch({ type: "RESULT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
