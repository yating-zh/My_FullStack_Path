import { useReducer, useState } from "react";
import "./App.css";

export default function UseReducerPracticeBank() {
  const [amount, setAmount] = useState("");
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  function reducer(state, action) {
    if (action.type === "deposit") {
      state = { ...state, balance: state.balance + action.value };
      console.log(`${action.type}, ${action.value}, balance:${state.balance}`);
    }
    if (action.type === "withdraw") {
      state = { ...state, balance: state.balance - action.value };
      console.log(`${action.type}, ${action.value}, balance:${state.balance}`);
    }
    return state;
  }
  return (
    <div>
      <hr />
      <h2>Example - Bank Account:</h2>
      <p>the balance in the account is:{state.balance} </p>
      <input
        type="text"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
      />
      <button onClick={() => dispatch({ type: "deposit", value: amount })}>
        deposit
      </button>
      <button onClick={() => dispatch({ type: "withdraw", value: amount })}>
        widthdraw
      </button>
    </div>
  );
}
