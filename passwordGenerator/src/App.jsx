import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [isNum, setNum] = useState(false);
  const [isChar, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = () => {};
  return (
    <>
      <h1 className="text-3xl bg-white text-black rounded-2xl w-96 p-3 ml-[50%] -translate-x-[50%] border-yellow-600 border-4">
        Password Generator
      </h1>
    </>
  );
}

export default App;
