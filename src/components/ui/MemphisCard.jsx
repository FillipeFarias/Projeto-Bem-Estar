import React from "react";

export function MemphisCard({ emoji, title, color }) {
  return (
    <div
      className={`border-4 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#000] ${color} transition-transform duration-200 hover:scale-105 hover:shadow-[10px_10px_0px_#000] cursor-pointer`}
    >
      <div className="text-6xl mb-4 text-center">{emoji}</div>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
    </div>
  );
}
