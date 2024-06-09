import React from "react";

export const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] px-5 py-4 flex justify-between items-center border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 ">
      <img className="h-7" src={val.url} />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};
