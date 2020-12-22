import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";

export default function mainpage() {
  return (
    <div>
      <div className="flex justify-center py-4 bg-blue-500">
        <div className=" text-3xl text-white font-bold">Typing Master</div>
      </div>
      <div className="flex w-screen h-screen text-2xl justify-center items-center p-8 bg-gray-400">
        <Link to="/timerset">
          <button className=" border p-4 rounded-full text-gray-800 shadow-2xl border-xl mr-4 border-blue-800 bg-white">
            Start Test
          </button>
        </Link>
      </div>
    </div>
  );
}
