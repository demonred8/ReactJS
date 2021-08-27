import React from 'react'


function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onCLick={increment}>Increment</button>
      <button onCLick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
