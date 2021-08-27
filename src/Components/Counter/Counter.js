import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [intervalID, setIntervalID] = useState(0);
  let [intervalMS, setIntervalMS] = useState(1000);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const incrementMS = () => {
    setIntervalMS((intervalMS += 1000));
    if (intervalID) {
      clearInterval(intervalID);
      const newIntervalID = setInterval(() => {
        setCount((count) => count + 1);
      }, intervalMS);
      setIntervalID(newIntervalID);
    }
  };

  const decrementMS = () => {
    setIntervalMS((intervalMS -= 1000));
    if (intervalMS < 0) {
      setIntervalMS((intervalMS = 0));
    }
    if (intervalID) {
      clearInterval(intervalID);
      const newIntervalID = setInterval(() => {
        setCount((count) => count + 1);
      }, intervalMS);
      setIntervalID(newIntervalID);
    }
  };

  const interval = (event) => {
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(0);
      setIntervalMS(1000);
      setCount(0);
      event.target.textContent = "Start interval";
    } else {
      const newIntervalID = setInterval(() => {
        setCount((count) => count + 1);
      }, intervalMS);
      setIntervalID(newIntervalID);
      event.target.textContent = "Stop interval";
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <h2>{intervalMS} Interval MS</h2>
      <button onClick={interval}>Start interval</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementMS}>Interval +</button>
      <button onClick={decrementMS}>Interval -</button>
    </div>
  );
}

export default Counter;
