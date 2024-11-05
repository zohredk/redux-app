import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 2,
      };
    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - 2,
      };
    case actionTypes.RESULT:
      return {
        ...state,
        result: state.result.concat(state.counter),
      };
    default:
      return state;
  }
};

export default reducer;
