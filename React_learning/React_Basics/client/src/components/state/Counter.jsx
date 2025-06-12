import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    //setCount(count + 1);
    setCount(count + incrementBy);
  }
  function decrement() {
    //setCount(count - 1);
    setCount(count - incrementBy);
  }
  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <hr />
      <h3>State</h3>
      <p>the current counter is: {count} </p>
      <button onClick={increment}>increase count</button>
      <button onClick={decrement}>decrease count</button>
      <p>incrementBy: {incrementBy}</p>
      <button onClick={increaseIncrement}>increase increment</button>
      <button onClick={decreaseIncrement}>decrease increment</button>
    </div>
  );
}
