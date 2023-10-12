import { useState } from "react";
import "./App.css";
import Card1 from "./components/card1";
function App() {
  return (
    <>
      <div className="bg-yellow-700 w-96 h-max rounded-xl flex flex-col gap-4 justify-center items-center py-5  ml-[50%] -translate-x-[50%] mt-20">
        <Card1 name='React' year='2023' date='15' month='September'></Card1>
        <Card1 name='Angular' year='2024' date='25' month='October'></Card1>
        <Card1 name='Vue' year='2025' date='10' month='November'></Card1>
        <Card1 name='Vite' year='2026' date='11' month='December'></Card1>
      </div>
    </>
  );
}

export default App;
