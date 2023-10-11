import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Item1 from "./page_components/Item1";
function App() {
  return (
    <>
      <Item1
        productName="Running Shoes"
        price="210"
        stock="out of stock"
        image="https://images.pexels.com/photos/8801175/pexels-photo-8801175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></Item1>
      <Item1
        productName="Indoor use"
        price="180"
        stock="in stock"
        image="https://images.pexels.com/photos/2787249/pexels-photo-2787249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></Item1>
    </>
  );
}

export default App;
