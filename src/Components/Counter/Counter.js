import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let [countStep, setCountStep] = useState(1);
  const [intervalID, setIntervalID] = useState(0);
  let [intervalMS, setIntervalMS] = useState(1000);

  const increment = () => setCount(count + countStep);
  const decrement = () => setCount(count - countStep);

  const incrementMS = () => {
    setIntervalMS((intervalMS += 1000));
    if (intervalID) {
      clearInterval(intervalID);
      const newIntervalID = setInterval(() => {
        setCount((count) => count + countStep);
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
        setCount((count) => count + countStep);
      }, intervalMS);
      setIntervalID(newIntervalID);
    }
  };

  const interval = (event) => {
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(0);
      setIntervalMS(1000);
      setCountStep(1);
      setCount(0);
      event.target.textContent = "Start interval";
    } else {
      const newIntervalID = setInterval(() => {
        setCount((count) => count + countStep);
      }, intervalMS);
      setIntervalID(newIntervalID);
      event.target.textContent = "Stop interval";
    }
  };

  const incrementStep = () => {
    setCountStep((countStep += 10));
    if (intervalID) {
      clearInterval(intervalID);
      const newIntervalID = setInterval(() => {
        setCount((count) => count + countStep);
      }, intervalMS);
      setIntervalID(newIntervalID);
    }
  };

  const decrementStep = () => {
    setCountStep((countStep -= 10));
    if (intervalID) {
      clearInterval(intervalID);
      const newIntervalID = setInterval(() => {
        setCount((count) => count + countStep);
      }, intervalMS);
      setIntervalID(newIntervalID);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <h2>{countStep}</h2>
      <h3>{intervalMS} Interval MS</h3>
      <button onClick={interval}>Start interval</button>
      <button onClick={increment}>Increment counter</button>
      <button onClick={decrement}>Decrement counter</button>
      <button onClick={incrementStep}>Increment counter Step by 10</button>
      <button onClick={decrementStep}>Decrement counter Step by 10</button>
      <button onClick={incrementMS}>Interval MS +</button>
      <button onClick={decrementMS}>Interval MS -</button>
    </div>
  );
}

export default Counter;
