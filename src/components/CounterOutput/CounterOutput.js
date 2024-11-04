import React from "react";

import "./CounterOutput";

const CounterOutput = (props) => (
  <div className="counter-output"> Count: {props.value}</div>
);

export default CounterOutput;
