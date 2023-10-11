import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
    else alert("cant increment more");
  };
  const subValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else alert("cant decrement more");
  };
  return (
    <>
      <h1>Counter Application</h1>
      <h3>Counter Value: {counter}</h3>
      <button className="btn" onClick={addValue}>
        Increment +
      </button>
      <button className="btn" onClick={subValue}>
        Decrement -
      </button>
    </>
  );
}

export default App;
