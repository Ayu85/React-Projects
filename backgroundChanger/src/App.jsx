import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import bodyElement from "./main";
function App() {
  const [color, setColor] = useState("olive");
  function change() {}
  return (
    <>
      <div
        className="w-full bg-black h-screen duration-500 fixed"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap bg-white rounded-xl text-xl justify-around py-2  ml-[50%] -translate-x-[50%]   gap-5 pl-5 pr-5 w-max-content mt-[10vh] items-center ">
          <button
            className="py-1 pl-7 pr-7 rounded-full bg-red-600 text-white"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="py-1 pl-7 pr-7 rounded-full bg-yellow-500 text-black"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="py-1 pl-7 pr-7 rounded-full bg-green-600 text-white"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="py-1 pl-7 pr-7 rounded-full bg-purple-600 text-white"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="py-1 pl-7 pr-7 rounded-full bg-purple-300 text-black"
            onClick={() => {
              setColor(" rgb(216 180 254 / var(--tw-bg-opacity))");
            }}
          >
            Lavender
          </button>
          <button
            className="py-1 pl-7 pr-7 rounded-full bg-pink-500 text-white"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
