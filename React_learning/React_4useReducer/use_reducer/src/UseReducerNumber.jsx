import { useReducer } from "react";
import "./App.css";

function UseReducerNumber() {
  const [state, dispatch] = useReducer(reducer, 0);
  //const [state, dispatch~=actions object]=useReducer(function to change state, initial state)
  function reducer(state, action) {
    if (action.type === "increment") {
      state = state + action.payload;
    }
    if (action.type === "decrement") {
      state = state - action.payload;
    }
    return state; //MUST return
    //console.log(state);
    //console.log(action.payload);
  }
  return (
    <div>
      <h2>useReduce - state is a single number:</h2>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        decrement
      </button>
      {state}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        increment
      </button>
    </div>
  );
}

export default UseReducerNumber;
