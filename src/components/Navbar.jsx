import React from "react";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <div className="max-w-screen-lg p-3 mx-auto py-6 flex items-center justify-between font-['Satoshi'] border-b-[1px] border-zinc-700 ">
      <div className="nleft flex items-center ">
        {" "}
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex  gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span key={index} className="bg-zinc-700 w-[2px] h-5"></span>
            ) : (
              <a
                className="text-sm font-normal flex items-center  gap-1 "
                key={index}
              >
                {index == 1 && (
                  <span
                    key={index}
                    style={{ boxShadow: " 0 0 0.45em #00ff19 " }}
                    className="inline-block w-1 h-1 bg-lime-400 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            );
          })}
        </div>
      </div>
      <Button />
    </div>
  );
};
