import { useState } from "react";
import "./App.css";
import Card1 from "./components/card1";
import Navbar from "./components/nav";
function App() {
  const data = [
    {
      name: "G20 Summit India",
      year: "2023",
    },
    {},
  ];
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-wrap flex-row bg-slate-400 rounded-xl mt-10 w-[150vh] ml-[50%] -translate-x-[50%] justify-center">
        <Card1 heading={data[0].name} year={data[0].year}></Card1>
        <Card1 heading="G20 Summit UK" year="2021"></Card1>
        <Card1 heading="G20 Summit Israiel" year="2020"></Card1>
        <Card1 heading="G20 Summit China" year="2024"></Card1>
        <Card1 heading="G20 Summit USA" year="2019"></Card1>
        <Card1 heading="G20 Summit Russia" year="2018"></Card1>
      </div>
    </>
  );
}

export default App;
