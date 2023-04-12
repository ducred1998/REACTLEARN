import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 0);
  };
  return <button onClick={handleIncrement}>Increment {count}</button>;
};

export default Counter;
