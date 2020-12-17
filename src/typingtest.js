import { Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function typingtest() {
  const [duration, setDuration] = useState(60);
  return (
    <div className=" w-screen h-screen text-xl justify-center items-center bg-gray-400 p-5">
      <div>
        <Link to="/mainpage">
          <button className="text-gray-800 underline">Back</button>
        </Link>
      </div>
      <div className="px-40 text-center">
        <button className="mt-10 border p-4 rounded-full text-white shadow-2xl border-xl mr-4 mb-4 bg-indigo-700">
          Start
        </button>
      </div>

      <div className="flex justify-center items-center rounded-lg">
        <div className="p-10 bg-white rounded-lg">Word Count</div>
        <div className="p-10 m-10 bg-white rounded-lg">Timer</div>
      </div>

      <div className="text-center ">
        <Input.Textarea
          className="border rounded-xl border-black"
          type="text"
          rows={10}
          cols={100}
        />
      </div>
    </div>
  );
}
