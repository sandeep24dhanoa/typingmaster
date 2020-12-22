import { Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Timer from "react-compound-timer";
import {
  CaretRightOutlined,
  PlayCircleTwoTone,
  StopOutlined,
  StopTwoTone,
  ReloadOutlined,
  BorderOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

function Typingtest(props) {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(true);
  const [counter, setCounter] = React.useState(60);
  const timerRef = useRef();

  const params = new URLSearchParams(useLocation().search);
  const time = params.get("time");

  const countWords = (text) => {
    let str = text;
    str = str.match(/\b[-?(\w+)?]+\b/gi);
    return str?.length || 0;
  };
  const starttext = () => {
    setStart(false);
  };

  useEffect(() => {
    setCount(countWords(words));
  }, [words]);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  console.log(timerRef, "TIMER");
  return (
    <div>
      <div className="flex justify-center py-4 bg-blue-500">
        <div className=" text-3xl text-white font-bold">Typing Master</div>
      </div>

      <div className=" w-screen h-screen text-xl justify-center items-center bg-gray-400 p-5">
        <div>
          <Link to="/">
            <button className="text-black underline mx-10">Back</button>
          </Link>

          <Link to="/timerset">
            <button className="text-black underline">Select time</button>
          </Link>
        </div>
        <div className="flex justify-center items-center rounded-lg">
          <div className="p-10 bg-white rounded-full text-lg">
            Word Count
            <div className="text-red-600">{countWords(words)}</div>
          </div>
          <div className="p-10 px-16 m-5 bg-white text-lg rounded-full">
            Timer
            <div>
              <Timer
                ref={timerRef}
                initialTime={60000 * Number(time)}
                direction="backward"
                startImmediately={false}
                onStart={() => setStart(false)}
                onStop={() => setStart(true)}
              >
                {({ start, reset }) => (
                  <React.Fragment>
                    <div>
                      <Timer.Minutes />:
                      <Timer.Seconds />:
                      <Timer.Milliseconds />
                    </div>
                  </React.Fragment>
                )}
              </Timer>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="text-white">
            <PlayCircleOutlined
              className="bg-blue-700 p-8 rounded-full m-10 "
              type="button"
              onClick={() => {
                timerRef.current.start();
              }}
            >
              Start
            </PlayCircleOutlined>
          </div>
          <div className="text-white m-10">
            <ReloadOutlined
              className="bg-blue-700 p-8 rounded-full"
              type="button"
              onClick={() => {
                timerRef.current.reset();
              }}
            >
              Reset
            </ReloadOutlined>{" "}
          </div>
          <div className="text-white m-10">
            <StopOutlined
              className="bg-blue-700 p-8 rounded-full"
              type="button"
              onClick={() => {
                timerRef.current.stop();
              }}
            >
              Stop
            </StopOutlined>
          </div>
        </div>

        <div className="text-center mt-10">
          <Input.TextArea
            className="border rounded-xl border-black"
            type="text"
            value={words}
            onChange={(e) => setWords(e.target.value)}
            rows={10}
            cols={100}
            disabled={start}
          />
        </div>
      </div>
    </div>
  );
}

export default Typingtest;
