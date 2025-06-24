import { useState } from "react";
import "./App.css";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>use useState:</h2>
      <button onClick={() => setCount(count + 1)}>decrement</button>
      {count}
      <button onClick={() => setCount(count - 1)}>increment</button>
      <hr />
    </div>
  );
}

export default UseState;
