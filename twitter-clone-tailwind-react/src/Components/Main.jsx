import React, { useState } from "react";
import Tweets from "./Tweets";
import { GitData } from "../Data/GitData";
const Main = () => {
  const [tweets, setTweets] = useState([]);
  const [img,setImage]=useState("");
  return (
    <div className="border-white border w-4/5">
      <form
        className="!min-w-full"
        onSubmit={(event) => {
          event.preventDefault();
          setTweets((a) => [...a, document.querySelector("#tweet").value]);
          GitData().then(data=>setImage(data));
        }}
      >
        <textarea
          type="textarea"
          id="tweet"
          className="bg-gray-800 mx-auto w-full py-2 px-3 h-36 font-bold"
        />
        <div className="w-full flex justify-end p-1"><button className="px-7 py-2 mb-2 me-4 w-30 bg-white text-black rounded-3xl" type="submit">Tweet</button></div>
      </form>
      <div className="flex flex-col border-solid gap-3 flex-col-reverse border-white border">
        {tweets.map((data, index) => (
          <Tweets tweet={data} img={img} key={index}></Tweets>
        ))}
      </div>
    </div>
  );
};

export default Main;
