import React from "react";
import { useState } from "react";
function Card1({ name, date, month, year }) {
  let [item, setItem] = useState({ name });
  const itemAdded = function itemAdd() {
    setItem("{Vercel}");
    console.log({ name }, "added to cart");
  };

  return (
    <div className="flex justify-between py-3 pl-3 pr-3 items-center bg-slate-400 w-96 rounded-xl h-24">
      <div className="bg-black h-20 text-white inline-flex flex-col justify-center items-center py-3 pl-3 pr-3 rounded-2xl w-32">
        <span>{month}</span>
        <span>{year}</span>
        <span>{date}</span>
      </div>
      <div className="text-2xl font-semibold text-white">{name}</div>
      <button className="bg-white py-1 pl-1 pr-1 text-sm" onClick={itemAdded}>
        View More
      </button>
    </div>
  );
}
export default Card1;
