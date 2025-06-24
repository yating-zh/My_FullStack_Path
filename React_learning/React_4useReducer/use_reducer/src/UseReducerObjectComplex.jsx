import { useReducer } from "react";
import "./App.css";

function UseReducerObjectComplex() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  //const [state, dispatch~=actions object]=useReducer(function to change state, initial state)
  function reducer(state, action) {
    if (action.type === "increment") {
      //state = state + action.payload;
      state = { ...state, count: state.count + state.incrementBy };
    }
    if (action.type === "decrement") {
      //state = state - action.payload;
      state = { ...state, count: state.count - state.incrementBy };
    }
    if (action.type === "set increment") {
      //state = state - action.payload;
      state = {
        ...state,
        incrementBy: action.payload,
      };
    }
    return state; //MUST return
    //console.log(state);
    //console.log(action.payload);
  }
  return (
    <div>
      <hr />
      <h2>useReduce - state is an object:</h2>
      <span>set increment</span>
      <input
        value={state.incrementBy}
        type="text"
        onChange={(e) =>
          dispatch({ type: "set increment", payload: Number(e.target.value) })
        }
      />
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

export default UseReducerObjectComplex;
