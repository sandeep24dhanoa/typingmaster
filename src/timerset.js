import { Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Timer from "react-compound-timer";

function Timerset() {
  const times = [1, 2, 3, 5];
  return (
    <div>
      <div className="flex justify-center py-4 bg-blue-500">
        <div className=" text-3xl text-white font-bold">Typing Master</div>
      </div>

      <div className=" w-screen h-screen text-xl justify-center items-center bg-gray-400 p-5">
        <div>
          <Link to="/">
            <button className="text-black underline">Back</button>
          </Link>
        </div>

        <div className="w-screen h-screen text-2xl justify-center items-center p-8 bg-gray-400">
          <div className="text-center m-10 font-bold text-3xl">Choose Time</div>
          <div className="text-center">
            {times.map((time) => (
              <Link to={`/typingtest?time=${time}`}>
                <button
                  // onClick={() => localStorage.setItem("time", time)}
                  className=" border p-4 rounded-full text-gray-800 shadow-2xl border-xl mr-4 border-blue-800 bg-white"
                >
                  {time} Min Test
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timerset;
