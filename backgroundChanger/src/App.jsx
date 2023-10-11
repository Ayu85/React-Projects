import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-wrap bg-white rounded-xl text-xl justify-around py-2  ml-[50%] -translate-x-[50%] ">
        <button className="py-1 pl-7 pr-7 rounded-full bg-red-600 text-white">
          Red
        </button>
        <button className="py-1 pl-7 pr-7 rounded-full bg-yellow-500 text-black">
          Yellow
        </button>
        <button className="py-1 pl-7 pr-7 rounded-full bg-green-600 text-white">
          Green
        </button>
        <button className="py-1 pl-7 pr-7 rounded-full bg-purple-600 text-white">
          Purple
        </button>
        <button className="py-1 pl-7 pr-7 rounded-full bg-purple-300 text-black">
          Lavender
        </button>
        <button className="py-1 pl-7 pr-7 rounded-full bg-pink-500 text-white">
          Pink
        </button>
      </div>
    </>
  );
}

export default App;
