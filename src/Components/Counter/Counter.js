import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countStep, setCountStep] = useState(1);
  const [intervalID, setIntervalID] = useState(null);
  const [intervalMS, setIntervalMS] = useState(1000);

  const incrementCount = () => setCount(count + countStep);
  const decrementCount = () => setCount(count - countStep);

  const interval = () => {
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(null);
    } else {
      const newIntervalID = setInterval(() => {
        setCount((count) => count + countStep);
      }, intervalMS);
      setIntervalID(newIntervalID);
    }
  };

  const setCountStepValue = (event) => {
    const newCountStep = Number(event.target.value);
    setCountStep(newCountStep);
    if (intervalID) {
      clearInterval(intervalID);
      const newIntervalID = setInterval(() => {
        setCount((count) => count + newCountStep);
      }, intervalMS);
      setIntervalID(newIntervalID);
    }
  };

  const setIntervalMSValue = (event) => {
    const newIntervalMs = Number(event.target.value);
    setIntervalMS(newIntervalMs);
    if (intervalID) {
      clearInterval(intervalID);
      const newIntervalID = setInterval(() => {
        setCount((count) => count + countStep);
      }, newIntervalMs);
      setIntervalID(newIntervalID);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <span>Count step: </span>
        <input
          type="number"
          value={countStep}
          onChange={setCountStepValue}
          placeholder="Count step"
        ></input>
      </div>
      <div>
        <span>IntervalMS: </span>
        <input
          type="number"
          value={intervalMS}
          onChange={setIntervalMSValue}
          placeholder="Interval MS"
        ></input>
      </div>
      <button onClick={interval}>
        {intervalID ? "Stop Interval" : "Start Interval"}
      </button>
      <button onClick={incrementCount}>{`Counter + ${countStep}`}</button>
      <button onClick={decrementCount}>{`Counter - ${countStep}`}</button>
    </div>
  );
}

export default Counter;
