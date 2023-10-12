import React from "react";
function Card1({ name, date, month, year }) {
  return (
    <div className="flex justify-between py-3 pl-3 pr-3 items-center bg-slate-400 w-80 rounded-xl h-24">
      <div className="bg-black h-20 text-white inline-flex flex-col justify-center items-center py-3 pl-3 pr-3 rounded-2xl">
        <span>{month}</span>
        <span>{year}</span>
        <span>{date}</span>
      </div>
      <div className="text-2xl font-semibold text-white">{name}</div>
    </div>
  );
}
export default Card1;
