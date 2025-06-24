import { useReducer } from "react";
import "./App.css";

function UseReducerObject() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //const [state, dispatch~=actions object]=useReducer(function to change state, initial state)
  function reducer(state, action) {
    if (action.type === "increment") {
      //state = state + action.payload;
      state = { ...state, count: state.count + action.payload };
    }
    if (action.type === "decrement") {
      //state = state - action.payload;
      state = { ...state, count: state.count - action.payload };
    }
    return state; //MUST return
    //console.log(state);
    //console.log(action.payload);
  }
  return (
    <div>
      <hr />
      <h2>useReduce - state is an object:</h2>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        decrement
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        increment
      </button>
    </div>
  );
}

export default UseReducerObject;
