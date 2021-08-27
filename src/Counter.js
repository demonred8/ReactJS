import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function interval() {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={interval}>Interval</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
