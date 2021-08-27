import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [intervalID, setIntervalID] = useState(0)

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function interval(event) {
    if(intervalID) {
      clearInterval(intervalID);
      setIntervalID(0);
      setCount(0)
      event.target.textContent = 'Start interval'
      return
    }
    const newIntervalID = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    setIntervalID(newIntervalID);
    event.target.textContent = 'Stop interval'
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={interval}>Start interval</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
